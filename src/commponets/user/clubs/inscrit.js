//import { Link } from "react-router-dom"
import "./style.css"
import logo from '../../../assets/logo_club.jpg'
import { useParams } from 'react-router-dom'
import {  toast  } from 'react-toastify';

import { useNavigate  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function Inscrit(){
    const { id } = useParams();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        notify(); 
        navigate(`/clubs/${id}`);
    };
    const notify = () => {
        toast.success("Votre inscription est enregister avec success");
      };
    const confirm =()=>{
        const info =document.getElementById('info2')
        const nom = document.getElementById('nom')
        const prenom = document.getElementById('prenom')
        const classe = document.getElementById('classe')
        const email = document.getElementById('mail')
        const check = document.getElementById('check')
        
        if(check.checked){
            navigate( `/clubs/${id}`)
            notify();
            return;
        }
        if(nom.validity.valid && prenom.validity.valid && classe.value!=="0" && email.validity.valid){
          info.classList.remove('visually-hidden')  
        }
        
    }
    return(
       <main className="container mb-5 text-white">
           <header>
               <img src={logo} alt="..." width="150" height="150" className="rounded-circle" />
                <h1 className="fw-bold fs-1 ">Club {id}</h1>
           </header>
            <form onSubmit={handleSubmit}  className="form-control text-white w-75 mx-auto bg-dark bg-gradient" >
                <h3 className="text-info">Informations eleve</h3>
                <label htmlFor="nom">Nom </label> <span className="fw-bold fs-2 text-danger">*</span>
                <input  type="text" required id="nom" name="nom" className="form-control" placeholder="Entre votre nom" />
                <label htmlFor="prenom">Prenom </label><span className="fw-bold fs-2 text-danger">*</span>
                <input required type="text" id="prenom" name="prenom" className="form-control" placeholder="Entre votre prenom" />
                <label htmlFor="classe">Classe </label><span className="fw-bold fs-2 text-danger">*</span>
                <select  name="classe" id="classe" className="form-select fw-bold fs-5">
                    <option className="fw-bold fs-5" defaultValue value="0">Choix votre class</option>
                    <option className="fw-bold fs-5" value="7">7 eme</option>
                    <option className="fw-bold fs-5"  value="8">8 eme</option>
                    <option className="fw-bold fs-5"  value="9">9 eme</option>
                </select>
                <label className="me-5">Sexe</label> Homme <input type="radio" name="sexe" style={{marginTop : "30px"}} className="form-check-input me-5" /> Famme <input style={{marginTop : "30px"}} type="radio" className="form-check-input" name="sexe" /> <br/>
                <label htmlFor="mail">Email </label ><span className="fw-bold fs-2 text-danger">*</span>
                <input required type="email" id="mail" name="mail" className="form-control" placeholder="Entre votre email" />
                <input type="checkbox" name="c" value="off"  id="check" className="form-check-input me-3 mt-4" /> <label htmlFor="check">Je suis deja un eleve inscrit a cet lycee</label>
                <div id="info2" className="visually-hidden">
                    <hr/>
                    <h3 className="text-info">Informations Parents</h3>
                    <label htmlFor="nompere">Nom et prenom de pere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input required  type="text" id="nompere" name="nompere" className="form-control" placeholder="Entre nom du votre pere" />
                    <label htmlFor="telepere">Numero de telephone de pere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input required type="text" id="telepere" name="telepere" className="form-control" placeholder="Entre numero de telephone de votre pere" />
                    <label  htmlFor="nommere">Nom et prenom de mere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input required type="text" id="nommere" name="nommere" className="form-control" placeholder="Entre nom du votre mere" />
                    <label htmlFor="telemere">Numero de telephone de mere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input required type="text" id="telemere" name="telemere" className="form-control" placeholder="Entre numero de telephone de votre mere" />
                </div>
                <input type="submit" onClick={confirm}  value="inscription" className="btn mt-5 fs-5 btn-outline-info w-100 fw-bold"></input>
                
            </form>
       </main>
    )
}