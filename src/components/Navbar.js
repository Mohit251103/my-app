import React from 'react'
// import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg`} style={{backgroundColor:props.mode,color:props.text}}>
    {/* <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}> */}
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li> */}
          </ul>
          {/* <div className={`form-check form-switch text-${props.text}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div> */}
          <button type="button" className="btn btn-secondary mx-1 " onClick={props.toggleGrey}>Grey</button>
          <button type="button" className="btn btn-success mx-1 " onClick={props.toggleGreen}>Green</button>
          <button type="button" className="btn btn-danger mx-1 " onClick={props.toggleRed}>Red</button>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//     title:PropTypes.string.isRequired
// }

