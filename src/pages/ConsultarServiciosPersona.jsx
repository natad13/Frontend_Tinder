import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Tarea from './Tarea';
import React from 'react';
import '../style.css'

const ConsultarServiciosPersonas = () => {
    const [personas, setPersonas] = useState([]);
    
    const { id_persona } = useParams();
    const url1 = "https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"

    const [tareasF , setTareasF] = useState([]);
    const [estadoTarea , setestadoTarea] = useState([]);
    const [datos, setDatos] =useState();
    const navigate = useNavigate();
  


    

    useEffect(() => {
        console.log("consulta de tareas por persona")
        fetch(`${url1}/api/v1/tareas/persona/${id_persona}/`)
            .then(response => response.json())

            .then(jsonData => {
                //let tareasFiltradas = jsonData.filter(tarea => tarea.estado == false);
                setPersonas(jsonData);
                console.log(jsonData[0].estado)
                console.log(jsonData)

            })
            .catch(error => {
                alert('Aun no tienes servicios contratados. ');
            })
       
    }, []);




    return (

        <div className=' container '>
            <h1 className='Titulo'>SERVICIOS </h1>
            <div className=' botonesinicio col-12 '>
            <button type="submit" className='botonIncio col-3' > <Link className='registro'to={`/Persona/${id_persona}`}> Regresar </Link></button>
            <button type="submit" className='botonIncio col-3' > <Link className='registro'to={`/Home/`}> Cerrar Sesion </Link></button>
         
            </div>
            
            <h3 className='Titulo_pequeno'> {datos}</h3>
            
            
            <div className='map row' >
                {
                
                    personas.map((items, index) => (

                            
                            <div className='col-12 col-sm-8 col-md-4 map'>
                                <div className="card " >

                                    <div className="card-body">
                                        <div className=' titulotarea'>
                                            <h3 className="Tituloh3">ID SERVICIO :{items.id_tarea}</h3>
                                            
                                        </div>
                                        <div className='listaservicio'>
                                            <ul>
                                             
                                                <li>
                                                    Descripcion: {items.descripcion}
                                                </li>

                                                <li>
                                                    Precio Total: ${items.precio_total}
                                                </li>

                                                <li>
                                                    Anticipo realizado: ${items.anticipo}
                                                </li>
                                                <li>
                                                    Calificación: {items.calificacion}/10
                                                </li>
                                                {!(items.estado) ? <li> Estado del servicio: Pendiente </li> :<li> Estado del servicio: Finalizado </li>}
                                               


                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>
                
        </div>



    )
}

export default ConsultarServiciosPersonas;