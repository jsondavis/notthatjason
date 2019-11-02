import React from 'react'
import { Link } from 'gatsby'

// import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = () => {
    return (
        <footer className="bt b-black-90 mw-none mw8-ns center bg-white pa3 ph5-ns near-black">
            <div className="dib mw4">
                <img
                    src={'broken'}
                    alt="Logo"
                />
            </div>
            <section className="tc">
                <Link to="/" className="link dim black f6 f5-ns dib mr3">
                    Home
                </Link>
                <Link className="link dim black f6 f5-ns dib mr3" to="/about">
                    About
                </Link>
                <Link className="link dim black f6 f5-ns dib mr3" to="/products">
                    Products
                </Link>
                <Link className="link dim black f6 f5-ns dib mr3" to="/contact/examples">
                    Form Examples
                </Link>
                <a
                    className="link dim black f6 f5-ns dib mr3"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Admin
                </a>

            </section>
            <section className="tc mt3 mt4-ns">
                <a title="facebook" href="https://facebook.com" className="dib mw3 mr3">
                    <img
                        src={facebook}
                        alt="Facebook"
                        className="h2 w2 dim"
                    />
                </a>
                <a title="twitter" href="https://twitter.com" className="dib mw3 mr3">
                    <img
                        className="fas fa-lg"
                        src={twitter}
                        alt="Twitter"
                        className="h2 w2 dim"
                    />
                </a>
                <a title="instagram" href="https://instagram.com" className="dib mw3 mr3">
                    <img
                        src={instagram}
                        alt="Instagram"
                        className="h2 w2 dim"
                    />
                </a>
                <a title="vimeo" href="https://vimeo.com" className="dib mw3 mr3">
                    <img
                        src={vimeo}
                        alt="Vimeo"
                        className="h2 w2 dim"
                    />
                </a>
            </section>
        </footer>
    )
}

export default Footer
