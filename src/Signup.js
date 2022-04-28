import React,{useState} from 'react'
import "./Login.css"

function Signup() {
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    return (
        <div className="login">
            <img
                className="logo"
                src="/image/netflix.png"
                alt="netflix"
            />
            <h1>Signup</h1>
            <form>
                <span>Email</span>
                <input type="email" placeholder="" />
                <span>Password</span>
                <i className={`bi bi-eye${show1? "":"-slash"}-fill show-password-signup1`} onClick={()=> setShow1(!show1)}></i>
                <input type={show1 ? "text":"password"} />
                <span>Repeat Password</span>
                <i className={`bi bi-eye${show2? "":"-slash"}-fill show-password-signup2`} onClick={()=> setShow2(!show2)}></i>
                <input type={show2 ? "text":"password"}  />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup
