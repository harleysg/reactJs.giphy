import React, { useContext, useState, useEffect } from "react";
import { Title, Meta } from "react-head";
import { useLocation } from "wouter";

import { Head, Header, Brand, Spinner } from "components/index";

import Context from "context/app.context";
import { useUser } from "hooks/index";

import "./Login.css";

export default function Login() {
  const { name } = useContext(Context);

  const [username, setUser] = useState("galo");
  const [password, setPassword] = useState("");

  const [, navigate] = useLocation();
  const { handleLogin, isLogged, loginLoading, loginError } = useUser();

  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate, loginLoading, loginError]);

  function handleSubmit(e) {
    e.preventDefault();

    if (username === "") {
      alert("Warning: Nombre usuario necesario");
      return;
    }
    if (password === "") {
      alert("Warning: password de usuario necesario");
      return;
    }
    handleLogin({ username, password });
  }

  function handleUserName(userData) {
    setUser(userData);
  }
  function handlePassword(userData) {
    setPassword(userData);
  }

  return (
    <>
      <Head>
        <Title> Login | {name}</Title>
        <Meta name="description" content={`Login to ${name}`} />
      </Head>
      <Header>
        <div className="App-header_block">
          <Brand />
        </div>
      </Header>
      <div className={`App-wrapper`}>
        <div className="App-login">
          <form onSubmit={handleSubmit}>
            loginError: {`${loginError}`}
            <br />
            <input type="text" placeholder="name" value={username} onChange={(e) => handleUserName(e.target.value)} />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => handlePassword(e.target.value)}
            />
            <button>send</button>
            <br />
            {loginLoading ? <Spinner /> : null}
          </form>
        </div>
      </div>
    </>
  );
}
