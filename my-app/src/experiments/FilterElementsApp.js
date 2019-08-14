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
  let text = props.children
    .filter(child => child.hasOwnProperty('props'))
    .map(child => child.props.children)
    .join(' ');

  console.log(text);

  var keyword = props.lineContains;
  
  var reStr =
    "\. +"                   + // a preceding sentence-ender, i.e. a period
                               //   followed by one or more spaces
    "("                      + // begin remembering the match (i.e. arr[1] below)
      "[A-Z]"                + // a sentence-starter, i.e. an uppercase letter
      "("                    + // start of a sentence-continuer, which is either
        "[^.]"               + // anything but a period
        "|"                  + // or
        "\.(?! +[A-Z])"      + // a period not followed by one or more spaces
                               //   and an uppercase letter
      ")"                    + // end of a sentence-continuer
      "*?"                   + // zero or more of the preceding sentence-continuers
                               //   but as few as possible
      keyword                + // the keyword being sought
      "([^.]|\.(?! +[A-Z]))" + // a sentence-continuer, as described above
      "*?"                   + // zero or more of them but as few as possible
      "\."                   + // a sentence-ender, i.e. a period
      "(?= +[A-Z])"          + // followed by one or more spaces and an
                               //   uppercase letter, which is not remembered
    ")";                       // finish remembering the match
    
    var re = new RegExp(reStr, "g"); // construct the regular expression

var sentencesWithKeyword = []; // initialize an array to keep the hits
var arr; // prepare an array to temporarily keep 'exec' return values
var expandedText = ". " + text + " A";
// add a sentence-ender (i.e. a period) before the text
//   and a sentence-starter (i.e. an uppercase letter) after the text
//   to facilitate finding the first and last sentences

while ((arr = re.exec(expandedText)) !== null) { // while hits are found
  sentencesWithKeyword.push(arr[1]); // remember the sentence found
  re.lastIndex -= 2; // start the next search two characters back
                     //   to allow for starting the next match
                     //   with the period that ended the current match
}

// show the results
console.log("Text to search:");
console.log(text);
console.log("Query string: " + keyword);
console.log("Hits:");
for (var num = 0; num < sentencesWithKeyword.length; num += 1) {
  console.log((num + 1) + ". " + sentencesWithKeyword[num]);
}

  // make an array of the body
  // let linesArray = text.split(/[\.!?]/g);
  // filter out lines from array to new array
  // let filteredTextArray = linesArray.filter((line) => line.includes(props.lineContains));
  // console.log('filteredText', filteredTextArray);
  // wrap the lines with html
  // let wrappedLines = filteredTextArray.map((line, index) => <p key={index}>{line}</p>);
  // return ready to render text
  // return <Typography component='section'>{wrappedLines}</Typography>;
  return "Filtered Elements";
}
class App extends Component {
  render() {
    return (
      <>
        <Typography variant='h2'>Filter</Typography>
        <Filter lineContains='medical'>
          <p>
            The Kansas state fire marshal issued a rare cease-and-desist order for construction of a Lenexa surgical center, citing serious problems with the center’s design and sterility.
          </p> <p>
            Doug Jorgensen lifted the order last month after the Minimially Invasive Surgical Hospital and Clinics agreed to keep the systems for medical gas, fire alarms and sprinklers uncovered until his office had inspected and approved them.
          </p> <p>
            Jorgensen, reached by phone in Topeka, said his office does inspections every day and seldom has to issue such an order.
          </p>
        </Filter>
      </>
    );
  }
}

export default App;
