import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Op55_UrFjiHYALTtsp5NGMy6esgzngEBo-Nyu1aufC4",
  },
});
