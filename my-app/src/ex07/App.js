import React, { Component, Fragment } from "react";
import { Typography, Button, Grid, Icon } from "@material-ui/core";

const exercise = {
  number: 7,
  title: "Using fragments",
};

class App extends Component {
  render() {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="h2" gutterBottom>
            Exercise {exercise.number} - {exercise.title}
          </Typography>
        </Grid>{" "}
        {/* Grid item 1 */}
        <Grid item>
          <Product>HMX Rondoloid</Product>
        </Grid>{" "}
        {/* Grid item 2 */}
        <Grid item>
          <Product>HMX Messerklid</Product>
        </Grid>{" "}
        {/* Grid item 3 */}
      </Grid> // the grid container
    );
  }
}
class Product extends Component {
  render() {
    return (
      <Fragment>
        <Typography variant="h4">
          {this.props.children}
          <Button variant="contained" color="primary" 
            href={"http://google.com/search?q=" + this.props.children}>
          {this.props.children}
          </Button>
        </Typography>
        <Typography variant="body1" component="div">
          <p>
            The {this.props.children} unit was tested under controlled
            laboratory conditions under IEC standard 60529. Splash, water and
            dust resistance are not permanent conditions.
          </p>
          <p>
            Do not attempt to charge a wet {this.props.children}; refer to the
            user guide for cleaning and drying instructions. Evidence of
            attempts to charge under wet conditions will nullify the warranty.
          </p>
        </Typography>
        <Typography variant="caption">
          Manufacturer component
          <Manufacturer>Acme Manufacturing</Manufacturer>
        </Typography>
      </Fragment>
    );
  }
}
const smallerGreyStyle = { color: "grey" };

class Manufacturer extends Component {
  render() {
    return (
      <Fragment>
        <p style={smallerGreyStyle}>
          {this.props.children} is a global semifabricated company that enables
          1.5 billion connected connections a year. We are a market leader
          developing innovative systems for mobile devices, home entertainment,
          and all-around fun. {this.props.children}'s dedication to innovation
          has positioned us as a driving market force in many key technology
          areas across a broad range of products that uses smart technology to
          replace human workers whenever possible.
        </p>
        <p>&copy; 2019 {this.props.children}</p>
      </Fragment>
    );
  }
}

export default App;
