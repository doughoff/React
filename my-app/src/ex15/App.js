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
import { red, yellow, green } from "@material-ui/core/colors";
import ExerciseHeader from "../components/ExerciseHeader";
import styles from '../style';
//----------------------------------- global functions
const pluralize = (quantity, item) => {
  return `${quantity} ${item}${quantity !== 1 ? "s" : ""}`;
};

//----------------------------------- function components
const ClickCounter = () => {
  const [clickCount, setClickCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const shortStatusMessage = `${pluralize(clickCount, "click")} / ${pluralize(
    effectCount,
    "effect"
  )}`;
  const longStatusMessage = `Clicked button ${pluralize(
    clickCount,
    "time"
  )} and effects run ${pluralize(effectCount, "time")}.`;

  useEffect(() => {
    setEffectCount(e => effectCount + 1);
  }, [clickCount]);

  useEffect(() => {
    document.querySelector("#status1").innerHTML = longStatusMessage;
    document.title = shortStatusMessage;
    setTimeout(() => {
      document.querySelector("#status2").innerHTML = longStatusMessage;
    }, 2000);
    return () => {
      console.info(`Effect ${effectCount} cleaned up.`);
    };
  }, [clickCount]);

  // event handlers
  const incrementClicks = () => {
    setClickCount(clickCount + 1);
    document.querySelector("#status1").innerHTML = longStatusMessage;
    document.title = shortStatusMessage;
    setTimeout(() => {
      document.querySelector("#status2").innerHTML = longStatusMessage;
    }, 2000);
  };

  const handleClickOpenAlert = () => {
    setTimeout(() => {
      alert(longStatusMessage);
    }, 2000);
  }; // end handleClickOpenAlert

  const handleClickOpenDialog = () => {
    setTimeout(() => {
      setOpen(true);
    }, 2000);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Typography style={{ lineHeight: "2.5rem" }} id="status1">
        <span style={{ color: "grey" }}>
          Loading...
          <Icon className="fas fa-spinner fa-pulse" />
        </span>
      </Typography>
      <Typography style={{ lineHeight: "2.5rem" }} id="status2">
        <span style={{ color: "grey" }}>
          Loading...
          <Icon className="fas fa-spinner fa-pulse" />
        </span>
      </Typography>
      <Button variant="outlined" color="primary" onClick={incrementClicks}>
        Click me
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpenAlert}>
        Open alert
      </Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpenDialog}>
        Open dialog
      </Button>
      <ClickDialog
        open={isOpen}
        onClose={handleClose}
        message={longStatusMessage}
        />      

    </div>
  );
};

const ClickDialog = (props) => {
  
  return (
    <Dialog open={props.open} onClose={props.onClose} aria-labelledby="simple-dialog-title">
      <DialogTitle id="simple-dialog-title">useEffect( ) counts</DialogTitle>
      <DialogContent>
        <Typography>{props.message}</Typography>
      </DialogContent> 
      </Dialog>
  );
}

//----------------------------------- App class component

class App extends Component {
  static defaultProps = {
    exercise: {
      number: 15.0,
      title: "Hooks – useEffect()",
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
        </Grid>
        {/* Grid item 1 */}

        <Grid item xs={12} style={{ marginBottom: 16 }}>
          <ClickCounter />
        </Grid>
        {/* Grid item 2 */}
      </Grid> // the grid container
    );
  }
}

export default App;
