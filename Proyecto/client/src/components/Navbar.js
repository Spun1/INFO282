import React from 'react'
import {
    Link
  } from "react-router-dom";


export const Navbar = () => {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
                <div className='container-fluid'>
                    <a href='/' className='navbar-brand'>Clinica Fedent</a>

                    {/* Boton para menu movil */}
                    <button 
                        className='navbar-toggler'
                        type = 'button'
                        data-bs-toggle='collpase'
                        data-bs-target='#menu'
                        aria-controls='menu'
                        aria-expanded = 'false'
                        aroa-label='Mostrar / Ocultar Menu'
                    >
                        <span className='navbar-toggler-icon'></span>
                    </button>


                    {/* Menu de navegacion */}

                    <div className = 'collpase navbar-collapse' id='menu'>
                        <ul className='navbar-nav me-auto mb-2 mb-lg-0 '> 

                            <li className='nav-item'>
                                <Link to='/' className='nav-link'>Inicio</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to='/registrar-paciente' className='nav-link'>Registrar Paciente</Link>
                            </li>
                            
                        </ul>
                        <button type='button' className='btn btn-outline-danger'>Cerrar Sesion</button>
                    </div>


                </div>
            </nav>
        </div>
    )
}