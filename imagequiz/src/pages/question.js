import React from "react";
import "./question.css";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@material-ui/core";

const Question = ({ target, idx, handleScore }) => {
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

  let nameValues = [];
  flowers.forEach((f) => {
    nameValues.push(f.name);
  });
  nameValues = nameValues.concat(nameValues);

  let index = nameValues.indexOf(target.name);
  var pickedValues = [
    nameValues[index],
    nameValues[index + 2],
    nameValues[index + 4],
    nameValues[index + 6],
  ];

  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(e);
    if (e.target.value == target.name) {
      handleScore(true);
    } else {
      handleScore(false);
    }
  };

  return (
    <div className="question">
      <FormControl className="fieldset">
        <FormLabel className="legend">
          {`${idx}. `}
          <img
            src={require("../images/" + target.picture).default}
            className="flower"
            alt={target.name}
          />
        </FormLabel>
        <RadioGroup value={selectedValue} onChange={handleChange}>
          <FormControlLabel
            value={pickedValues[1]}
            control={<Radio />}
            label={pickedValues[1]}
          />
          <FormControlLabel
            value={pickedValues[2]}
            control={<Radio />}
            label={pickedValues[2]}
          />
          <FormControlLabel
            value={pickedValues[3]}
            control={<Radio />}
            label={pickedValues[3]}
          />
          <FormControlLabel
            value={pickedValues[0]}
            control={<Radio />}
            label={pickedValues[0]}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default Question;
