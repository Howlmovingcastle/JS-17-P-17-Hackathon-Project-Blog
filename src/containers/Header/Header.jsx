import React from "react";

const Header = () => {
  const { user, checkAuth, logout, loading } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);
  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: "10vw",
      }}
    >
      {user ? (
        <h2>
          User: {user}{" "}
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        </h2>
      ) : (
        <Button variant="outlined" onClick={() => navigate("/signup")}>
          Register
        </Button>
      )}
    </div>
  );
};

export default Header;
