import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

const HammerTop = (props) =>
  <div>{props.children}{props.withBar && ' | '}</div>
  ;

const HammerBottom = (props) =>
  <span>{props.children}</span>;

const Hammer = (props) =>
  <h2>{props.children}</h2>;

const Headline1 = (props) =>
  <h1>{props.children}</h1>;

const Headline2 = (props) =>
  <h3>{props.children}</h3>;

const BylineKCStar = (props) => {
  let { author, newspaper, children } = props;
  return <div>
    By{' '}
    <cite>{author || 'Staff'}<br /></cite>
    <span>{newspaper || 'The Kansas City Star'}</span>
    {children}
  </div>;
}

const Article = (props) => <article>{props.children}</article>;

const ArticleBody = (props) =>
  <div>{props.children}</div>;


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
