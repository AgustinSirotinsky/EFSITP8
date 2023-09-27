import React from "react";
import { Link, Outlet } from "react-router-dom";

//Bootsrap
import { Navbar } from 'react-bootstrap';

//Other
import casita from '../../casita.png'
import highschore from '../../highschore.png'

const Layout = () => {
    return (
    <React.Fragment>
        <Navbar className="bg-body-tertiary">
          <Navbar.Brand href="/">
            <img src={casita} width="50" height="50" alt="home"/>
          </Navbar.Brand>
          <Navbar.Brand href="/HighscoreRoute">
            <img src={highschore} width="75" height="50" alt="highscore"/>
          </Navbar.Brand>
      </Navbar>
        <Outlet />
    </React.Fragment>)
}

export default Layout