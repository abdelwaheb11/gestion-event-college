import "./style.css"
import Club from './club'

export default function ListeClubs(){

    const liste = Array.from({ length: 20 }, (_, index) => (
        <Club key={index} num={index} />
    ));
    return(
        <main className="container my-5 pt-5">
            <div className="row d-flex justify-content-center">
               {liste} 
            </div>
        </main>
    )
}