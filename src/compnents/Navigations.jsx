import React from "react"
import { NavLink } from "react-router-dom"
import './navigations.css'

export default function Navigation() {
    return (
        <nav class="topnav">
            <div class="navbar-item">
                <NavLink className={({ isActive}) => isActive ? 'active': ''} to="/">Hem</NavLink>
                <NavLink className={({ isActive}) => isActive ? 'active': ''} to="/About">Om mig</NavLink>
                <NavLink className={({ isActive}) => isActive ? 'active': ''} to="/CV">CV</NavLink>
                <NavLink className={({ isActive}) => isActive ? 'active': ''} to="/Portfolio">Portfolio</NavLink>
                <NavLink className={({ isActive}) => isActive ? 'active': ''} to="/Contact">Kontakta mig</NavLink>
            </div>
        </nav>
    )
}
