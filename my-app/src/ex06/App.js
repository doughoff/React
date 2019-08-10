import React, { Component } from "react";
import {Typography, Button, Grid, Icon} from '@material-ui/core';


const exerciseNumber = 6;

class App extends Component {
  render() {
    return (
      <div>
        <Typography variant="h2" gutterBottom>Exercise {exerciseNumber}</Typography>
        <App.UL>Fruit</App.UL>
      </div>
    );
  }
}
class UnorderedList extends Component {
  render() {
    return (
	   <div>
        <Typography variant="h4" >{this.props.children}</Typography>
        <Typography component='div' variant='body1'>
        <ul>
          <App.LI>Apples</App.LI>
          <App.LI>Bananas</App.LI>
          <App.LI>Cherries</App.LI>
          <App.LI>Lemons</App.LI>
          <App.LI>Limes</App.LI>
          <App.LI>unknown {this.props.children.toLowerCase()}</App.LI>
        </ul>

	  </Typography>
	</div>
    );
  }
}
class ListItem extends Component {
  render() {
    return (
      <li>{this.props.children}</li>
    );
  }
}
App.UL = UnorderedList;
App.LI = ListItem;

export default App;

