import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default class dashboard extends Component {
    render() {
        return (
            <div className="container dashboad">
                <div className="card-view">
                    <div className="row">
                     
                        <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3 d-flex justify-content-center dlayout">
                            <Link className="link" to='/suppliers_Home'>
                                <div class="card dCard" style={{ width: '12rem' }}>
                                    <img src="images/icons/icon-2.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <span class="card-text">Supliers</span>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="col-md-3 col-xs-3 col-sm-3 col-lg-3 d-flex justify-content-center dlayout">
                            <Link className="link" to='/budget_Home'>
                                <div class="card dCard" style={{ width: '12rem' }}>
                                    <img src="images/icons/icon-6.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <span class="card-text">Discounts</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                       
                                                                                          
                    </div>
                    <div className="row" style={{ marginTop: '50px' }}>
                      
                       
                       
                     
                    </div>                    
                </div>
            </div>
        )
    }
}
