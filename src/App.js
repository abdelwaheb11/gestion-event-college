import './App.css';
import React, { useState , useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './commponets/user/home/home'
import NavbarUser from './commponets/user/navbar/navbarUser'
import NavbarAdmin from './commponets/admin/navbar/navbarAdmin'
import ListeClubs from './commponets/user/clubs/liste_clubs';
import DetailsClub from './commponets/user/clubs/detailsClub';
import Inscrit from './commponets/user/clubs/inscrit';
import Conatct from './commponets/user/contact/contact';
import Footer from './commponets/footer';
import Dashboard from './commponets/admin/dashboard/dashboard';
import Login from './commponets/admin/login/login';
import Inscription from './commponets/user/inscription/inscription';

import { ToastContainer  } from 'react-toastify';
import ListeClubAdmin from './commponets/admin/clubs/liste_club_admin';
import AjouterClubAdmin from './commponets/admin/clubs/ajouter_club';
import ModefierClubAdmin from './commponets/admin/clubs/modefier_club';
import ListeEleve from './commponets/admin/eleves/liste_eleve';
import AjouterEleve from './commponets/admin/eleves/ajouter_eleve';
import ModefierEleve from './commponets/admin/eleves/modefier_eleve';
import Info from './commponets/admin/info/info';


function App() {

  const [role, setRole] = useState('user');

  useEffect(() => {
    const getrole = localStorage.getItem('role');
    if (getrole) {
      setRole(getrole);
    }
  }, []);

  const getNavbar = ()=>{
    switch (role) {
      case 'user':
        return <NavbarUser />;
      case 'admin':
        return <NavbarAdmin />;
      default:
        return <NavbarUser />;
    }
  }
  return (
    <Router>
      {getNavbar()}
      <Routes>
        <Route exact  path="/" element={<Home />} />
        <Route exact path="/clubs" element={<ListeClubs />} />
        <Route exact path="/clubs/:id" element={<DetailsClub />} />
        <Route exact path="/clubs/:id/inscrit" element={<Inscrit />} />
        <Route exact path="/contact" element={<Conatct />} />
        <Route exact path="/inscription" element={<Inscription />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/admin/login" element={<Login />} />
        <Route exact path="/clubsAdmin" element={<ListeClubAdmin />} />
        <Route exact path="/clubsAdmin/ajouter" element={<AjouterClubAdmin />} />
        <Route exact path="/clubsAdmin/modefier/:id" element={<ModefierClubAdmin />} />
        <Route exact path="/listeEleve" element={<ListeEleve />} />
        <Route exact path="/listeEleve/ajouter" element={<AjouterEleve />} />
        <Route exact path="/listeEleve/modefier/:id" element={<ModefierEleve />} />
        <Route exact path="/info" element={<Info />} />
      </Routes>
      <Footer />
      <ScroleTop/>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"/>
    </Router>
  );
}

function ScroleTop(){
  const scrole = ()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  return(
    <div className='scroletop' onClick={scrole}>
      <i class="bi bi-arrow-up-circle-fill btn btn-outline-info p-0 px-2 fs-1"></i>
    </div>
  )
}

export default App;
