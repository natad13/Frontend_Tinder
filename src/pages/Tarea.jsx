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
    const [tarea, setTarea]=useState("");
    const navigate = useNavigate();
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"
    


    function Funcion_post() {

        console.log("entre a post de crear tarea")
        fetch(`${url2}/api/v1/tareas/`, {
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
                    
                    
                   
                }else{
                    alert("Servicio  creado")
                    navigate(`/PerfilEmpresa/${id_empresa}`);
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
                <h2 className='Titulo'>menu</h2>
            </div>
        </nav>

    <div className='contenedor'>
    <section className='col-6'>
            <div className='ContenedorParrafo'>
               
                <p className='parrafo '> A continuacion ingrese los datos para los cuales desea contratar la persona</p>
            </div>
        </section>
        
        <section className=' ContenedorTarea col-6'>
        
            <h1 className='Titulo'> Creacion de Servicio</h1>
            <h2>{tarea}</h2>
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
                        <button className="botonIncio " type="submit"> Enviar Servicio  </button>
                    </div>

                </form>
                

            </div>
            </section>



    </div>
</section>
}
