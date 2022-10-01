import { useState, useEffect } from "react";

import UserList from "./UserList";
import UserForm from "./UserForm";

function Users() {
  const [users, setUsers] = useState([]);

  const values = { name: "", email: "", id: "" };

  // boolean state to know if we are editing (this will let us display
  // different inputs based on a condition (conditional rendering)
  const [isEditingUser, setIsEditingUser] = useState(false);
  // object state to set so we know which user we are editing
  const [currentUser, setCurrentUser] = useState(values);

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users");

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();
      setUsers(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // id, name, and email are states that store what values the user types in those fields
  // users is an array of user objects
  // All of these states can be defined in the component
  const handleAddSubmit = async (newUser) => {
    const response = await fetch("http://localhost:4000/api/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
    const content = await response.json();
    setUsers([...users, content]);
  };

  const deleteUser = async (deleteId) => {
    let response = await fetch(`http://localhost:4000/api/users/${deleteId}`, {
      method: "DELETE"
    });
    await response.json();
    // here we are filtering - the idea is remove user from the users array on a button click
    const removeUser = users.filter((user) => {
      // return the rest of the users that don't match the user we are deleting

      return user.id !== deleteId;
    });
    // removeUser returns a new array - so now we are setting the users to the new array
    setUsers(removeUser);
  };

  const editUser = (user) => {
    setIsEditingUser(true);

    setCurrentUser({ ...user });
  };

  const updateUser = (id, updatedUser) => {
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const handleEditSubmit = async (updatedUser) => {
    const response = await fetch(
      `http://localhost:4000/api/users/${updatedUser.id}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
      }
    );
    const result = await response.json();

    updateUser(currentUser.id, updatedUser);
    setCurrentUser(result);

    setIsEditingUser(false);
  };
  return (
    <section className="user-management">
      <h2>User Management</h2>

      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />

      {/* Form functionality */}
      {isEditingUser ? (
        <UserForm
          handleSubmit={handleEditSubmit}
          values={currentUser}
          buttonText="Update"
        />
      ) : (
        <UserForm
          handleSubmit={handleAddSubmit}
          values={values}
          buttonText="Add"
        />
      )}
    </section>
  );
}

export default Users;
