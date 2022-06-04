import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  const [texts]= useState('Enable light Mode')

  const textChange = ()=>{
    if(props.mode === 'dark'){
      document.body.innerHTML('Enable Dark Mode');
      
    }
    else{
      document.body.innerHTML('Enable light Mode');
    }
  }



  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode==='dark'?'light':'dark'}`} href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">{props.About}</a>
              </li>

            </ul>
            {/* <div className="container my-3 d-flex form-check form-switch">
                <input onClick={props.toggleMyStyle} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                    <label className="form-check-label" for="flexSwitchCheckChecked">{props.btnText}</label>
            </div> */}
            <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" onChange={textChange} htmlFor="flexSwitchCheckDefault">{texts}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {
  title: PropTypes.string,
  About: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  About: 'About us'
};