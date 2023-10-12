import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouterIndex from './routes/RouterIndex'
import { BrowserRouter } from 'react-router-dom'

function App() {
  

  /* useEffect(() =>{
     
    fetch('http://localhost:3000/api/v1/persona/',{
      method: "POST",
      mode:'no-cors', 
      body: JSON.stringify({
        "id_persona":70000,
        "habilidades":"responsable",
        "precio_hora" : 100000,
        "nombre" : "carolina Duitama",
        "calificacion_total" : 0,
        "usuario" : "natalia",
        "contrasena" : "1234"
      }), 
      headers: {
        "Content-Type": "application/json",
      },
    })  
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData);
    }) 
    .catch(error => {
      alert("pailas");
    })

  },[] ) */



  return (

    <>

      <BrowserRouter>
        <RouterIndex />
      </BrowserRouter> */
    
    </>
  )
}

export default App
