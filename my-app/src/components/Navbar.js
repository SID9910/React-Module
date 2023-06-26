//rfc is used as to build function base component


import React from 'react'

// impt is used for proptype
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.Abouttext}</Link>
          </li>
        </ul>
       <div className="d-flex">
        <div className="bg-primary rounded mx-2" onClick={() =>{props.toggleMode('primary')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
        <div className="bg-danger rounded mx-2" onClick={() =>{props.toggleMode('danger')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
        <div className="bg-success rounded mx-2" onClick={() =>{props.toggleMode('success')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
        <div className="bg-warning rounded mx-2" onClick={() =>{props.toggleMode('warning')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
         <div className="bg-light rounded mx-2" onClick={() =>{props.toggleMode('light')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
         <div className="bg-dark rounded mx-2" onClick={() =>{props.toggleMode('dark')}} style ={{
          height: '30px',
          width:'30px',
          cursor:'pointer',
          borderStyle:'groove'
        }}></div>
       </div>


      </div>
    </div>
  </nav>
  </>
  )
}

//it is important to set properties of props
Navbar.propTypes = { title: PropTypes.string,  
    Abouttext: PropTypes.string };


    //it is used to set default when props are not given
Navbar.defaultProps ={
    title: 'Set title here',  
    Abouttext: 'About text Here'
}