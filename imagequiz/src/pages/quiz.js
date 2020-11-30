import React from "react";
import Button from "@material-ui/core/Button";

import Question from "./question";
import "./quiz.css";

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
flowers = flowers.concat(flowers);

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      one: false,
      two: false,
      three: false,
      four: false,
      five: false,
      six: false,
      score: "Show Score",
    };
  }

  handleScoreOne = (boolean) => {
    this.setState({
      one: boolean,
    });
  };
  handleScoreTwo = (boolean) => {
    this.setState({
      two: boolean,
    });
  };
  handleScoreThree = (boolean) => {
    this.setState({
      three: boolean,
    });
  };
  handleScoreFour = (boolean) => {
    this.setState({
      four: boolean,
    });
  };
  handleScoreFive = (boolean) => {
    this.setState({
      five: boolean,
    });
  };
  handleScoreSix = (boolean) => {
    this.setState({
      six: boolean,
    });
  };

  handleScore = () => {
    let res = Object.values(this.state).filter((value) => value == true);
    res = (res.length * 100) / 6;
    res = res.toFixed(2);
    this.setState({
      score: `${res}%`,
    });
  };

  render() {
    let score = this.state.score;

    let pathTarget = null;
    flowers.map((ele) => {
      if (`/${ele.name}` == this.props.match.path) {
        pathTarget = ele;
      }
    });

    let pathIndex = flowers.indexOf(pathTarget);

    console.log(pathTarget, pathIndex);

    let handle = [
      this.handleScoreOne,
      this.handleScoreTwo,
      this.handleScoreThree,
      this.handleScoreFour,
      this.handleScoreFive,
      this.handleScoreSix,
    ];

    const quizContents = [];
    for (let index = 0; index < 6; index++) {
      quizContents.push({
        flower: flowers[index + pathIndex],
        handle: handle[index],
      });
    }
    console.log(quizContents);

    return (
      <div className="quiz">

        <div className="nav">
          <Button variant="outlined" color="primary" href="./home">
          Home
          </Button>
          <Button variant="outlined" color="primary" href="./login">
          Login
          </Button>
        </div>

        <div className="row">
          {quizContents.map((ele, idx) =>
            idx < 3 ? (
              <Question
                idx={idx + 1}
                target={ele.flower}
                handleScore={ele.handle}
              ></Question>
            ) : null
          )}
        </div>

        <div className="row">
          {quizContents.map((ele, idx) =>
            idx >= 3 ? (
              <Question
                idx={idx + 1}
                target={ele.flower}
                handleScore={ele.handle}
              ></Question>
            ) : null
          )}
        </div>

        <div className="row link">
          <Button variant="contained" onClick={this.handleScore}>
            {score}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick = {() =>{
              this.props.history.push(`.${this.props.match.path}`)
            }}
          >
            Restart Quiz
          </Button>
        </div>

        
      </div>
    );
  }
}

export default Quiz;
