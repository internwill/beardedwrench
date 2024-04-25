import React from 'react';
import Button from 'react-bootstrap/Button'
import './navigation.css'
import { useNavigate } from 'react-router-dom'

export const Navigation = () => {
    const navigate = useNavigate();

    return (
        <nav id="menu" className="navbar navbar-default navbar-fixed-top justify-content-end">
            <p className="ps-3 mb-0 me-auto">The Bearded Wrench</p>
            <Button className="me-3" onClick={(e) => {
                e.preventDefault();
                navigate('/');
            }}>Home</Button>
            <Button className="me-3" onClick={(e) => {
                e.preventDefault();
                navigate('/contact')
            }}>Contact</Button>
        </nav>
    )
}
