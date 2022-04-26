import React from 'react'
import "./Login.css"

function Login() {
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
                <input type="password"  />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login
