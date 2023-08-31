import '../App.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";
import { useState,useEffect } from 'react';
import PreguntasComponent from './PreguntasComponent';

export default function Home() {
    return (
        <div className="Home">
            <PreguntasComponent />
        </div>
    )
}