import './navbar.css';
import { NavLink   } from 'react-router-dom';
import logo  from '../../../assets/logo_lycee.png'
export default function NavbarAdmin(){
    const logout =()=>{
        window.localStorage.setItem('role','user')
        window.location.href="/admin/login"
    }
    return(
        <nav>
            <div className='logo'>
                <img src={logo} alt="..." />
                <span className='fs-5 fw-bold text-white'><span className='fs-2 fw-bold'>ADMIN </span>Lycee Beni khalled</span>
            </div>
            <ul className='links'>
                <li>
                    <NavLink exact  to="/admin" className='link' >
                        <i class="bi bi-house-gear-fill"></i>
                        <span >Dashboard</span>   
                    </NavLink >
                </li>

                <li>
                    <NavLink  to="/clubsAdmin" className='link ' >
                    <i className="bi bi-card-checklist"></i>
                        <span>Liste clubs</span>
                    </NavLink >
                </li>
                <li>
                    <NavLink  to="/listeEleve" className='link ' >
                        <i class="bi bi-people-fill"></i>
                        <span>Liste eleves</span>
                    </NavLink >
                </li>
                <li>
                    <NavLink  to="/info" className='link '  >
                        <i class="bi bi-info-circle-fill"></i>
                        <span>Informations</span>
                    </NavLink >
                </li>
               
            </ul>
            <div>
                <span className='fw-bold fs-5 text-white me-2'>admin</span>
                <input onClick={logout} type="button" className='logout fw-bold' value="Deconnecter"  />
            </div>
        </nav>
    )
}