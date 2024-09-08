import './home.css';
import logo  from '../../../assets/logo_lycee.png'
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 
import Photos from '../../photos';

export default function Home(){
   

   


    return(
        <>
        <Photos />
        <main className='container my-5 text-white'>
            <div className="d-flex gap-5 align-items-center">
                <img src={logo} alt="..." width="500" height="500" className="rounded" />
                <div className="text-white fs-5">
                    <h1 className="mb-3">Lycee Beni khalled</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi recusandae, consectetur, qui dicta nobis, fuga quibusdam veritatis officia architecto nisi corporis quidem non aperiam voluptas ratione ex eum quod. Porro necessitatibus laboriosam libero cum repellat esse ipsa rerum ducimus tempore quidem. Sapiente amet nostrum provident voluptatem sint temporibus non, necessitatibus quas voluptates reiciendis in voluptatum cumque iste explicabo minus vero voluptate reprehenderit recusandae accusamus vitae, accusantium earum maiores veritatis. Veritatis porro, dolores excepturi assumenda totam vel blanditiis non corrupti deleniti, inventore minus sunt voluptatem quam consequatur culpa magnam optio adipisci nostrum dolor maiores, possimus nulla unde distinctio. Nemo, expedita recusandae!</p>
                </div>
            </div>
            <div className="mt-5 row">
                <div className="col-6 text-center fs-2" style={{marginBottom:"100px"}}>
                    <span className="fs-1 fw-bold">+ 500</span>
                    <div>
                        <i class="bi bi-people-fill me-4"></i>
                        <span>Eleves</span>
                    </div>
                </div>
                <div className="col-6 text-center fs-2">
                    <span className="fs-1 fw-bold">+ 20</span>
                    <div>
                        <i class="bi bi-award-fill me-4"></i>
                        <span>Clubs</span>  
                    </div>
                    
                </div>
                <div className="col-6 text-center fs-2">
                    <span className="fs-1 fw-bold">+ 25</span>
                    <div>
                        <i class="bi bi-calendar4-event me-4"></i>
                        <span>Evenements du mois dernier</span>
                    </div>
                    
                </div>
                <div className="col-6 text-center fs-2">
                    <span className="fs-1 fw-bold">+ 150</span>
                    <div>
                        <i class="bi bi-calendar-event-fill me-4"></i>
                        <span>Evenements par annee</span>  
                    </div>
                    
                </div>
            </div>
            <div style={{ marginTop:"100px" }}>
            <h1 className="text-info">Position dans la carte</h1>
                <MapContainer center={[36.639973, 10.5914153]} zoom={17} style={{ height: "500px", width: "100%" , borderRadius:"10px"  }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    />
                    <Marker position={[36.639973, 10.5914153]}>
                        <Popup>Lycée</Popup>
                    </Marker>
                </MapContainer>
            </div>
          
        </main>
        </>
    )
}