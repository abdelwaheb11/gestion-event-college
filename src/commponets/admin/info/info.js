import './info.css'
import logo  from '../../../assets/logo_lycee.png'
import {  toast  } from 'react-toastify';
export default function Info(){
    const ChangeDesc=()=>{
        let btn = document.getElementById('btn')
        let desc=document.getElementById('desc')
        let textarea=document.getElementById('textarea')
        if(btn.getAttribute('action')==="getdata"){
            btn.setAttribute('action','update')
            btn.value='modefier'
            textarea.classList.remove('visually-hidden')
            textarea.value=desc.textContent
            desc.textContent=""
        }else if(btn.getAttribute('action')==="update"){
            textarea.classList.add("visually-hidden")
            desc.textContent=textarea.value
            btn.setAttribute('action','getdata')
            btn.value='Modefier la description'
            toast.success('la description est modefier avec success!')
            
        }
    }
    const ChangeLien=()=>{
        toast.success('les lien des réseaux sociauxe est modefier avec success!')
    }
    return(
        <main className='container mb-5'>
            <div className='d-flex gap-5 align-items-center'>
                <div>
                    <label htmlFor='img' className='img'>
                        <img src={logo} alt="..." width="400" height="400" className="rounded"/>
                    </label>
                    <input type="file" accept="image/*" id="img" className="visually-hidden" />
                </div>
                <div>
                    <textarea id="textarea" cols="100" rows="10" className='visually-hidden form-control'>

                    </textarea>
                   <div id="desc" className='text-white'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi recusandae, consectetur, qui dicta nobis, fuga quibusdam veritatis officia architecto nisi corporis quidem non aperiam voluptas ratione ex eum quod. Porro necessitatibus laboriosam libero cum repellat esse ipsa rerum ducimus tempore quidem. Sapiente amet nostrum provident voluptatem sint temporibus non, necessitatibus quas voluptates reiciendis in voluptatum cumque iste explicabo minus vero voluptate reprehenderit recusandae accusamus vitae, accusantium earum maiores veritatis. Veritatis porro, dolores excepturi assumenda totam vel blanditiis non corrupti deleniti, inventore minus sunt voluptatem quam consequatur culpa magnam optio adipisci nostrum dolor maiores, possimus nulla unde distinctio. Nemo, expedita recusandae!
                    </div>
                    <input action="getdata" id="btn" onClick={ChangeDesc} type="button" className='btn fw-bold mt-3' value="Modefier la description"/> 
                </div>
                
            </div>
            <hr className='text-white' />
            <form method='post' className='mt-2'>
                <label className='text-white fw-bold' htmlFor='facebook'>Lien Facebook</label> 
                <input value="www.facebook.com" type="text" name="facebook" id="facebook" placeholder='Entre le lien de page facebook' className='form-control' />
                <label className='text-white fw-bold' htmlFor='twitter'>Lien Twitter</label>
                <input value="www.twitter.com" type="text" name="twitter" id="twitter" placeholder='Entre le lien de page twitter' className='form-control'/>
                <label className='text-white fw-bold' htmlFor='linkedin'>Lien Linkedin</label>
                <input value="www.linkedin.com" type="text" name="linkedin" id="linkedin" placeholder='Entre le lien de page linkedin' className='form-control'/>
                
                
                <input onClick={ChangeLien} type="button" value="modefier" className='btn fs-5 ' />
            </form>
        </main>
    )
}