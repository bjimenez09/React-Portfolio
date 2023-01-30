import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

// eslint-disable-next-line no-undef
App.use(express.static(__dirname)); 

App.get("/*", function(req, res) {
  // eslint-disable-next-line no-undef
  res.sendFile(path.join(__dirname, "index.html"));
});

ReactDOM.render(<App />, document.getElementById("root"));

