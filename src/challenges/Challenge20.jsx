import {
  useEffect,
  useState,
} from "react";
const users = [
  "Saleh",
  "Ahmad",
  "Sara",
  "Lina",
  "Omar",
  "Noor",
];
export default function Challenge20() {
  const [search, setSearch] =
    useState("");
  const [results, setResults] =
    useState([]);
  const [loading, setLoading] =
    useState(false);
  useEffect(() => {
    if (!search) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(() => {
      const filteredUsers =
        users.filter((user) =>
          user
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        );
      setResults(filteredUsers);
      setLoading(false);
    }, 500);
    return () =>
      clearTimeout(timer);
  }, [search]);
  return (
    <>
      <h2>
       Debounced Search
      </h2>
      <input
        placeholder="Search user"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
      {loading && (
        <p>Searching...</p>
      )}
      {!loading &&
        search &&
        results.length === 0 && (
          <p>No results found.</p>
        )}
      {results.map((user) => (
        <div
          className="card"
          key={user}
        >
          {user}
        </div>
      ))}
    </>
  );
}