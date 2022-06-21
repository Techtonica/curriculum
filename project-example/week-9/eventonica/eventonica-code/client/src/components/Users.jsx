import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  console.log("users", users);

  // client/src/components/Users.js
  const getUsers = async () => {
    const response = await fetch("http://localhost:4001/users");
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
  }, []);

  //////////////////////
  // ADD USER
  const handleAddOnSubmit = async (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    //console.log(newUser)
    const rawResponse = await fetch("http://localhost:4001/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });
    const content = await rawResponse.json();

    setUsers([...users, content]);
    setName("");
    setEmail("");
    setId("");
  };
  // DeleteUser
  // Delete user
  const handleDeleteUser = async (deleteUser) => {
    // Simple DELETE HTTP request with async await

    let response = await fetch(`http://localhost:4001/users/${deleteUser}`, {
      method: "DELETE"
    });
    await response.json();
    // delete functionality
    const deleteUsers = users.filter((user) => user.id !== deleteUser);
    console.log(deleteUsers);
    setUsers(deleteUsers);
  };

  //////////////// User List
  const renderHeader = () => {
    let headerElement = ["Id", "Name", "Email"];

    return headerElement.map((ele, index) => {
      return <th key={index}>{ele}</th>;
    });
  };

  const renderBody = () => {
    return users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.email}</td>

          <td className="deleteUserButton">
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </td>
        </tr>
      );
    });
  };
  ////////////////////////////////////////////////////////////

  return (
    <section className="user-management">
      <h2>User Management</h2>
      <h3>List of Users</h3>
      <table className="listUser">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>{renderBody()}</tbody>
      </table>

      <div>
        <h3>Add User</h3>
        <form id="add-user" action="#" onSubmit={handleAddOnSubmit}>
          <fieldset>
            <label>Name</label>
            <input
              type="text"
              id="add-user-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type="text"
              id="add-user-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </fieldset>
          {/* Add more form fields here */}
          <input type="submit" value="Add" />
        </form>
      </div>
    </section>
  );
}

export default Users;
