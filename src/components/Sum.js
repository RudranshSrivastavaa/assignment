import React from 'react';

function Sum({ count1, count2, onCount1Change, onCount2Change, add, sub, mul, divide }) {
  return (
    <div>
      <input type="number" value={count1} onChange={onCount1Change} />
      <input type="number" value={count2} onChange={onCount2Change} />
      <br />
      <button onClick={add}>Addition</button>
      <button onClick={sub}>Subtraction</button>
      <button onClick={mul}>Multiply</button>
      <button onClick={divide}>Divide</button>
    </div>
  );
}

export default Sum;
