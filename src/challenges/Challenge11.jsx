import { useEffect, useState } from "react";

export default function Challenge11() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  return (
    <>
      <h2> API User Directory</h2>

      {loading && <p>Loading...</p>}

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>{user.name}</h3>

          <p>Email: {user.email}</p>

          <p>Username: {user.username}</p>
        </div>
      ))}
    </>
  );
}