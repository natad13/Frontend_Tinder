import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import '../style.css';

export default function Tarea() {
    const {id_empresa} = useParams();
    const {id_persona} = useParams();
    const [anticipo, setAnticipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [pagototal, setPagoTotal] = useState("");

    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    


    function Funcion_post() {

        fetch(`${url1}/api/v1/tareas/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "precio_total": pagototal,
                "calificacion": 0,
                "anticipo": anticipo,
                "estado": false,
                "descripcion":descripcion,
                "idpersona" :id_persona,
                "idempresa":id_empresa

            })
        })
            .then(response => response.json())
            .then(jsonData => {
                const resultado = (jsonData)
                if (resultado.message == "error") {
                    alert("Tarea no creada")
                   
                }else{
                    alert("Tarea  creada")
                }
            })
            .catch(error => {
                alert("No sirivio")
                alert("pailas");
            })

    };
   
return <section >
        <nav className='barra_navegacion row col-12'>
            <div>
                <h1>menu</h1>
            </div>
        </nav>

    <div className='contenedor'>
    <section className='col-6'>
            <div className='ejemplo1'>
                <h1>hola</h1>
            </div>
        </section>
        
        <section className=' ejemplo2 col-6'>
        
            <h1> Creacion de Servicio</h1>

            <div className='registroUsuario  '>
                <form novalidate  className="needs-validation" onSubmit={ev => {ev.preventDefault();Funcion_post(); }}>
                    <div >
                        <label htmlFor="validationCustom01" className="form-label " > Descripcion del Servicio </label>
                        <input input type="text" className="form-control" id="validationCustom05" 
                        onChange={ev => setDescripcion(ev.target.value)} required/>
                    </div>
                    <div >
                        <label htmlFor="validationCustom02" className="form-label">Pago Total</label>
                        <input type="number" className="form-control" id="validationCustom02"
                        onChange={ev => setPagoTotal(ev.target.value)}  required/>
                    </div>

            
                    <div >
                        <label htmlFor="validationCustom01" className="form-label">Anticipo</label>
                        <input input type="text" className="form-control" id="validationCustom05" 
                        onChange={ev => setAnticipo(ev.target.value)}required/>
                    </div>

                    <div >
                        <button className="botonIncio " type="submit">Enviar Servicio</button>
                    </div>

                </form>
                <div >
                        <button className="botonIncio " type="submit"><Link className='registro'
                    to={'/Home'}> Iniciar Sesion </Link> </button>
                    </div>

            </div>
            </section>



    </div>
</section>
}
