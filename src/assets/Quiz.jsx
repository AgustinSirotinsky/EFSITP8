import '../App.css';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

export default function Quiz(){
    const [preguntas, setPreguntas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/preguntas')
        .then(res => res.json())
        .then(res => {
            const x = Math.floor(Math.random()*2)
            setPreguntas(res[x])
            console.log(res[x])
        })
        .catch(err => console.log(err));
    }, []);
    return (
        <h1>que</h1>
    )
}