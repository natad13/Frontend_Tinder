import { useState,useEffect } from 'react'


const datos = ( {
    id_persona:70000,
    habilidades:"responsable",
    precio_hora : 100000,
    nombre : "carolina Duitama",
    calificacion_total: 0,
    usuario: "natalia",
    contrasena: "1234"
  });

const Registro = () => {
    
    function Funcion_post () {

        fetch('http://localhost:3000/api/v1/persona/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id_persona": 789456,
                "habilidades":"responsable",
                "precio_hora" : 100000,
                "nombre" : "Natalia Duitama",
                "calificacion_total" : 0,
                "usuario" : "natalia",
                "contrasena" : "1234"
            })
        })
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
              }) 
              .catch(error => {
              console.log("No sirivio")
                alert("pailas");
              })
            
    };

    return <>

     <h1>REGISTRO DE NUEVO USUARIO PRUEBA</h1>

     <button onClick={Funcion_post}> POST</button>
    </>


   
};

export default Registro;