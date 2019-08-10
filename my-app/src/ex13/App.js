import React, { Component } from "react";
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

class App extends Component {
  static defaultProps = {
    exercise: {
      number: 13.0,
      title: "Kitchen sink form",
      details: `HTML form elements work a little bit differently from other DOM elements in React, because form elements naturally keep some internal state.`
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      personPrefix: "",
      personNameFirst: "John",
      personNameMiddle: "Q",
      personNameLast: "Smith",
      bossNameFirst: "Bruce",
      bossNameLast: "Springsteen",
      companyName: "Centriq",
      companyAddress: "",
      bossLikesCats: false,
      bossCatType: "any",
      bossCatOtherDescription: null
    };
  }

  handleSubmit = (arg1, arg2) => e => {
    e.preventDefault();
    console.info("Submit prevented.");
    this.correctDependencyState();
    this.setState({ fromMethod: "handleSubmit" }, this.showState);

    console.info("e =", e.nativeEvent);
    console.info("state =", this.state);
    console.info(arg1, arg2);
  };

  handleBlur = name => e => {
    console.info("Blur.");
    // console.dir(e.target);
    const targetValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    if (this.state[name] === targetValue) {
      return;
    } // no change made
    this.setState({ [name]: targetValue });
    console.info(name, " set to ", targetValue);
  };

  handleChange = name => e => {
    console.info("Change.");
    const targetValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [name]: targetValue });

    // dependencies on removal of state
    if (!this.state.bossLikesCats) {
      this.setState({ bossCatType: "" });
    }
    if (this.state.bossCatType !== "other") {
      this.setState({ bossCatOtherDescription: "" });
    }

    console.info(name, " changed to ", targetValue);
  }; // end handleChange()

  correctDependencyState() {
    if (!this.state.bossLikesCats) {
      this.setState(
        { fromMethod: "correctDependencyState", bossCatType: "" },
        this.showState
      );
    }
    if (!this.state.bossLikesCats || this.state.bossCatType !== "other") {
      this.setState(
        { fromMethod: "correctDependencyState", bossCatOtherDescription: "" },
        this.showState
      );
    }
  } // end correctDependencyState()

  showState = () => {
    console.info("----- during", this.state.fromMethod);
    console.info("state: ", this.state);
  }; // end showState()

  render() {
    const { exercise } = this.props;
    const {
      personPrefix,
      personNameFirst,
      personNameMiddle,
      personNameLast,
      bossNameFirst,
      bossNameLast,
      companyName,
      companyAddress,
      bossLikesCats,
      bossCatType,
      bossCatOtherDescription
    } = this.state;
    return (
      <Grid container spacing={2} style={{ margin: 8 }}>
        <Grid item >
          <ExerciseHeader number={exercise.number} title={exercise.title}>
            {exercise.details}
          </ExerciseHeader>
        </Grid>
        {/* Grid item 1 */}

        <form onSubmit={this.handleSubmit}>
          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <Typography variant="h5">Employee form</Typography>
            <FormControl>
              <InputLabel shrink htmlFor="personPrefix">
                Prefix
              </InputLabel>
              <Select
                style={{ marginTop: 16 }}
                value={personPrefix}
                onChange={this.handleBlur("personPrefix")}
                inputProps={{
                  name: "personPrefix",
                  id: "personPrefix"
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"MR"}>Mr.</MenuItem>
                <MenuItem value={"MRS"}>Mrs.</MenuItem>
                <MenuItem value={"MS"}>Ms.</MenuItem>
                <MenuItem value={"DR"}>Dr.</MenuItem>
                <MenuItem value={"SIR"}>Sir</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="First name"
              defaultValue={personNameFirst}
              name="personNameFirst"
              onBlur={this.handleBlur("personNameFirst")}
            />

            <TextField
              label="Middle name"
              defaultValue={personNameMiddle}
              name="personNameMiddle"
              onBlur={this.handleBlur("personNameMiddle")}
            />

            <TextField
              label="Last name"
              defaultValue={personNameLast}
              name="personNameLast"
              onBlur={this.handleBlur("personNameLast")}
            />
          </Grid>
          {/* Grid item 2 */}

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              label="Company"
              defaultValue={companyName}
              name="companyName"
              onBlur={this.handleBlur("companyName")}
            />
            <TextField
              style={{ minWidth: "24rem" }}
              label="Address"
              name="companyAddress"
              autoFocus={true}
              onBlur={this.handleBlur("companyAddress")}
              helperText="if Born in the U.S.A."
            />
          </Grid>
          {/* Grid item 3 */}

          <Grid item xs={12} style={{ marginBottom: 16 }}>
            <TextField
              label="First name of boss"
              defaultValue={bossNameFirst}
              name="bossNameFirst"
              onBlur={this.handleBlur("bossNameFirst")}
            />

            <TextField
              label="Last name of boss"
              defaultValue={bossNameLast}
              name="bossNameLast"
              onBlur={this.handleBlur("bossNameLast")}
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Location</FormLabel>
              <RadioGroup
                aria-label="Location"
                name="bossLocation"
                defaultValue="KC"
                onChange={this.handleChange("bossLocation")}
                style={{ marginLeft: 8 }}
              >
                <FormControlLabel
                  value="KC"
                  control={<Radio />}
                  label="Kansas City"
                />
                <FormControlLabel
                  value="PH"
                  control={<Radio />}
                  label="Philadelphia"
                />
                <FormControlLabel
                  value="HY"
                  control={<Radio />}
                  label="Hyderabad"
                />
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Likes cats?</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={bossLikesCats}
                      onChange={this.handleChange("bossLikesCats")}
                      value="bossLikesCats"
                    />
                  }
                  label={
                    <Icon
                      style={{ color: bossLikesCats ? "red" : "grey" }}
                      className={"fas fa-cat"}
                    />
                  }
                />
              </FormGroup>
            </FormControl>

            {bossLikesCats ? (
              <FormControl style={{ marginLeft: 16, minWidth: "6rem" }}>
                <InputLabel shrink htmlFor="bossCatType">
                  Cat type
                </InputLabel>
                <Select
                  value={bossCatType}
                  onChange={this.handleChange("bossCatType")}
                  inputProps={{
                    name: "bossCatType",
                    id: "bossCatType"
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"siamese"}>Siamese</MenuItem>
                  <MenuItem value={"persian"}>Persian</MenuItem>
                  <MenuItem value={"maine coon"}>Maine Coon</MenuItem>
                  <MenuItem value={"angora"}>Angora</MenuItem>
                  <MenuItem value={"other"}>Other</MenuItem>
                </Select>
              </FormControl>
            ) : null}

            {bossLikesCats && bossCatType === "other" ? (
              <TextField
                style={{ marginLeft: "1em", minWidth: "6em" }}
                label="Cat multiline description"
                defaultValue={bossCatOtherDescription}
                name="bossCatOtherDescription"
                onBlur={this.handleBlur("bossCatOtherDescription")}
                multiline
              />
            ) : null}
          </Grid>
          {/* Grid item 4 */}

          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={this.handleSubmit()}
              style={{ marginTop: ".5rem" }}
            >
              Submit
            </Button>
          </Grid>
          {/* last Grid item  */}
        </form>
      </Grid> // the grid container
    );
  }
}

export default App;
