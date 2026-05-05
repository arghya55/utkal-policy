import React, { useEffect, useState } from "react";

import Home from "./Component/Home";
import UserLogin from "./Component/UserLogin";
import Policy from "./Policy/Policy";
import DepartmentPage from "./Page/DepartmentPage";
import AddPolicy from "./Page/AddPolicy";
import Video from "./Video/Video";

function App() {
  const [page, setPage] = useState("home");
  const [deptId, setDeptId] = useState(null);

  useEffect(() => {
    const updateRoute = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();

      if (hash === "" || hash === "/" || hash === "/home") {
        setPage("home");
        return;
      }

      if (hash === "/login") {
        setPage("login");
        return;
      }

      if (hash === "/policy") {
        setPage("policy");
        return;
      }

      if (hash === "/page/addpolicy") {
        setPage("addpolicy");
        return;
      }

      if (hash === "/video") {
        setPage("video");
        return;
      }

      if (hash.startsWith("/department/")) {
        const id = hash.split("/department/")[1];
        setDeptId(id);
        setPage("department");
        return;
      }
    };

    updateRoute();
    window.addEventListener("hashchange", updateRoute);

    return () => window.removeEventListener("hashchange", updateRoute);
  }, []);

  return (
    <>
      {page === "home" && <Home />}
      {page === "login" && <UserLogin />}
      {page === "policy" && <Policy />}
      {page === "department" && <DepartmentPage deptId={deptId} />}
      {page === "addpolicy" && <AddPolicy />}
      {page === "video" && <Video />}
    </>
  );
}

export default App;