import { Link } from "react-router-dom"
import "./style.css"
import logo from '../../../assets/logo_club.jpg'


export default function Club({num}){

    return(
        <div class="cards text-white col-sm-3 me-5 mb-5 rounded px-3 py-2" style={{ width:"25rem" }}>
            <img class="card-img mb-2" src={logo} alt="..." />
            <div class="card-info">
                <h3 class="card-title fs-2 mb-3 text-center">My club</h3>
                <div class="text-body text-white row">
                    <p className="col-6 text-white"> <span className="fw-bold">Responsable  <br/></span> Foulen ben foulen </p>
                    <p className="col-6 text-white" ><span className="fw-bold">Prix d'abonnement  <br/></span> 35dt</p>
                    <p className="col-6 text-white" ><span className="fw-bold">Jour des evenements  <br/></span> vendredi</p>
                    <p className="col-6 text-white"><span className="fw-bold">Heur des evenements  <br/></span>14:00</p>
                </div>
                <Link to={`/clubs/${num}`}  class="text-title btn btn-info fs-5 fw-bold w-100">Voir details</Link>
            </div>
            
        </div>
    )


}