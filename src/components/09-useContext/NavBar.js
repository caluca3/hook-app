import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
// import { HomeScreen } from './HomeScreen'

export const NavBar = () => {
   
return (
    <Fragment>
        
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">UseContext</a>
          <div className="container-fluid">
                <Link className='nav-item nav-link' to='/'>     Home</Link >
                <Link className='nav-item nav-link' to='/about'>Abaout</Link>
                <Link className='nav-item nav-link' to='/login'>Login</Link >
          </div>
        </nav>
   </Fragment>
    )
}
