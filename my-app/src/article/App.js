import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

const HammerTop = (props) =>
  <h2>
    <span style={{
      textTransform: "uppercase",
      color: 'royalblue',
      fontSize: '1.3rem',
      display: 'block',
      fontFamily: 'sans-serif'
    }} >{props.children} {props.withBar && '|'}</span>

  </h2>;

const HammerBottom = (props) => <span class='bottom'>{props.children}</span>;

const Hammer = (props) =>
  <h2 style={{ letterSpacing: '-0.02rem' }}>
    {props.children}
  </h2>;

const Headline1 = (props) => <h1 style={{
  fontSize: '6rem',
  fontFamily: " 'Oswald', sans-serif",
  lineHeight: '6rem',
  letterSpacing: '-0.1rem',
  textTransform: 'uppercase',
  marginTop: ' 1rem',
  marginBottom: '1rem',
}}>{props.children}</h1>;

const Headline2 = (props) => <h3>{props.children}</h3>;

const Article = (props) => <article style={{
  padding: '1rem',
  width: '22rem',
  border: '1px grey solid',
  fontFamily: 'serif',
}}>{props.children}</article>;

class App extends Component {
  render() {
    return (<>
      <Typography variant='h1'>KC Star article</Typography>
      <Article >
        <Hammer>
          <HammerTop withBar>Border War Continues</HammerTop>
          <HammerBottom>Tax incentives trump tradition</HammerBottom>
        </Hammer>

        <Headline1>Kansas Prevails In Bid for AMC</Headline1>
        <Headline2>Longtime downtown company is going to new $30 million building in southern Leawood's Park Place.</Headline2>


        <cite class='slug'>Kevin Collison<br /></cite>

        <div class='body'>
          <p>AMC Entertainment lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
        </div>
      </Article>
    </>
    );
  }
}

export default App;
