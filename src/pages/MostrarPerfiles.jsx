import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Tarea from './Tarea';
import React from 'react';
import '../style.css'

const Home = () => {
    const [personas, setPersonas] = useState([]);
    const {id} = useParams();
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
   
    const imagenes =["river", "cartoon","park","beautiful","relax"]
    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }
    useEffect(() => {
      fetch(`${url1}/api/v1/persona/`)
      .then(response => response.json())
      
      .then(jsonData => {
        
        setPersonas(jsonData);
       
      })
      .catch(error => {
        alert('No se pudo establecer conexión a la API. ');
      })
   
    }, []);
  


    console.log(personas)

    return (
        <div className=' container '>
            <h1>PERFILES PERSONAS</h1>
          <div className='map row' >
          {
                personas.map((items,index) =>(
                <div className='col-12 col-sm-6 col-md-3 map'>
                  <div className="card " >
                      {/* <img className="card-img-top" src={`https://source.unsplash.com/random/800x800/?${imagenes[getRandomInt(5)]}`} alt="Card image cap"></img> */}
                      <img className="card-img-top" src={``} alt="Card image cap"></img>
                      <div className="card-body">
                      <h5 className="card-title"><Link to={`/Tarea/${id}/${items.id_persona}`}className='card-title'>
                        {items.nombre}
                      </Link>
                    </h5> 
                      <p class="card-text"> Habilidades : {items.habilidades}  </p>
                      <p class="card-text"> Precio / hora : {items.precio_hora}  </p>
                      <p class="card-text"> Calificacion : {items.calificacion_total} /10 </p>
                      </div>
                      
                    </div>
                </div>
                    

                    
                ))
            }


          </div>
        
           

        </div>
     
     
    )
}

export default Home;