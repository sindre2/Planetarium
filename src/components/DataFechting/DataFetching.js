import axios from "axios";

let planets = [];

export function dataFetching() {
  axios
    .get(
      "https://api.le-systeme-solaire.net/rest/bodies?filter[]=isPlanet,eq,true"
    )
    .then((res) => {
      return (planets = res);
    })
    .catch((err) => {
      console.log(err);
    });
}
