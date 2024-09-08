import './footer.css'
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <div className="site-footer">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2024 All Rights Reserved by 
         <Link to="/" className='fw-bold'> Lycee Beni Kalled</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons me-5">
              <li><a className="facebook title" data-text="Facebook" href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a className="twitter title" data-text="Twitter" href="#"><i class="bi bi-twitter-x"></i></a></li>
              <li><a className="linkedin title" data-text="Linkedin" href="#"><i class="bi bi-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
    )
}