import React, { Component, Fragment } from "react";
import { Button, Grid, Icon, Paper, Typography } from "@material-ui/core";
import { red, yellow, green } from "@material-ui/core/colors";
import ExerciseHeader from "../components/ExerciseHeader";

class App extends Component {
  static defaultProps = {
    exercise: {
      number: 11,
      title: "Event handling",
      details: `Handling events with React elements is very similar to handling events on DOM elements. There are some syntactic differences: 1) React events are named using camelCase, rather than lowercase 2) With JSX you pass a function as the event handler, rather than a string.`
    }
  };
  state = {
    author: {
      name: "Doug Hoff",
      company: "Centriq Training"
    }
  };

  constructor(props) {
    super(props);
    // this.onClick = this.onClick.bind(this);
    this.state = { buttonClicks: 0 };
  }

  onClick = (e, arg2, arg3) => {
    console.info("Clicked ----- ----- -----");
    let clickTarget = e.currentTarget;
    console.info(clickTarget);
    console.dir(clickTarget);
    let buttonInfoParagraph = document.querySelector(
      "#buttonInfo" + e.currentTarget.innerText
    ).firstChild;
    console.dir(buttonInfoParagraph);
    buttonInfoParagraph.innerHTML = "Click #" + this.state.buttonClicks;
    buttonInfoParagraph.innerHTML += (arg2 ? ' with a 2nd argument of ' + arg2 : '');
    buttonInfoParagraph.innerHTML += (arg3 ? ' and a 3rd argument of ' + arg3 : '');
    this.setState(state => ({
      buttonClicks: ++state.buttonClicks // prefix or postfix??
    }));
  };

  onMouseEnter(e) {
    console.info(
      "Mouse enter",
      e.currentTarget.type,
      e.currentTarget.innerText
    );
  }
  onMouseLeave(e) {
    console.info(
      "Mouse leave",
      e.currentTarget.type,
      e.currentTarget.innerText
    );
  }

  render() {
    const { exercise } = this.props;
    const { author, update } = this.state;
    return (
      <Grid container spacing={2}>
        <Grid item>
          <ExerciseHeader number={exercise.number} title={exercise.title}>
            {exercise.details}
          </ExerciseHeader>
        </Grid>
        {/* Grid item 1 */}
        <Grid item xs={2}>
          <Button
            style={{ backgroundColor: red[100] }}
            variant="contained"
            fullWidth={true}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={(e) => this.onClick(e, 'abc','def')} 
          >
            RED
          </Button>
        </Grid>
        {/* Grid item 2 */}
        <Grid item xs={6}>
          <Paper id="buttonInfoRED" style={{ padding: 9 }}>
            <Typography>Button Info</Typography>
          </Paper>
        </Grid>
        {/* Grid item 3 */}
        <Grid item xs={4} /> {/* Grid item 4 */}
        <Grid item xs={2}>
          <Button
            style={{ backgroundColor: yellow[100] }}
            variant="contained"
            fullWidth={true}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={e => {
              console.info("Synthetic event:", e);
              document.querySelector(
                "#buttonInfo" + e.currentTarget.innerText
              ).firstChild.innerHTML = "Yellow inline";
            }}
          >
            YELLOW
          </Button>
        </Grid>
        {/* Grid item 5 */}
        <Grid item xs={6}>
          <Paper id="buttonInfoYELLOW" style={{ padding: 9 }}>
            <Typography>Button Info</Typography>
          </Paper>
        </Grid>
        {/* Grid item 6 */}
        <Grid item xs={4} /> {/* Grid item 7 */}
        <Grid item xs={2}>
          <Button
            style={{ backgroundColor: green[100] }}
            variant="contained"
            fullWidth={true}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick={this.onClick}
          >
            GREEN
          </Button>
        </Grid>
        {/* Grid item 8 */}
        <Grid item xs={6}>
          <Paper id="buttonInfoGREEN" style={{ padding: 9 }}>
            <Typography>Button Info</Typography>
          </Paper>
        </Grid>
        {/* Grid item 9 */}
        <Grid item xs={4} /> {/* Grid item 10 */}
      </Grid> // the grid container
    );
  }
}

export default App;
