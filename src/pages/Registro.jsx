import { useState,useEffect } from 'react'

const Registro = () => {
    
    useEffect(() =>{
     
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
        console.log("No sirivio")
          alert("pailas");
        })
  
      },[] )
  

    return <>

     <h1>REGISTRO DE NUEVO USUARIO PRUEBA</h1>
    </>


   
};

export default Registro;