import React, { Component, useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Fragment,
  Grid,
  Icon,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from "@material-ui/core";

const Filter = (props) => {
  // get the body of the component
  let text = props.children;
  // make an array of the body
  let linesArray = text.split(/[\.!?]/g);
  // filter out lines from array to new array
  let filteredTextArray = linesArray.filter((line) => line.includes(props.lineContains));
  console.log('filteredText', filteredTextArray);
  // wrap the lines with html
  let wrappedLines = filteredTextArray.map((line, index) => <p key={index}>{line}</p>);
  // return ready to render text
  return <Typography component='section'>{wrappedLines}</Typography>;
}
class App extends Component {
  render() {
    return (
      <>
        <Typography variant='h2'>Filter</Typography>
        <Filter lineContains='medical'>
          The Kansas state fire marshal issued a rare cease-and-desist order for construction of a Lenexa surgical center, citing serious problems with the center’s design and sterility. Doug Jorgensen lifted the order last month after the Minimially Invasive Surgical Hospital and Clinics agreed to keep the systems for medical gas, fire alarms and sprinklers uncovered until his office had inspected and approved them. Jorgensen, reached by phone in Topeka, said his office does inspections every day and seldom has to issue such an order.
        </Filter>
      </>
    );
  }
}

export default App;
