import { useEffect, useState } from "react";
export function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);
  return {
    data,
    loading,
    error,
  };
}
export default function Challenge21() {
  const {
    data,
    loading,
    error,
  } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <>
      <h2>Custom useFetch Hook</h2>

      {loading && <p>Loading...</p>}

      {error && (
        <p className="error">
          Error: {error}
        </p>
      )}
      {!loading && !error && (
        <div>
          {data.map((user) => (
            <div className="card" key={user.id}>
              <h3>{user.name}</h3>

              <p>Email: {user.email}</p>

              <p>Username: {user.username}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}