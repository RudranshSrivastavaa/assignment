// App.js
import React, { useState } from 'react';
import Sum from './components/Sum';

function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [sum, setSum] = useState(0);

  const handleCount1Change = (e) => {
    setCount1(Number(e.target.value));
  };

  const handleCount2Change = (e) => {
    setCount2(Number(e.target.value));
  };

  const add = () => {
    setSum(count1 + count2);
  };

  const sub = () => {
    setSum(count1 - count2);
  };

  const mul = () => {
    setSum(count1 * count2);
  };

  const divide = () => {
    if (count2 !== 0) {
      setSum(count1 / count2);
    } else {
      setSum('Error: Division by zero');
    }
  };

  return (
    <div>
      <Sum
        count1={count1}
        count2={count2}
        sum={sum}
        onCount1Change={handleCount1Change}
        onCount2Change={handleCount2Change}
        add={add}
        sub={sub}
        mul={mul}
        divide={divide}
      />
      <h1>{sum}</h1>
    </div>
  );
}

export default App;
