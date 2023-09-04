//React
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';

export default function Home() {
    return (
        <div className="Home">
            <Link to="/Quiz"><button>Empezar quiz</button></Link>
        </div>
    )
}