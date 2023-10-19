import { useState,useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Contacts() {
    const [nombre, setNombre] = useState();
    const [habilidades, setHabilidades] = useState();
    const [calificacion, setCalificacion] = useState();
    const navigate = useNavigate();
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    const {id_persona} = useParams();

const getContacts = () => {
    fetch(`${url1}/api/v1/persona/ ${id_persona}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `JTW ${window.sessionStorage.getItem('token')}`,
        }})
        .then(response => {
            if( response.status === 401 ) navigate('/Home');
            return response.json();
        })
        .then(jsonData => {
           setNombre(jsonData[0].nombre)
           setHabilidades(jsonData[0].habilidades)
           setCalificacion(jsonData[0].calificacion_total)
           console.log(jsonData[0].nombre)
           
        })
};
useEffect(() => {
    getContacts();
}, []);

return  <>

<div className='contenedor2 row '>
       

    <div className='datosEmpresa col-6'>
        <h2 className='Titulopersona'> BIENVENIDO </h2>
        <h2 className='Titulopersona'> {nombre}</h2>
        <div className='datos_persona'>
            <ul>
                <li className='calificacion' > Calificación : {calificacion} /10 </li>
                <li className='calificacion' > Habilidades : {habilidades} </li>
            </ul>
        
        </div>
        


    </div>

    <div className='botonesEmpresa col-6'>
        <h2 className='Titulo'> Seleccione la opcion </h2>
        <div>
        <button type="submit" className='botonIncio col-6' > <Link className='registro'
                to={`/MostrarPerfiles/${id_persona}`}> Actualizar Calificacion </Link>
            </button>
        </div>
        
        <div>
            <button type="submit" className='botonIncio col-6' > <Link className='registro'
                to={`/ConsultarServicios/${id_persona}`}> Consultar Servicios </Link>
            </button>
        </div>

        
        
    </div>

</div>


</>
}

