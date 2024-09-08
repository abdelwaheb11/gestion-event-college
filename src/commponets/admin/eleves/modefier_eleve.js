//import { Link } from "react-router-dom"
import "./style.css"
import {  toast  } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';




export default function ModefierEleve(){

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        notify(); 
        navigate('/listeEleve');
        

    };
    const notify = () => {
        const nom = document.getElementById('nom').value
        toast.success(`l'eleve ${nom} est modefiere avec success!`);
      };
    
    return(
       <main className="container my-5 text-white">
          <h1 className="text-info text-center fw-bold">Modefiere Eleve</h1>
            <form onSubmit={handleSubmit}  className="form-control text-white w-75 mx-auto bg-dark bg-gradient" >
                <h3 className="text-info">Informations eleve</h3>
                <label htmlFor="nom">Nom </label> <span className="fw-bold fs-2 text-danger">*</span>
                <input value="foulen"  type="text" required id="nom" name="nom" className="form-control" placeholder="Entre votre nom" />
                <label htmlFor="prenom">Prenom </label><span className="fw-bold fs-2 text-danger">*</span>
                <input value="ben foulen" required type="text" id="prenom" name="prenom" className="form-control" placeholder="Entre votre prenom" />
                <label htmlFor="date">Date de naissance </label> <span className="fw-bold fs-2 text-danger">*</span>
                <input value="2012-05-12"  type="date" required id="date" name="date" className="form-control"/>
                
                <label htmlFor="classe">Classe </label><span className="fw-bold fs-2 text-danger">*</span>
                <select  name="classe" id="classe" className="form-select fw-bold fs-5">
                    <option className="fw-bold fs-5" value="0">Choix votre class</option>
                    <option className="fw-bold fs-5" value="7">7 eme</option>
                    <option className="fw-bold fs-5"  value="8">8 eme</option>
                    <option className="fw-bold fs-5" selected  value="9">9 eme</option>
                </select>
                <label className="me-5">Sexe</label> Homme <input checked type="radio" name="sexe" style={{marginTop : "30px"}} className="form-check-input me-5" /> Famme <input style={{marginTop : "30px"}} type="radio" className="form-check-input" name="sexe" /> <br/>
                <label htmlFor="mail">Email </label ><span className="fw-bold fs-2 text-danger">*</span>
                <input value="foulen@exemple.com" required type="email" id="mail" name="mail" className="form-control" placeholder="Entre votre email" />
                <div id="info2" >
                    <hr/>
                    <h3 className="text-info">Informations Parents</h3>
                    <label htmlFor="nompere">Nom et prenom de pere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input value="foulen ben foulen" required  type="text" id="nompere" name="nompere" className="form-control" placeholder="Entre nom du votre pere" />
                    <label htmlFor="telepere">Numero de telephone de pere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input value="20202020" required type="text" id="telepere" name="telepere" className="form-control" placeholder="Entre numero de telephone de votre pere" />
                    <label  htmlFor="nommere">Nom et prenom de mere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input value="foulen ben foulen" required type="text" id="nommere" name="nommere" className="form-control" placeholder="Entre nom du votre mere" />
                    <label htmlFor="telemere">Numero de telephone de mere </label><span className="fw-bold fs-2 text-danger">*</span>
                    <input value="20202020" required type="text" id="telemere" name="telemere" className="form-control" placeholder="Entre numero de telephone de votre mere" />
                </div>
                <input type="submit"   value="modefier" className="btn mt-5 fs-5 btn-outline-info w-100 fw-bold"></input>
                
            </form>
       </main>
    )
}