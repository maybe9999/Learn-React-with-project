import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [turno, setTurno] = useState(false)

  const [valores,setValores] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]])

  

  function signal(row, casilla){
    console.log("condicional", useState([row][casilla]) === 0, useState([row][casilla]))
    if (useState([row][casilla]) === 0){
      const nuevoValor = turno === false ? "X" : "O";
      const nuevoArreglo = [...valores];
      nuevoArreglo[row][casilla] = nuevoValor;
      setTurno(!turno)
      console.log("Cambiando boton:", useState([row][casilla]))
      console.log("Estado:", turno);
      return nuevoArreglo
    } else {
      console.log('Casilla ya ocupada');
    }
  }

  return (
    <>
      <div className='contenedor-ta-te-ti'>
        <div className='contenedor-ta-te-ti-row1'>
          <button className='ta-te-to-row1-position1 casilla' onClick={() => setValores(signal(0,0))}>{valores[0][0]}</button>
          <button className='ta-te-to-row1-position2 casilla' onClick={() => signal(0,1)}>{valores[0][1]}</button>
          <button className='ta-te-to-row1-position3 casilla' onClick={() => signal(0,2)}>{valores[0][2]}</button>
        </div>
        <div className='contenedor-ta-te-ti-row2'>
          <button className='ta-te-to-row2-position1 casilla' onClick={() => signal(1,0)}>{valores[1][0]}</button>
          <button className='ta-te-to-row2-position2 casilla' onClick={() => signal(1,1)}>{valores[1][1]}</button>
          <button className='ta-te-to-row2-position3 casilla' onClick={() => signal(1,2)}>{valores[1][2]}</button>
        </div>
        <div className='contenedor-ta-te-ti-row3'>
          <button className='ta-te-to-row3-position1 casilla' onClick={() => signal(2,0)}>{valores[2][0]}</button>
          <button className='ta-te-to-row3-position2 casilla' onClick={() => signal(2,1)}>{valores[2][1]}</button>
          <button className='ta-te-to-row3-position3 casilla' onClick={() => signal(2,2)}>{valores[2][2]}</button>
        </div>
      </div>
    </>
  )
}

export default App
