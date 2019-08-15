import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

const HammerTop = (props) =>
  <div style={{
    textTransform: "uppercase",
    color: 'royalblue',
    fontSize: '1.3rem',
    fontFamily: 'sans-serif'
  }} >{props.children} {props.withBar && '|'}</div>
  ;

const HammerBottom = (props) =>
  <span style={{
    fontFamily: 'serif',
    fontWeight: 'normal'
  }}>{props.children}</span>;

const Hammer = (props) =>
  <h2 style={{ letterSpacing: '-0.02rem' }}>
    {props.children}
  </h2>;

const Headline1 = (props) =>
  <h1 style={{
    fontSize: '6rem',
    fontFamily: " 'Oswald', sans-serif",
    lineHeight: '6rem',
    letterSpacing: '-0.1rem',
    textTransform: 'uppercase',
    marginTop: ' 1rem',
    marginBottom: '1rem',
  }}>{props.children}</h1>;

const Headline2 = (props) =>
  <h3 style={{
    fontSize: '.9rem',
    fontWeight: 'bold',
    width: '88%',
    marginTop: '1rem',
    fontFamily: "'Verdana', sans-serif",
  }}>{props.children}</h3>;

const BylineKCStar = (props) => {
  let {author, newspaper, children} = props;
  return <div style={{
    margin: '1rem 0rem',
    textAlign: 'right'
  }}>
    By{' '}
    <cite style={{
      fontSize: ' .8rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontStyle: 'normal',
      fontFamily: 'sans-serif',
    }}> {author || 'Staff'} <br />
    </cite>
    <span style={{ fontStyle: 'italic' }}>
    {newspaper || 'The Kansas City Star'}</span>
    {children}
  </div>;
}

const Article = (props) => <article style={{
  padding: '1rem',
  width: '28rem',
  border: '1px grey solid',
  fontFamily: 'serif',
}}>{props.children}</article>;

const ArticleBody = (props) =>
  <div style={{ textAlign: 'justify' }}>
    {props.children} </div>;

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

        <BylineKCStar author='Kevin Collison'>
          {/* <div>Special text</div> */}
        </BylineKCStar>

        <ArticleBody>
          <p>AMC Entertainment lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
        </ArticleBody>

      </Article>
    </>
    );
  }
}

export default App;
