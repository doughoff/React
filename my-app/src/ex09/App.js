import React, { Component, Fragment } from "react";
import {Button, Grid, Icon, Paper, Typography} from '@material-ui/core';


class App extends Component {

  static defaultProps = {
    exercise  : { number: 9.0, title: 'Property data & setState()'},
    author : { 
      name: 'Doug Hoff', 
      company: 'Centriq Training' 
    },
    update : {
      date: new Date().toLocaleDateString(), 
      time: new Date().toLocaleTimeString()
    }
  };

  changeState() {
    this.setState((state, props) => {
      console.info('setState() called');
      return {};} );
  }

  render() {
    const {exercise, author, update} = this.props;
    return (
      <Grid container spacing={2}>

        <Grid item>
          <ExerciseHeader3 number={exercise.number} title={exercise.title}></ExerciseHeader3>
          <Typography style={{float:'right'}} variant='caption'>Updated {update.time}</Typography>
        </Grid> {/* Grid item 1 */}

        <DataGridItem fieldName='Name' type='Instructor'>
          {author.name}
        </DataGridItem>

        <DataGridItem fieldName='Name' type='Education' db='Company'>
          {author.company}
        </DataGridItem>


      </Grid> // the grid container

    );
  }
}

const ExerciseHeader3 = props => (
  <Typography variant="h2" gutterBottom> 
    <i className = {props.faIcon} ></i>&nbsp;
    Exercise {props.number} - {props.title}
  </Typography>
);
ExerciseHeader3.defaultProps = {number:0, title:'Default exercise', faIcon: 'fas fa-user-edit'}


const DataGridItem = (props) => 
      <Grid item xs={4}>
        <Paper style={{padding: 10}}>
        <Typography variant="caption" > 
          {props.fieldName} of {props.db}
        </Typography>
         <Typography variant="h5" > 
          <Icon style = {{paddingRight:3, color:'grey'}} className={props.dbIconMap[props.db]} />{props.children}
        </Typography>
        <Typography variant="body1" > 
          {props.type}
        </Typography>
        </Paper>
      </Grid>
  ;

DataGridItem.defaultProps = {
  db : 'Person',
  dbIconMap: {
    'Person': 'fas fa-user',
    'Company': 'far fa-building',
    'Dog' : 'fas fa-dog',
  }
};

export default App;

