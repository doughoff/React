import React, { Component, useState } from "react";
import {
  Button,
  Checkbox,
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
import { red, yellow, green } from "@material-ui/core/colors";
import ExerciseHeader from "../components/ExerciseHeader";
// ------------------------------------------ CounterInClass component

class CounterInClass extends Component {
  // globals
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      count : 0,
      buttonText: 'Class',
    };
  }
  // event handlers
  handleClick = e => {
    e.preventDefault();
    let {count} = this.state;
    this.setState( {count: count + 1} );
  }
  handleMouseEnter = e => {
    let {buttonText} = this.state;
    this.setState( {buttonText: buttonText + '*'} );
  }
  // render
  render(){
    const {count, buttonText} = this.state;
    return (
        <Button variant="outlined" size='large'
        onMouseEnter={this.handleMouseEnter} onClick={this.handleClick} >{count} {buttonText} </Button>
        )
  }
}
//------------------------------------------   CounterInHook component
const CounterInHook = () => {
  // hooks
  const [count, setCount] = useState(0);
  const [buttonText, setButtonText] = useState('text');

  // event handlers
  const handleClick = 
    e => { e.preventDefault(); return setCount(count + 1);}
  const handleMouseEnter = 
    e =>  setButtonText(buttonText + '!');
  // render
  return (
      <Button variant="contained" size='large' onMouseEnter={handleMouseEnter}
       onClick={handleClick}>{count} {buttonText}</Button>
  )
}

// ------------------------------------------ App component

class App extends Component {
  static defaultProps = {
    exercise: {
      number: 14.0,
      title: "Hooks – useState( )",
      details: `Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.`
    }
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { exercise } = this.props;
    // const { } = this.state;
    return (
      <Grid container spacing={2} style={{ margin: 8 }}>
        <Grid item>
          <ExerciseHeader number={exercise.number} title={exercise.title}>
            {exercise.details}
          </ExerciseHeader>
        </Grid>{/* Grid item 1 */}

        <Grid item xs={12} style={{marginBottom:16}}>
          <CounterInClass/>
          <CounterInHook/>
        </Grid>{/* Grid item 2 */}

      </Grid> // the grid container
    );
  }
}

export default App;
