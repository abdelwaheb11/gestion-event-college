import './navbar.css';
import React, { useEffect } from 'react';
import { NavLink   } from 'react-router-dom';
import logo  from '../../../assets/logo_lycee.png'

export default function NavbarUser(){

    useEffect(() => {
        const searchForm = document.getElementById('searchForm');
        if (searchForm) {
            const input = searchForm.querySelector('#searchInput');
            input.addEventListener('blur', () => searchForm.classList.remove('focused'));
            input.addEventListener('focus', () => searchForm.classList.add('focused'));
        }
    }, []);
    
    const navigate = (e) => {
        e.preventDefault();
        const value = document.getElementById("searchInput").value;
        window.location.href = `/clubs?search=${value}`;
    }
    return(
        <nav>
            <div className='logo'>
                <img src={logo} alt="..." />
                <span className='fs-3 fw-bold text-white'>Lycee Beni khalled</span>
            </div>
            <ul className='links'>
                <li>
                    <NavLink exact  to="/" className='link' >
                        <i className="bi bi-house-check-fill"></i>
                        <span >Home</span>   
                    </NavLink >
                </li>
                <li>
                    <NavLink  to="/clubs" className='link '  >
                        <i className="bi bi-card-checklist"></i>
                        <span>Liste clubs</span>
                    </NavLink >
                </li>

                <li>
                    <NavLink  to="/contact" className='link ' >
                        <i className="bi bi-envelope-paper-heart-fill"></i>
                        <span>Contact</span>
                    </NavLink >
                </li>
                <li>
                    <NavLink  to="/inscription" className='link ' >
                        <i className="bi bi-substack"></i>
                        <span>Inscription</span>
                    </NavLink >
                </li>
               
            </ul>
            <form method='get' onSubmit={navigate} id='searchForm' className='search'>
                <i className="bi bi-search"></i>
                <input  type='search' id='searchInput' name="search" placeholder='Rechercher...' />
            </form>
        </nav>
    )
}