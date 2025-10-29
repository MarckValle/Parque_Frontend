import React, { useEffect, useState } from "react";
import '/src/assets/styles/sidebar.css'
import { Me } from "../../../utils/api/Login/login.api";

function NavBar({ name }) {
const [user, setUser] = useState({ first_name: "", last_name: "" });

  useEffect(() => {
    const token = localStorage.getItem("access_token"); // tu JWT guardado
    if (token) {
      Me(token)
        .then((data) => setUser(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand" href="/dashboard/">
          {user.first_name} {user.last_name}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-person-circle"></i>{" "}
                {user.first_name} {user.last_name}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;