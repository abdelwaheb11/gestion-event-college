import { Link } from "react-router-dom"
import "./style.css"
import logo from '../../../assets/logo_club.jpg'
import { useParams } from 'react-router-dom'
import Photos from '../../photos';
export default function DetailsClub(){
    const { id } = useParams();

    return(
        <>
            <main className="container text-white my-5">
            <div className="d-flex align-items-center gap-3">
                <img src={logo} alt="..." width="400" height="400" className="rounded"/>
                <div >
                    <h1 className="mb-4 fw-bold">Club {id}</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo facilis possimus corrupti fugit illo delectus, deleniti aliquam animi maxime temporibus ut modi dolorem quisquam quos dolores accusamus cum libero quia.</p>
                    <Link to={`/clubs/${id}/inscrit`} className="fw-bold px-5 fs-3 mt-5 btn btn-outline-info">Inscription</Link>
                </div>
            </div>
            <div className="mt-5 rounded">
                <Photos />
            </div>
            <div className="row mt-5 ">
                <div className="col-6 text-center ">
                    <span className="fs-1 fw-bold">+ 20</span>
                    <div className="d-flex gap-3 justify-content-center fs-2 text-center ">
                        <i class="bi bi-people-fill"></i>
                        <p>Nomber des eleves inscrit.</p>
                    </div>
                </div>
                <div className="col-6 text-center">
                    <span className="fs-1 fw-bold">+ 4</span>
                    <div className="d-flex gap-3  justify-content-center fs-2 text-center ">
                        <i class="bi bi-calendar2-event"></i>
                        <p >Evenements par mois.</p>
                    </div>
                </div>
                <div className="col mt-3 text-center">
                    <span className="fs-1 fw-bold">+ 100</span>
                    <div className="d-flex gap-3 justify-content-center fs-2 text-center">
                        <i class="bi bi-calendar2-event-fill"></i>
                        <p className=" text-center">Nomber des evenements total.</p>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h1 className="mb-3 text-info fs-1 fw-bold">Information au club</h1>
                <div className="row container">
                    <div className="col-6 fs-4 mb-3">
                        <span className="fw-bold">Labelle : </span>
                        <span>Club {id}</span>
                    </div>
                    <div className="col-6 fs-4">
                        <span className="fw-bold">Responsable : </span>
                        <span>Foulen ben foulen</span>
                    </div>
                    <div className="col-6 fs-4 mb-3">
                        <span className="fw-bold">Jour des evenements : </span>
                        <span>vendredi</span>
                    </div>
                    <div className="col-6 fs-4 mb-3">
                        <span className="fw-bold">heure des evenements : </span>
                        <span>14:00</span>
                    </div>
                    <div className="col-6 fs-4 mb-3">
                        <span className="fw-bold">Abonnement par mois : </span>
                        <span>30 dt</span>
                    </div>
                    <div className="col-6 fs-4">
                        <span className="fw-bold">Abonnement par annee : </span>
                        <span>250dt</span>
                    </div>
                    <div className="col-6 fs-4 mb-3">
                        <span className="fw-bold">Date de creation : </span>
                        <span>le 30 septembre 2018</span>
                    </div>
                   
                </div>

            </div>
            <div className="mt-5">
                <h1 className="mb-3 text-info fs-1 fw-bold">Members du club</h1>
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Nom et Prenom</th>
                        <th scope="col">Post</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Telephone</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                            <th scope="row">Foulen ben foulen</th>
                            <td>Directeur</td>
                            <td>foulen@example.com</td>
                            <td>20 202 020</td>
                        </tr>
                        <tr>
                            <th scope="row">Foulen ben foulen</th>
                            <td>Directeur</td>
                            <td>foulen@example.com</td>
                            <td>20 202 020</td>
                        </tr>
                        <tr>
                            <th scope="row">Foulen ben foulen</th>
                            <td>Directeur</td>
                            <td>foulen@example.com</td>
                            <td>20 202 020</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </main>
        <footer className=" py-2 d-flex justify-content-center">
            <ul className="social-icons">
              <li><a className="facebook title" data-text="Facebook" href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a className="twitter title" data-text="Twitter" href="#"><i class="bi bi-twitter-x"></i></a></li>
              <li><a className="dribbble title" data-text="Envoyer email" href="mailto:yazidiabdelwaheb"><i class="bi bi-envelope-at-fill"></i></a></li>
              <li><a className="linkedin title" data-text="Linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>   
            </ul>
        </footer>
        </>
        
    )
}