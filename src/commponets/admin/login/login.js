import './login.css'


export default function Login(){
    
    const handleSubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem('role','admin')
        window.location.href="/admin";
    };
    return(
        <>
            <div class="w-50 mx-auto mt-5 card">
            <h4 className="fs-3 fw-bold text-white mb-5">Log In Admin Panal</h4>
            <form onSubmit={handleSubmit}>
                <div class="field">
                <i class="bi bi-envelope-at-fill input-icon text-white"></i>
                <input autocomplete="off" id="logemail" placeholder="Email" class="input-field" name="email" type="email" required />
                </div>
                <div class="field">
                <i class="bi bi-person-fill-lock input-icon text-white"></i>
                <input autocomplete="off" id="logpass" placeholder="Password" class="input-field" name="password" type="password" required />
                </div>
                <button class="btn w-100 fs-5" type="submit">Login</button>
                
            </form>
            </div>
        </>
    )
}