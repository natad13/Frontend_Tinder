import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Contacts() {
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"

const getContacts = () => {
    fetch(`${url1}/api/v1/tareas/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authorization": `JTW ${window.sessionStorage.getItem('token')}`,
        }
    })
        .then(response => {
            if( response.status === 401 ) navigate('/Home');
            return response.json();
        })
        .then(json => {
           
            console.log("OKI DOKI")
        })
};
useEffect(() => {
    getContacts();
}, []);

return <section>
    <h1>HOLA</h1>
</section>
}

