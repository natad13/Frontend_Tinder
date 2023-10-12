import { useState,useEffect } from 'react'

const InicioSesion = () => {
    const [Usuario, setUsuario] = useState("");
    const [Password, setPassword] = useState("");
    const[Tipo ,setTipo] = useState("");
    
   
    const login = (usuario,password,tipo) =>{
        console.log(usuario);
        console.log(tipo)

        if (usuario ==="natalia" && password === "1234")
            
            alert("Entraste");
        else alert("no entraste");
    };

    return <>

     <h1>Inicio de Sesion</h1>

     <form className ="borde" onSubmit={ev => { 
        ev.preventDefault();
        login(Usuario,Password,Tipo);
    }}>
    <div>
        <label >Usuario : </label>
        <input 
            type="text" 
            name="usuario" 
            placeholder='usuario' 
            autoComplete='off' 
            value={Usuario}
            onChange={ev =>setUsuario(ev.target.value)}

        ></input>
    </div>  
    <div>
        <label >Usuario : </label>
        <input 
            type='password' 
            name='contrasena' 
            placeholder='Contraseña'
            value={Password}
            onChange={ev => setPassword(ev.target.value)}
        ></input>
        </div>
        <br />
        <div>
        <label>¿Selecciona el tipo de Usuario?</label>
            <select name="color" onChange={ev =>setTipo(ev.target.value)}>
                <option value={"empresa"}> Empresa</option>
                <option value={"persona"}> Persona</option>
            </select>
        </div>
        <br />
        <button type="submit" > Iniciar Sesion </button>
     </form>
    
    </>


   
};

export default InicioSesion;