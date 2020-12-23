const express = require("express");
const axios = require("axios").default;

const app = express();

const headerConfig = {
  headers: {
    'Accept': 'application/json'
  }
}

app.get('/joke', (req, res) => {
  let joke = axios.get("https://icanhazdadjoke.com/", headerConfig).then((response) => res.send(JSON.stringify(response.data))).catch((error) => console.log(error));
});

app.use(express.static(__dirname + "/public"));

app.listen(8080);
