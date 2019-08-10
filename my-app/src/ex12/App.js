import React, { Component } from "react";
import {
  Button,
  FormControl,
  FormHelperText,
  Fragment,
  Grid,
  Icon,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import { red, yellow, green } from "@material-ui/core/colors";
import ExerciseHeader from "../components/ExerciseHeader";

class App extends Component {
  static defaultProps = {
    exercise: {
      number: 12.0,
      title: "Forms",
      details: `HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.`
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      personNameFirst1: "John",
      personNameLast1: "Smith",
      bossNameFirst: "Bruce",
      bossNameLast: "Springsteen",
      author: {
        name: "Doug Hoff",
        company: "Centriq Training"
      }
    };
  }

  handleSubmit = (arg1, arg2) => e => {
    e.preventDefault();
    console.info("Submit prevented.");
    console.info("e =", e.nativeEvent);
    console.info("state =", this.state);
    console.info(arg1, arg2);
  };

  handleBlur = e => {
    console.info("Blur.");
    console.dir(e.target);
    const targetValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (!e.target.name.startsWith("author.")) {
      this.setState({ [e.target.name]: targetValue });
      console.info(e.target.name, 'set to', targetValue);
    } else {
      let authorProperty = e.target.name.slice(7);
      this.setState({ author: { ...this.state.author, [authorProperty]: targetValue } });
      console.info('author:', authorProperty, 'set to', targetValue);
    }
  };

  render() {
    const { exercise } = this.props;
    return (
      <Grid container spacing={2} style={{ margin: 8 }}>
        <Grid item>
          <ExerciseHeader number={exercise.number} title={exercise.title}>
            {exercise.details}
          </ExerciseHeader>
        </Grid>
        {/* Grid item 1 */}

        <form onSubmit={this.handleSubmit}>
          <Grid item xs={12}>
            <Typography variant="h5">Email form</Typography>
            <TextField
              label="First name"
              id="personNameFirst1"
              name="personNameFirst1"
              autoFocus
              defaultValue={this.state.personNameFirst1}
              onFocus={e => e.target.select()}
              onBlur={this.handleBlur}
            />
            <TextField
              label="Last name"
              id="personNameLast1"
              name="personNameLast1"
              defaultValue={this.state.personNameLast1}
              onBlur={this.handleBlur}
            />
            <TextField
              label="Email address"
              id="personEmail1"
              name="personEmail1"
              helperText="We'll never share your email."
              onBlur={this.handleBlur}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={false}
            >
              Send me stuff
            </Button>
          </Grid>
          {/* Grid item 2 */}
          <Grid item xs={12}>
            <TextField
              label="First name of boss"
              defaultValue={this.state.bossNameFirst}
              name="bossNameFirst"
              onBlur={this.handleBlur}
            />

            <TextField
              label="Last name of boss"
              defaultValue={this.state.bossNameLast}
              name="bossNameLast"
              onBlur={this.handleBlur}
            />
          </Grid>
          {/* Grid item 3 */}
          <Grid item xs={12} style={{marginTop:12}}>
            <TextField
              label="Company"
              defaultValue={this.state.author.company}
              name="author.company"
              fullWidth
              onBlur={this.handleBlur}
            />

            <Button
              variant="outlined"
              onClick={this.handleSubmit(
                new Date().toLocaleTimeString(),
                new Date().toLocaleDateString()
              )}
              style={{ marginTop: 8 }}
            >
              Submit
            </Button>
          </Grid>
          {/* Grid item 4 */}
        </form>

        <Grid item xs={12} style={{ marginTop: 48 }}>
          <Typography variant="h5">Alternate form elements</Typography>
          <form>
            <FormControl>
              <InputLabel htmlFor="personNameFirst2">First name</InputLabel>
              <Input id="personNameFirst2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="personNameLast2">Last name</InputLabel>
              <Input id="personNameLast2" />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="personEmail2">Email address</InputLabel>
              <Input id="personEmail2" />
              <FormHelperText id="personEmail2">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              disabled={false}
            >
              Send me stuff
            </Button>
          </form>
        </Grid>
        {/* alternate Grid item 2 */}
      </Grid> // the grid container
    );
  }
}

export default App;
