import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer>
            <img
                className="nav-logo-footer"
                src="/image/netflix.png"
                alt="netflix"
            />
            <div className="links">
                <a href="https://www.linkedin.com/in/ali-herawi"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.github.com/aliherawi7"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/ali.herawi"><i className="bi bi-instagram"></i></a>
                <a href="https://t.me/AliHerawi"><i className="bi bi-telegram"></i></a>
            </div>
            <span>
                All right reserved to <a href="https://www.linkedin.com/in/ali.herawi">Ali Herawi</a>
            </span>
        </footer>
    )
}

export default Footer
