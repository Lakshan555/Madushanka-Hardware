import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class topNav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-color">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                
                            </ul>
                            
                            <ul className="collapse navbar-collapse brand" style={{ marginLeft: '25rem' }}>
                                <label>Madushanka Hardware</label>
                            </ul>
                            <form className="d-flex">
                                <div class="input-group shape">
                                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"
                                        aria-describedby="search-addon" />
                                    <span class="input-group-text border-0" id="search-addon">
                                        <i class="fas fa-search"></i>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}