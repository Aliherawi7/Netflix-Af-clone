import React from 'react'
import "./Login.css"

function Signup() {
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
                <input type="password" placeholder="" />
                <span>Repeat Password</span>
                <input type="password" placeholder="" />
                <button>Signup</button>
            </form>
        </div>
    )
}

export default Signup
