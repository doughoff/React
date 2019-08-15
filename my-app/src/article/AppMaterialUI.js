import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

const HammerTop = (props) =>
  <Typography color='primary' style={{
    textTransform: "uppercase",
    fontWeight: 300,
  }} >{props.children} {props.withBar && '|'}</Typography>
  ;

const HammerBottom = (props) =>
  <Typography paragraph={true} style={{
    display:'block',
    lineHeight: 1,
  }}>{props.children}</Typography>;

const Hammer = (props) =>
  <Typography component='section'>
    {props.children}
  </Typography>;

const Headline1 = (props) =>
  <Typography variant='h1' style={{
    fontFamily: " 'Oswald', 'Roboto', sans-serif",
    lineHeight: '5rem',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }}>{props.children}</Typography>;

const Headline2 = (props) =>
  <h3 style={{
    fontSize: '.9rem',
    fontWeight: 'bold',
    width: '88%',
    fontFamily: "'Verdana', sans-serif",
  }}>{props.children}</h3>;

const BylineKCStar = (props) => {
  let { author, newspaper, children } = props;
  return <Typography component='div' style={{
    margin: '1rem 0rem',
    textAlign: 'right',
    fontFamily: " 'Roboto', sans-serif",
  }}>
    <Typography component='span' variant='body2'>By{' '}</Typography>
    <Typography component='span' variant='body2'style={{
      textTransform: 'uppercase',
      fontWeight: 'bold',
    }}> {author || 'Staff'} 
    </Typography>
    <Typography variant='body2' style={{ display: 'block', fontStyle: 'italic', lineHeight: .8 }}>
      {newspaper || 'The Kansas City Star'}</Typography>
    {children}
  </Typography>;
}

const Article = (props) =>
  <Paper component='div' elevation={4} style={{
    fontFamily: " 'Roboto', sans-serif",
    padding: '1rem',
    width: '28rem',
    border: '1px grey solid',

  }}>{props.children}</Paper>;

const ArticleBody = (props) =>
  <Typography variant='body2' component='div' align='justify' style={{
    textIndent: '2rem'
  }}>
    {props.children} </Typography>;

const DropCap = (props) => 
  <Typography variant='h2' component='span' style={{
    fontWeight:'bold',
    margin: '0 .3rem 0 -2rem',
  }}>{props.children}</Typography>
;

class App extends Component {
  render() {
    return (<>
      <Typography gutterBottom variant='h1'>KC Star article</Typography>
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
          <p><DropCap>
            A
          </DropCap>MC Entertainment lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit alias, a natus id aperiam magnam velit maxime nulla autem. Neque aliquam tenetur dolorum magnam non dolores fugit ullam illo!</p>
        </ArticleBody>

      </Article>
    </>
    );
  }
}

export default App;
