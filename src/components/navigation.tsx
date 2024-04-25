import React from 'react';
import Button from 'react-bootstrap/Button'
import './navigation.css'

export const Navigation = () => {
    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top justify-content-end">
            <p className="ps-3 mb-0 me-auto">The Bearded Wrench</p>
            <Button className="me-3" onClick={(e) => {
                e.preventDefault();
                window.location.href='/beardedwrench'
            }}>Home</Button>
            <Button className="me-3" onClick={(e) => {
                e.preventDefault();
                window.location.href='/beardedwrench/contact'
            }}>Contact</Button>
        </nav>
    )
}
