import React from "react";
import Button from "@material-ui/core/Button";

import "./homepage.css";

const HomePage = (props) => {
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
    <Button variant="outlined" color="primary" onClick = {() =>{
              props.history.push(`./home`);
            }}>
    Home
    </Button>
    <Button variant="outlined" color="primary" onClick = {() =>{
              props.history.push(`./login`);
            }}>
    Login
    </Button>
  </div>
  <div className='hint'>You can click on any pictures.</div>
      <div className="row">
        {flowers.map((flower, index) => {
          if (index < 4) {
            return (
              <div className="container">
                <img
                  src={require("../images/" + flower.picture).default}
                  className="flower"
                  alt={flower.name}
                  onClick = {() =>{props.history.push(`./${flower.name}`)}}

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
              <div className="container" >
                <img
                  src={require("../images/" + flower.picture).default}
                  className="flower"
                  alt={flower.name}
                  onClick = {() =>{props.history.push(`./${flower.name}`)}}
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