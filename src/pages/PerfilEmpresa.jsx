import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import React from 'react';
import '../style.css'




const PerfilEmpresa = () =>{

    const {id_empresa} =useParams()
    const [empresa, setEmpresa] = useState();
    const [nit, setNit] = useState();
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"

    useEffect(() => {
        fetch(`${url1}/api/v1/empresas/${id_empresa}`)
        .then(response => response.json())
        .then(jsonData => {
            
          setEmpresa(jsonData[0].nombre)
          setNit(jsonData[0].id_empresa)
        })
        .catch(error => {
          alert('No se pudo establecer conexión a la API. ');
        })
     
      }, []);


        return <>

        <div className='contenedor2 row '>
               

            <div className='datosEmpresa col-6'>
                <h2 className='Titulo'> BIENVENIDO </h2>
                <h2 className='Titulo'> {empresa}</h2>
            </div>

            <div className='botonesEmpresa col-6'>
                <h1 className='nombreEmpresa'> Seleccione la opcion </h1>
                <div>
                <button type="submit" className='botonIncio col-6' > <Link className='registro'
                        to={`/MostrarPerfiles/${id_empresa}`}> Contratar Persona </Link>
                    </button>
                </div>
                
                <div>
                    <button type="submit" className='botonIncio col-6' > <Link className='registro'
                        to={'/Registro'}> Consultar Servicios </Link>
                    </button>
                </div>
                
            </div>

        </div>
    
        
        </>

}
export default PerfilEmpresa;