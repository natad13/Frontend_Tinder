import { useState, useEffect } from 'react'
import '../style.css'
import Home from './Home';
import { Link } from 'react-router-dom';

const RegistroEmpresa = () => {


    const [id_empresa, setId_empresa] = useState("");
    const [nombre, setNombre] = useState("");
    const [usuario, setUsuario] = useState("0");
    const [contrasena, setContrasena] = useState("0");
    const [validacion_usuario, setValidacion_usuario] = useState("");
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    
    const validacion= (x) => {
      setValidacion_usuario(x);
    }


    function Funcion_post() {

        fetch(`${url1}/api/v1/empresas/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "id_empresa": id_empresa,
                "nombre": nombre,
                "usuario": usuario,
                "contrasena": contrasena
            })
        })
            .then(response => response.json())
            .then(jsonData => {
                const resultado = (jsonData)
                if (resultado.message == "error") {
                    alert("usuario existe")
                    validacion("El usuario ya existe")
                }else{
                    validacion("El usuario fue creado correctamente")
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
                    <label htmlFor="validationCustom01" className="form-label " > Nit</label>
                    <input input type="text" className="form-control" id="validationCustom05" 
                    onChange={ev => setId_empresa(ev.target.value)} required/>
                </div>
                <div >
                    <label htmlFor="validationCustom02" className="form-label">Nombre Completo</label>
                    <input type="text" className="form-control" id="validationCustom02"
                    onChange={ev => setNombre(ev.target.value)}  required/>
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

export default RegistroEmpresa;