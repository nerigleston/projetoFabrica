import { useEffect, useState } from 'react'
import './App.css'
import Teste from '../components/Teste';

function App() {
  const [dados, setDados] = useState([])

  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
     .then((Response) => Response.json())
     .then((data)=>setDados(data.results))
     .catch((error)=> console.log(error));
  })

  return (
    <div className='App'>
      <h1>Inicio</h1>
      {dados.map((item)=> (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <img src={item.image}></img>
          <p>{item.status}</p>
        </div>
      ))}
      <Teste/>
      </div>
  );  
}

export default App
