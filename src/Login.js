import React,{useState} from 'react'
import "./Login.css"

function Login() {
    const [show, setShow] = useState(false)
    return (
        <div className="login">
            <img
                className="logo"
                src="/image/netflix.png"
                alt="netflix"
            />
            <h1>Login</h1>
            <form>
                <span>Email</span>
                <input type="email"  />
                <span>Password</span>
                <i className={`bi bi-eye${show? "":"-slash"}-fill show-password`} onClick={()=> setShow(!show)}></i>
                <input type={show ? "text":"password"}  />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
