import React from 'react'
import { NavLink } from 'react-router-dom'
import "./AsideClient.css"

const AsideClient = () => {
  return (
    <div className="asideContainer">
    <div className="aside">
    <ul className="asideLinks">
      <li>
        <NavLink to="/userclients">Vista General <img className="icon" src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679307394/Neovet/person-circle-outline_yyfflv.svg" alt="icono agenda"/></NavLink>
      </li>
      <li>
        <NavLink to="/userclients_agenda">Agenda <img className="icon" src='https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679305138/Neovet/calendar-outline_vzwcnd.svg' alt='icono agenda'/></NavLink>
      </li>
      <li>
        <NavLink to="/userclients_staff">Profesionales<img className="icon" src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679320948/Neovet/stethoscope_FILL0_wght400_GRAD0_opsz48_n549qq.svg" alt="icono pacientes"/></NavLink>
      </li>
    </ul>
    </div>

    <div className="asideMobile">
    <ul className="asideMobileLinks">
      <li>
        <NavLink to="/userclients"><img className="icon" src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679307394/Neovet/person-circle-outline_yyfflv.svg" alt="icono agenda"/></NavLink>
      </li>
      <li>
        <NavLink to="/userclients_agenda"><img className="icon" src='https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679305138/Neovet/calendar-outline_vzwcnd.svg' alt='icono agenda'/></NavLink>
      </li>
      <li>
        <NavLink to="/userclients_staff"><img className="icon" src="https://res.cloudinary.com/ddu2qdsdp/image/upload/v1679320948/Neovet/stethoscope_FILL0_wght400_GRAD0_opsz48_n549qq.svg" alt="icono pacientes"/></NavLink>
      </li>
    </ul>
    </div>
    </div>
  )
}

export default AsideClient