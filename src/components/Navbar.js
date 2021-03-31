import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    margin-bottom: 15px
    position: sticky;
    top: 0;
`

function Navbar() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <h2 className="navbar-brand">Navbar</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/'>Roster</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/search'>Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Nav>
    )
}
export default Navbar