import './style.css'
import {  toast  } from 'react-toastify';
import { useNavigate  } from 'react-router-dom';


export default function AjouterClubAdmin(){
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const nom = document.getElementById('nom')
        toast.success(`le club "${nom.value}" est enregister avec success!`); 
        navigate('/clubsAdmin');
        

    };
    return (
        <main className="container my-5 text-white">
          
            <form onSubmit={handleSubmit}  className="form-control text-white w-75 mx-auto bg-dark bg-gradient" >
                <h2 className="text-info text-center fw-bold">Ajouter Club</h2>
                <label htmlFor="nom">Nom </label> <span className="fw-bold fs-2 text-danger">*</span>
                <input  type="text" required id="nom" name="nom" className="form-control" placeholder="Entre le nom de cub" />
                <label htmlFor="responsable">Responsable </label><span className="fw-bold fs-2 text-danger">*</span>
                <select required name='responsable' id="responsable" className='form-select'>
                    <option selected value="0">Choixe Responsable</option>
                    <option>Responsable1</option>
                    <option>Responsable2</option>
                    <option>Responsable3</option>
                    <option>Responsable4</option>
                </select>
                <label htmlFor="mail">Email </label><span className="fw-bold fs-2 text-danger">*</span>
                <input required type="email" id="mail" name="mail" className="form-control" placeholder="Entre le email de club" />
                <label htmlFor="jour">Jour des evenements </label><span className="fw-bold fs-2 text-danger">*</span>
                <select required name='jour' id="jour" className='form-select'>
                    <option value="0" selected>Choixe jour</option>
                    <option>Mercredi</option>
                    <option>Vendridi</option>
                    <option>Samedi</option>
                    <option>Dimanche</option>
                </select>
                <label htmlFor="heure">Heure des evenements </label><span className="fw-bold fs-2 text-danger">*</span>
                <select required name='heure' id="heure" className='form-select'>
                    <option value="0" selected>Choixe heure</option>
                    <option>13:00</option>
                    <option>14:00</option>
                    <option>15:00</option>
                    <option>16:00</option>
                </select>                
                <label  htmlFor="mois">Prix d'abonnement par mois </label><span className="fw-bold fs-2 text-danger">*</span>
                <input required type="number" id="mois" name="mois" className="form-control" placeholder="Entre le prix d'abonnement par mois" />
                <label htmlFor="annee">Prix d'abonnement par annee </label><span className="fw-bold fs-2 text-danger">*</span>
                <input required type="number" id="annee" name="annee" className="form-control" placeholder="Entre le prix d'abonnement par annee" />
                <label htmlFor="desc">Description </label><span className="fw-bold fs-2 text-danger">*</span>
                <textarea className='form-control' id="desc" rows="5" >

                </textarea>
                
                <input type="submit"   value="Ajouter" className="btn mt-5 fs-5 btn-outline-info w-100 fw-bold"></input>
                
            </form>
       </main>
    )
}