import React, { Component, Fragment } from "react";
import {Typography, Button, Grid, Icon} from '@material-ui/core';


const exercise = { number: 8.0, title: 'Function components'};


class App extends Component {
  render() {
    return (
      <Grid container spacing={2}>

        <Grid item>
          <ExerciseHeader3 number={exercise.number} title={exercise.title}></ExerciseHeader3>
          <Zilch />
        </Grid> {/* Grid item 1 */}

      </Grid> // the grid container

    );
  }
}

function Zilch() {
  console.info('Did zilch.');
  return null;
}

function ExerciseHeader1(props) {
  return  <Typography variant="h2" gutterBottom> 
  Exercise {props.number} - {props.title}
</Typography>
}

const ExerciseHeader2 = props => (
  <Typography variant="h2" gutterBottom> 
    <i className="far fa-edit"></i>&nbsp;
    Exercise {props.number} - {props.title}
  </Typography>
);

const ExerciseHeader3 = props => (
  <Typography variant="h2" gutterBottom> 
    <i className = {props.faIcon} ></i>&nbsp;
    Exercise {props.number} - {props.title}
  </Typography>
);
ExerciseHeader3.defaultProps = {number:0, title:'Default exercise', faIcon: 'fas fa-user-edit'}

export default App;

