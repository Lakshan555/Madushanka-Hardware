import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import './sidebars.css'

export default class sidebars extends Component {
    render() {
        return (
            <div>
                <SideNav className="sidenav"
                    onSelect={(selected) => {
                        // Add your code here
                    }}
                >
                    <SideNav.Toggle className="toggleNav" />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem className="item" eventKey="Projects">                            
                            <NavIcon>
                                <Link className="link" to="/projects">
                                    <img src="https://i.ibb.co/Lt9d732/icon-1.png" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to="/projects">
                                    Projects
                                </Link>
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Budgets">
                            <NavIcon>
                                <Link className="link" to='/budget_Home'>
                                    <img src="https://i.ibb.co/yPZY7wT/icon-6.png" alt="icon-6" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to='/budget_Home'>
                                    Budget
                                </Link>
                            </NavText>
                        </NavItem>                          
                        <NavItem className="item" eventKey="Suppliers">
                            <NavIcon>
                                <Link className="link" to="/suppliers_Home">
                                    <img src="https://i.ibb.co/DRdV9gC/icon-2.png" alt="icon-2" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to="/suppliers_Home">
                                    Suppliers
                                </Link>
                            </NavText>
                        </NavItem>                      
                        <NavItem className="item" eventKey="Requsitons">
                            <NavIcon>
                                <Link className="link" to='/Requsition_Manage'>
                                    <img src="https://i.ibb.co/41V6G7D/icon-3.png" alt="icon-3" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to='/Requsition_Manage'>
                                    Requsitons
                                </Link>                                    
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Orders">
                            <NavIcon>
                                <Link className="link" to='/Orders'>
                                    <img src="https://i.ibb.co/6Bn81QS/icon-5.png" alt="icon-5" width="30px" height="30px"/>              
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to='/Orders'>
                                    Orders
                                </Link>
                            </NavText>
                        </NavItem>   
                        <NavItem className="item" eventKey="Deliveries">
                            <NavIcon>
                                <Link className="link" to='/Deliveries'>
                                    <img src="https://i.ibb.co/gtr4n8g/icon-7.png" alt="icon-7" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to='/Deliveries'>
                                    Deliveries
                                </Link>
                            </NavText>
                        </NavItem>                                             
                        <NavItem className="item" eventKey="Invoices">
                            <NavIcon>       
                                <Link className="link" to='/InvoiceHome'>                                    
                                    <img src="https://i.ibb.co/ySrqJ3B/icon-4.png" alt="icon-4" width="30px" height="30px"/>
                                </Link>
                            </NavIcon>
                            <NavText>
                                <Link className="link" to='InvoiceHome'>
                                    Invoices
                                </Link>
                            </NavText>
                        </NavItem>
                        <NavItem className="item" eventKey="Settings">
                            <NavIcon>
                                <img src="https://i.ibb.co/fx7wFSS/icon-8.png" alt="icon-8" width="30px" height="30px"/>
                            </NavIcon>
                            <NavText>
                                Settings
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>

            </div>
        )
    }
}
