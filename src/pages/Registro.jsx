import { useState, useEffect } from 'react'
import '../style.css'
import Home from './Home';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
  




const Registro = () => {

    const navigate = useNavigate();
    const [id_persona, setId_persona] = useState("");
    const [habilidades, setHabilidades] = useState("");
    const [precio_hora, setPrecio_hora] = useState("");
    const [nombre, setNombre] = useState("");
    const [calificacion_total, setCalificacion_total] = useState("0");
    const [usuario, setUsuario] = useState("0");
    const [contrasena, setContrasena] = useState("0");
    const [validacion_usuario, setValidacion_usuario] = useState("");
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    
    
    const validacion= (x) => {
      setValidacion_usuario(x);
    }


    function Funcion_post() {

        fetch(`${url2}/api/v1/persona/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id_persona": id_persona,
                "habilidades": habilidades,
                "precio_hora": precio_hora,
                "nombre": nombre,
                "calificacion_total": calificacion_total,
                "usuario": usuario,
                "contrasena": contrasena
            })
        })
            .then(response => response.json())
            .then(jsonData => {
                const resultado = (jsonData)
                if (resultado.message == "error") {
                    validacion("El usuario ya existe")
                }else{
                    validacion("El usuario fue creado correctamente")
                    navigate('/Home');
                }
            })
            .catch(error => {
                alert("No sirivio")
                alert("pailas");
            })

    };


    return <>
        <h2 className='Titulo'> Registro de informacion</h2>
        {validacion_usuario}
        <div className='registroUsuario  '>
            
            <form novalidate  className="needs-validation" onSubmit={ev => {ev.preventDefault();Funcion_post(); }}>
                <div >
                    <label htmlFor="validationCustom01" className="form-label " > Numero de Identificación</label>
                    <input input type="text" className="form-control" id="validationCustom05" 
                    onChange={ev => setId_persona(ev.target.value)} required/>
                </div>
                <div >
                    <label htmlFor="validationCustom02" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="validationCustom02"
                    onChange={ev => setNombre(ev.target.value)}  required/>
                </div>

                <div >
                    <label htmlFor="validationCustom01" className="form-label">Habilidades</label>
                    <input input type="text" className="form-control" id="validationCustom05"
                    onChange={ev => setHabilidades(ev.target.value)} required/>
                </div>

                <div >
                    <label htmlFor="validationCustom01" className="form-label">Precio/Hora</label>
                    <input input type="text" className="form-control" id="validationCustom05" 
                    onChange={ev => setPrecio_hora(ev.target.value)}required/>
                </div>

                <div >
                    <label htmlFor="validationCustom01" className="form-label">Usuario</label>
                    <input input type="text" className="form-control" id="validationCustom05" 
                    onChange={ev => setUsuario(ev.target.value)}required/>
                </div>

                <div >
                    <label htmlFor="validationCustom01" className="form-label">Contraseña</label>
                    <input input type="text" className="form-control" id="validationCustom05" 
                    onChange={ev => setContrasena(ev.target.value)}required/>
                </div>

                <div >
                    <button className="botonIncio " type="submit">Enviar formulario</button>
                </div>

            </form>
            <div >
                    <button className="botonIncio " type="submit"><Link className='registro'
                  to={'/Home'}> Iniciar Sesion </Link> </button>
                </div>

        </div>


        {/* <h1>REGISTRO DE NUEVO USUARIO PRUEBA</h1>

     <button onClick={Funcion_post}> POST</button> */}
    </>



};

export default Registro;