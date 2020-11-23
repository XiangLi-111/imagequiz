import React from "react";
import Button from "@material-ui/core/Button";

import "./homepage.css";

const HomePage = () => {
  class Flower {
    constructor(name, pictureName) {
      this.name = name;
      this.picture = pictureName;
    }
  }

  let daffodil = new Flower("Daffodil", "daffodil.png");
  let cherryblossom = new Flower("Cherry blossom", "cherryblossom.png");
  let lily = new Flower("Lily", "lily.jpg");
  let daisy = new Flower("Daisy", "daisy.jpg");
  let sunflower = new Flower("Sunflower", "sunflower.png");
  let tulip = new Flower("Tulip", "tulip.png");
  let rose = new Flower("Rose", "rose.png");
  let waterlily = new Flower("Water lily", "waterlily.png");

  let flowers = [
    daffodil,
    cherryblossom,
    lily,
    daisy,
    sunflower,
    tulip,
    rose,
    waterlily,
  ];

  return (
    <div className="App">
      <div className="nav">
        <Button variant="outlined" color="primary" href="./home">
          Home
        </Button>
        <Button variant="outlined" color="primary" href="./login">
          Login
        </Button>
      </div>
      <div className="row">
        {flowers.map((flower, index) => {
          if (index < 4) {
            return (
              <div className="container">
                <img
                  src={require("../images/" + flower.picture).default}
                  className="flower"
                  alt={flower.name}
                />
                <div className="description">{flower.name}</div>
              </div>
            );
          }
        })}
      </div>
      <div className="row">
        {flowers.map((flower, index) => {
          if (index >= 4) {
            return (
              <div className="container">
                <img
                  src={require("../images/" + flower.picture).default}
                  className="flower"
                  alt={flower.name}
                />
                <div className="description">{flower.name}</div>
              </div>
            );
          }
        })}
      </div>

     
    </div>
  );
};

export default HomePage;
