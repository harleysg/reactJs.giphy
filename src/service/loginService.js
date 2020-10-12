export function loginService({ username, password }) {
  console.log(`loginService -> { username, password }`, { username, password });

  // Fake login API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        jwt:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiJvayIsIm5hbWUiOiJIYXJsZXkgU2FudG9zIEdhcnrDs24iLCJ1c2VybmFtZSI6ImdhbG8ifQ._p2OxuLuz-LQ8WERn9eEHE6iojyKXVJzcW3MoGcXjYk",
      });
    }, 2500);
  });

  /**
   * Login API
   *
   * return fetch(URL,{
   * method: "POST",
   * headers: { "Content-type": "application/json" },
   * body: JSON.stringify({username, password})
   * }).then(res => {
   *  !res.ok thrwo new Error("Error: Respuesta erronea al loguin")
   *    return res.json()
   * }).then(jwt => jwt)
   *
   */
}
