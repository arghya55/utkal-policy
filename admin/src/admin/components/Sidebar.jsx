import React from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const go = (path) => {
    window.location.hash = path;
  };

  return (
    <div className="sidebar">

      {/* LOGO */}
      <div className="sidebar-logo">
        <h2>🏥 Utkal Hospital</h2>
        <p className="role-text">Super Admin</p>
      </div>

      {/* MENU */}
      <div className="sidebar-menu">

        <button className="menu-btn" onClick={() => go("/admin")}>
          📊 Dashboard
        </button>

        <button className="menu-btn" onClick={() => go("/admin/create-department")}>
          🏢 Create Department
        </button>

    <button className="menu-btn" onClick={() => go("/admin/create-users")}>
  👤 Create User
</button>


      </div>

      {/* FOOTER */}
      <div className="sidebar-footer">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("admin");
            localStorage.removeItem("token");
            window.location.hash = "/admin/login";
          }}
        >
          🚪 Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;