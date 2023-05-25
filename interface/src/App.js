import React from 'react';
import './App.css';
import { saveToFirebase } from './utils';
import useFetchCalc from './customHook'

function App() {
  const [result, setResult] = React.useState(0)
  const [a, setA] = React.useState(0)
  const [b, setB] = React.useState(0)
  const data = useFetchCalc(result)

  const add = (e) =>{
    e.preventDefault();
    const sum = parseInt(a) + parseInt(b);
    const calc = {a:a, b: b, sum:sum}
    setResult(sum)
    saveToFirebase(calc)
  }

  return (
    <div className="App">
      <header>
        Sum Of Two Numbers
      </header>
      <form onSubmit={add}>
        <input type="number" name='a' onChange={e=>setA(e.target.value)}/>
        <input type="number" name='b' onChange={e=>setB(e.target.value)}/>
        <button type='submit'>Add</button>
      </form>

      <div>
        <p>{result}</p>
      </div>
      <div>{
      data.length && data.map(
        (d, i)=>(
        <p key={i}>
          {d.a} + {d.b} = {d.sum}
        </p>
        ))}</div>
    </div>
  );
}

export default App;
