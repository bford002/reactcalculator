import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from './Components/Button';
import { ButtonBox } from './Components/ButtonBox';
import { Screen } from './Components/Screen';
import { Wrapper } from './Components/Wrapper';

const buttonValues = [
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'X'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '=']
];

function App() {

  const [calc, setCalc] = useState({
    sign: '',
    num: 0,
    res: 0
  });

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {
          buttonValues.flat().map((btn, i) => {
            return (
              <Button
              key={i}
              className={btn === '=' ? 'equals' : 'button'}
              value={btn}
              onClick={() => {
                console.log(`${btn} clicked`);
              }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
}

export default App;
