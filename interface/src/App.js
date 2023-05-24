import React from 'react';
import './App.css';
import { saveToFirebase } from './utils';

function App() {
  const [result, setResult] = React.useState(0)
  const [a, setA] = React.useState(0)
  const [b, setB] = React.useState(0)
  const [data, setData] = React.useState([])

  const add = (e) =>{
    e.preventDefault();
    const sum = parseInt(a) + parseInt(b);
    setResult(sum)
    const calc = {a:a, b: b, sum:sum}
    saveToFirebase(calc)
  }
  
  React.useEffect(()=>{
    fetch('http://localhost:5000/numbers')
    .then(r=>r.json())
    .then(r=>setData(r)).catch(e=>console.log(e))
  }, [result])
  console.log(data)
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
