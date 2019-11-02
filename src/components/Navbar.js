import React from 'react'
import { Link } from 'gatsby'
// import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = () => {
    return (
        <nav
            className="bg-near-black fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"
            role="navigation"
            aria-label="main-navigation"
        >
            <div id="navMenu" className="ph2 ph3-ns tc-ns"> 
                <div className="navbar-start has-text-centered">
                    <Link className="link dim white f6 f5-ns dib mr3" to="/about">
                        About
                    </Link>
                    <Link className="link dim white f6 f5-ns dib mr3" to="/projects">
                        Projects
                    </Link>
                    <Link className="link dim white f6 f5-ns dib mr3" to="/blog">
                        Blog
                    </Link>
                    <Link className="link dim white f6 f5-ns dib mr3" to="/contact">
                        Contact
                    </Link>
                    <Link className="link dim white f6 f5-ns dib" to="/contact/examples" style={{display: 'none'}}>
                        Form Examples
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
