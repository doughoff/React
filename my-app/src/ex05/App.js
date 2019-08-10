import React, { Component } from "react";
import {Typography, Button, Grid, Icon} from '@material-ui/core';
import hueShade, {red, pink, purple, deepPurple, indigo, blue, lightBlue, cyan, teal, green, lightGreen, lime, yellow, amber, orange, deepOrange, brown, grey, blueGrey, validHues, validShades} from './colors';

const exerciseNumber = 5;

class App extends Component {
  render() {
    var primaryColor = purple;
    var secondaryColor = green;
    var tertiaryColor = deepOrange;
    return (
<Grid container spacing={2}>
  <Grid item>
    <Typography variant="h2" gutterBottom style={{color: hueShade(primaryColor, 500)}}> 
      Exercise {exerciseNumber} - Buttons
    </Typography>
    <Button variant="text" style={{margin: 3, backgroundColor:hueShade(primaryColor,50) }}>
      text 50
    </Button>
        <Button variant="contained" style={{margin: 3, backgroundColor:hueShade(primaryColor,100)}}>
    contained 100
    </Button>
    <Button variant="outlined" style={{margin: 3, backgroundColor:hueShade(primaryColor,200)}}>
      outlined 200
    </Button>
    <Button variant="contained" size='large' style={{margin: 3, backgroundColor:hueShade(primaryColor,300), color:'white'}}>
      large contained 300
    </Button>
    <Button variant="contained" size='large' href='http://google.com/search?q=material+react' style={{margin: 3, backgroundColor:hueShade(primaryColor,400), color:'white'}}>
      React Material
    </Button>    
    <Button variant="contained" size='large' href='https://material.io/tools/icons/' style={{margin: 3, backgroundColor:hueShade(primaryColor,500), color:'white'}}>
      Material icons
      <Icon style={{paddingLeft:10}}>help-outline</Icon>
    </Button>       
    <Button variant="contained" size='large' href='https://fontawesome.com/icons?d=gallery&m=free' style={{margin: 3, backgroundColor:hueShade(primaryColor,600), color:'white'}}>
      Font Awesome icons
      <Icon style={{paddingLeft:10}} className={'fa fa-question-circle'} />
    </Button>       
    <Button variant="contained" size='large' target="_blank" href='https://fontawesome.com/icons?d=gallery&m=free' style={{margin: 3, backgroundColor:hueShade(primaryColor,700), color:'white'}}>
      <Icon style={{paddingRight:10}} className={'fa fa-question-circle'} />
      Font Awesome icons
    </Button>
   </Grid> {/* 1st grid item */}


   <Grid item>
    <Typography variant="h2" gutterBottom style={{color: hueShade(secondaryColor, 500)}}>
      Exercise {exerciseNumber} - Buttons by array maps
      </Typography>
          { validShades.map(
            (value, index, array) => 
          <Button key={index} variant="contained" style={{margin: 3, backgroundColor:hueShade(secondaryColor,value), color: (value < 300 ? 'black' : 'white') }}>
              Button {value}
          </Button>
          )}
    </Grid> {/* 2nd grid item */}
    <Grid item>
        { validShades.map(
            (value, index, array) => 
            <span key={index}>
              <Button variant="contained" size='small' style={{margin: 3, backgroundColor:hueShade(tertiaryColor,value), color: (value < 300 ? 'black' :'white') }}>
              Button {value}
              </Button>
            </span>
          )}
    </Grid> {/* 3rd grid item */}
    <Grid item>
      { validHues.map(
        (value, index, array) => 
        <span key={index}>
          <Button variant="contained" style={ {margin: 3, width: 225, backgroundColor:hueShade(value,300), color: ('black') }}>
          Button #{index} {value} 
          </Button>
        </span>
      )}
    </Grid> {/* 4th grid item */}

</Grid> // the grid container

    );
  }
}

export default App;

