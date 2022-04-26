import React, { useState, useEffect } from 'react'
import "./Nav.css"
import Modal from './Modal'
import Login from './Login'
import Signup from './Signup'

function Nav() {
    const [show, setShow] = useState(false)
    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else setShow(false)
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, [])
    return (
        <div className={`nav ${show && "nav-dark"}`}>
            <Modal show={showLogin} modalClose={()=>setShowLogin(!showLogin)}>
                <Login />
            </Modal>
            <Modal show={showSignup} modalClose={()=>setShowSignup(!showSignup)}>
                <Signup />
            </Modal>
            <img
                className="nav-logo"
                src="/image/netflix.png"
                alt="netflix"
            />

            <div className="auth-button">
                <button className="nav-button" onClick={()=> setShowLogin(!showLogin)}>signin</button>
                <button className="nav-button signup" onClick={()=> setShowSignup(!showSignup)}>signup</button>
            </div>
        </div>
    )
}

export default Nav
