import './contact.css'

import {  toast  } from 'react-toastify';

import { useNavigate  } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function Conatct(){
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); 
        notify(); 
        navigate('/');
    };
    const notify = () => {
        toast.success("Votre message est envoyer avec success!");
      };
    return(
        <main className='container text-white my-5'>
            <form onSubmit={handleSubmit} className='form-control text-white  w-75 mx-auto bg-dark bg-gradient'>
                <div className='row'>
                    <div className='col'>
                        <label for="nom">Nom</label><span className="fw-bold fs-2 text-danger">*</span>
                        < input required type="text" name="nom" id='nom' placeholder='Entre votre nom' className='form-control' />
                    </div>
                    <div className='col'>
                        <label for="prenom">Prenom</label><span className="fw-bold fs-2 text-danger">*</span>
                        < input required type="text" name="prenom" id='prenom' placeholder='Entre votre prenom' className='form-control' />
                    </div>
                </div>
                <label for="email">Email</label><span className="fw-bold fs-2 text-danger">*</span>
                < input type="email" required name="email" id='email' placeholder='Entre votre email' className='form-control' />
                <label for="sujet">Sujet</label>
                < input  type="text" name="sujet" id='sujet' placeholder='Entre votre sujet' className='form-control' />
                <label for="message">Message</label><span className="fw-bold fs-2 text-danger">*</span>
                <textarea required id="message" placeholder='Entre votre message....'  className='form-control' rows='8'>

                </textarea>

                <input type='submit'  value="Envoyer" className='btn fs-5 btn-outline-info fw-bold w-100 mt-5 mb-3'></input>
                
            </form>
        </main>
    )
}