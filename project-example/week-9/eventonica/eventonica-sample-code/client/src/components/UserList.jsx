function UserList({ users, editUser, deleteUser }) {
  return (
    <table id="users">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email Address</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button onClick={() => editUser(user)}>Edit</button>
            </td>
            <td>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserList;
