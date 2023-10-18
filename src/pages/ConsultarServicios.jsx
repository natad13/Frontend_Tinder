import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import Tarea from './Tarea';
import React from 'react';
import '../style.css'

const ConsultarServicios = () => {
    const [personas, setPersonas] = useState([]);
    const [pago, setPago] = useState();
    const [preciototal, setPrecioTotal] = useState();
    const [calificacion, setCalificacion] = useState();
    const { id_empresa } = useParams();
    const url1 = "https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    const estado ="true"
    const [tareasF , setTareasF] = useState([]);

    function update() {

        alert("hola")

        let tareasFiltradas = personas.filter(tarea => tarea.estado == false);
        
        //console.log(tareasFiltradas)
        setTareasF(tareasFiltradas)
        console.log(tareasF)

    }


    
        

    useEffect(() => {

        
        fetch(`${url1}/api/v1/tareas/empresa/${id_empresa}/`)
            .then(response => response.json())

            .then(jsonData => {
                let tareasFiltradas = jsonData.filter(tarea => tarea.estado == false);
                setPersonas(tareasFiltradas);

            })
            .catch(error => {
                alert('No se pudo establecer conexión a la API. ');
            })

       
    }, []);



   

    return (

        <div className=' container '>
            <h1 className='Titulo'>SERVICIOS CONTRATADOS</h1>
            
            
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


                                            </ul>
                                        </div>


                                        <form novalidate className="needs-validation" onSubmit={ev => { ev.preventDefault(); update(); }}>
                                            <div >
                                                <label htmlFor="validationCustom01" className="form-label " > Calificacion (1 a 10 ):</label>
                                                <input input type="number" min="1" max="10" className="form-control" id="validationCustom05"
                                                    onChange={ev => setCalificacion(ev.target.value)} required />
                                            </div>
                                            <div >
                                                <label htmlFor="validationCustom02" className="form-label">Pago restante $: </label>
                                                <input type="number" min={items.anticipo} className="form-control" id="validationCustom02"
                                                    onChange={ev => setPago(ev.target.value)} required />
                                            </div>

                                            <div >
                                                <button className="botonIncio " type="submit"> Cerrar servicio</button>
                                            </div>

                                        </form>


                                    </div>
                                </div>
                            </div>
                    ))
                }
            </div>

        </div>



    )
}

export default ConsultarServicios;