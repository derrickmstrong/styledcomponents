import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';
import styled from 'styled-components';

const App = () => {
  return (
    <Fragment>
      <Block>
        <h1>Hello Mario World!!!</h1>
      </Block>
      <Block bgColor='green' color='orange'>
        <h1>Hello Lugi World!!!</h1>
      </Block>
    </Fragment>
  );
};

const Block = styled.div`
  background-color: ${({ bgColor }) => bgColor || 'blue'};
  color: ${({ color }) => color || 'red'};
  padding: 10px;
  border: 3px solid ${({ color }) => color || 'red'};
  border-radius: 5px;
  display: inline-block;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

render(<App />, document.getElementById('root'));
