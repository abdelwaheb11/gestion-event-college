
import event1 from '../assets/event1.jpg'
import event2 from '../assets/event2.jpg'

export default function Photos (){
    return(
        <main>
            <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000">
                    <img src={event1} className="d-block w-100" height="550" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                    <img src={event2} className="d-block w-100" height="550" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </main>
    )
}