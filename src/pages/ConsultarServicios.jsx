import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Tarea from './Tarea';
import React from 'react';
import '../style.css'

const ConsultarServicios = () => {
    const [personas, setPersonas] = useState([]);
    const [pago, setPago] = useState();
    const [preciototal, setPrecioTotal] = useState();
    const [calificacion, setCalificacion] = useState();
    const [id_tarea, setId_tarea] = useState();
    const { id_empresa } = useParams();
    const url1 = "https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    const estado ="true"
    const [tareasF , setTareasF] = useState([]);
    const [datos, setDatos] =useState();
    const navigate = useNavigate();
    const [idpersona, setIdpersona] =useState();
    const [token, setToken] =useState();


    function update(tarea) {
        console.log("update")
    
        if (calificacion == undefined || pago == undefined ) {
            console.log("error 1")
            setDatos("Los Valores ingresados son incorrectos")
        } else if (pago == undefined) {
            console.log("error 2")
            setDatos("Los Valores ingresados son incorrectos")
        }else if (  (Number(pago) + Number(tarea.anticipo)) <Number(tarea.precio_total)){
            console.log("error 3")
            setDatos("Los Valores ingresados son incorrectos")
        }else if (  Number(calificacion)< 1 || Number(calificacion)> 10){
            console.log("error 4")
            setDatos("Los Valores ingresados son incorrectos")
        }else{
            patch(tarea.id_tarea)
            console.log(tarea.idpersona)
            setIdpersona(tarea.idpersona)
        }
    }
    

  /*   useEffect(() => {
        
        setToken(sessionStorage.getItem("token"));
        console.log(token)
        fetch(`${url1}/api/v1/tareas/empresa/${id_empresa}/`)
            .then(response => response.json())

            .then(jsonData => {
              let tareasFiltradas = jsonData.filter(tarea => tarea.estado == false);
              setPersonas(tareasFiltradas);
            })
            .catch(error => {
                alert('No se pudo establecer conexión a la API. ');
                navigate(`/Home/`);
            })
       
    }, []); */


    useEffect(() => {
        console.log("A continuacion el token")
        let tokeen = (sessionStorage.getItem('token'));
        
        fetch(`${url2}/api/v1/tareas/empresa/${id_empresa}/`,{
            method:"GET",
            headers:{
                "Content-Type": "application/json",
                "Authorization" : tokeen
            }
        }
        )
            .then(response => response.json())

            .then(jsonData => {
              let tareasFiltradas = jsonData.filter(tarea => tarea.estado == false);
              setPersonas(tareasFiltradas);
            })
            .catch(error => {
                alert('No se pudo establecer conexión a la API. ');
                navigate(`/Home/`);
            })
       
    }, []);



function updatescore(id) {
    console.log(`fetch ${Number(id)}`)
    fetch(`${url2}/api/v1/persona/${id}/`)
      .then(response => response.json())
      .then(json => {
          console.log("persona")
          console.log(json.calificacion_total)
          return console.log(json);

       })
      .catch(error => {
          return console.log("No se pudo actualizar la tarea")
      })
    
}





function patch(id) {
    fetch(`${url2}/api/v1/tareas/${id}/`,{
        method: "PATCH",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "estado": "True",
            "calificacion":calificacion,
        })

      })
      .then(response => response.json())
      .then(json => {

          alert(" Servicio actualizado correctamente")
          console.log(` id persona ${idpersona}`)
          //updatescore(idpersona)
          navigate(`/PerfilEmpresa/${id_empresa}`);
          return console.log(json);
       })
      .catch(error => {
          return console.log("No se pudo actualizar la tarea")
      })
    
}


    return (

        <div className=' container '>
            <h1 className='Titulo'>SERVICIOS CONTRATADOS</h1>
            <div className=' botonesinicio col-12 '>
            <button type="submit" className='botonIncio col-3' > <Link className='registro'to={`/PerfilEmpresa/${id_empresa}`}> Regresar </Link></button>
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


                                            </ul>
                                        </div>


                                        <form novalidate className="needs-validation" onSubmit={ev => { ev.preventDefault() }}>
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
                                                <button  className="botonIncio " type="submit" onClick={ev => {ev.preventDefault();update(items)}}  > cerrar </button>
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