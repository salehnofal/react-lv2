import {
  createContext,
  useContext,
  useState,
} from "react";
const AuthContext = createContext();
function UserProfile() {
  const {
    user,
    logout,
  } = useContext(AuthContext);
  if (!user) {
    return <p>You are not logged in.</p>;
  }
  return (
    <>
      <h3>
        Welcome {user.name}
      </h3>

      <button onClick={logout}>
        Logout
      </button>
    </>
  );
}
export default function Challenge17() {
  const [user, setUser] =
    useState(null);
  function login() {
    setUser({
      name: "Saleh",
    });
  }
  function logout() {
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
      }}
    >
      <h2>
       Authentication Context
      </h2>

      {!user && (
        <button onClick={login}>
          Login
        </button>
      )}

      <UserProfile />
    </AuthContext.Provider>
  );
}