import React from "react";
import { Link } from "wouter";

import useUser from "hooks/useUser";

import "./Header.css";

export default function Header({ children }) {
  const { isLogged, logout } = useUser();

  return (
    <header className="App-header">
      <div className="App-wrapper App-header_wrapper">
        <div className="App-header-field">{children}</div>
        <div className="App-user-field">
          {isLogged ? <Link to="/login" onClick={logout}>logout</Link> : <Link to="/login">Login</Link>}
        </div>
      </div>
    </header>
  );
}
