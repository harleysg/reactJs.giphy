export function addFavService({ id, jwt }) {
  console.log("addFavService -> { id, jwt }", { id, jwt });
  // Fake login API
  return new Promise((resolve) => {
    setTimeout(() => {
      setTimeout(() => {
        resolve({
          favs: [id],
        });
      }, 1000);
    }, 400);
  });

  /**
   * Login API
   *
   * const URL = `ENDPOINT/favs/${id}`
   *
   * return fetch(URL,{
   * method: "POST",
   * headers: { "Content-Type": "application/json" },
   * body: JSON.stringify({jwt})
   * }).then(res => {
   *  !res.ok thrwo new Error("Error: Respuesta erronea al loguin")
   *    return res.json()
   * }).then(({ favs }) => favs)
   *
   */
}
