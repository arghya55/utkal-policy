import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadedUser = () => {
      const loadedUser = sessionStorage.getItem("user");
      setUser(loadedUser ? JSON.parse(loadedUser) : null);
    };

    loadedUser(); 

    window.addEventListener("storage", loadedUser);
    window.addEventListener("focus", loadedUser);

    return () => {
      window.removeEventListener("storage", loadedUser);
      window.removeEventListener("focus", loadedUser);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("token");

    setUser(null); // 🔥 instant UI update

    window.location.hash = "#/home";
  };

  return (
    <>
      <div className="home-container">
        <h2 className="home-header">
          Welcome <br />
          <span className="to-text">to</span> <br />
          <span className="home-header1">UTKAL TREE</span>
        </h2>

        {!user ? (
          <button
            className="user-login-btn"
            onClick={() => (window.location.hash = "#/login")}
          >
            User Login
          </button>
        ) : (
          <button className="user-logout-btn" onClick={handleLogout}>
            User Logout
          </button>
        )}
      </div>

      <div className="button-container">
        <div className="button-column">
          <a href="http://10.0.0.24:300/LoginNova.aspx" target="_blank" rel="noopener noreferrer" className="hmis-btn">UTKAL HMIS</a>
          <a href="http://10.0.0.25" target="_blank" rel="noopener noreferrer" className="qms-btn">UTKAL QMS</a>
          <a href="https://utkalhospital.com/" target="_blank" rel="noopener noreferrer" className="website-btn">UTKAL WEBSITE</a>
          <a href="https://10.0.0.12/" target="_blank" rel="noopener noreferrer" className="pacs-btn">UTKAL PACS</a>

          <button
            type="button"
            className="policy-center"
            onClick={() => (window.location.hash = "#/policy")}
          >
            SOP/POLICY/MANUALS
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;