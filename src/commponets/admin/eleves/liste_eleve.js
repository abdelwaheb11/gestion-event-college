import './style.css'
import { Link } from 'react-router-dom';
import {  toast  } from 'react-toastify';

 

function TrEleve({ id }) {
    const sup = (id) => {
      let verif = window.confirm(`Etes-vous sur de supprimer l'eleve' : ${id} ?`);
      if (verif) {
        toast.success(`L'eleve ${id} a ete supprime avec succes`);
      }
    };
  
    return (
      <tr>
        <th scope="row">{id}</th>
        <td>Foulen</td>
        <td>Ben foulen</td>
        <td>8eme</td>
        <td>foulen@gmail.com</td>
        <td>20202020</td>
        <td>
          <Link to={`/listeEleve/modefier/${id}`} data-text="Modifier" className="icon title text-warning">
            <i className="bi bi-pencil-square fs-4"></i>
          </Link>
          <span onClick={() => sup(id)} data-text="Supprimer" className="icon title ms-3 text-danger">
            <i className="bi bi-trash3-fill fs-4"></i>
          </span>
        </td>
      </tr>
    );
  }
  
export default function ListeEleve () {
  const liste = Array.from({ length: 30 }, (_, index) => (
    <TrEleve key={index} id={index} />
  ));

  return (
    <main className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-white fw-bold">Liste des Eleves</h1>
        <Link className="btn" to="/listeEleve/ajouter">
          Ajouter eleve
        </Link>
      </div>
      <form mothod='get' className="input-group mb-1 w-50 mx-auto">
            <input type="text" class="form-control" placeholder="Rechercher" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span class="input-group-text bg-dark px-3 title text-white icon py-1" data-text="Rechercher" id="basic-addon2"><i class="bi bi-search fs-4"></i></span>
      </form>
      <table className="table table-dark table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Classe</th>
            <th scope="col">Email</th>
            <th scope="col">Numero de telephone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{liste}</tbody>
      </table>
    </main>
  );
};


