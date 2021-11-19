import React, { Component } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import { Link } from 'react-router-dom';
import './estyle.css'

const invoiceRegx = RegExp(/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/gm);
const formValid = formErrors => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });
    return valid;
};

export default class AddSupplier extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierNo: "",
            name: "",
            address: "",
            phoneNo: Number,
            email: "",
            regDate: new Date(),
          


            formErrors: {
                supplierNo: "",
                name: "",
                phoneNo: Number,
                email: ""
            }

        }
    }





    handleInputChange = (e) => {
        // validaons
        const { name, value } = e.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case "supplierNo":
                formErrors.supplierNo =
                    value.length < 5 || value.length > 7
                        ? "SID number should have charactor between 5 to 7"
                        : "";
                break;

            case "name":
                formErrors.name =
                    value.length < 3
                        ? "Minimum charchter must be 3"
                        : "";
                break;
            case "phoneNo":
                formErrors.phoneNo =
                    value.length < 10 || value.length > 10
                        ? "Please enter a valid phone number"
                        : "";
                break;
            case "email":
                formErrors.email = invoiceRegx.test(value)
                    ? ""
                    : "Enter a valid email";
                break;

            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));

        this.setState({
            ...this.state,
            [name]: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        if (formValid(this.state.formErrors)) {


            const { supplierNo, name, address, phoneNo, email, regDate } = this.state;

            const data = {
                supplierNo: supplierNo,
                name: name,
                address: address,
                phoneNo: phoneNo,
                email: email,
                regDate: regDate,
                

            }
            console.log(data)
            axios.post("http://localhost:8000/supplier/add", data).then((res) => {
                if (res.data.success) {
                    toast(`New Supplier Added`, {
                        type: toast.TYPE.SUCCESS,
                        autoClose: 4000
                    });
                    this.setState(
                        {
                            supplierNo: "",
                            name: "",
                            address: "",
                            phoneNo: Number,
                            email: "",
                            regDate: ""

                        }
                    )
                };
            });
        }
        else {
            toast(`😀 Plaese fill out the field. `, {
                type: toast.TYPE.ERROR,
                autoClose: 4000
            });

        }
    };

    

    render() {
        const { formErrors } = this.state;

        return (
            <div className="container containerTop">
                <div className="row">
                    <div className="col-md-12 col-sm-12">
                        <div className="row rtitle" style={{ marginTop: '100px' }}>
                            <div className="col-md-12 col-sm-12 col-lg-12">
                                <Link to='/suppliers_Home' className="rlink">Supplier Details</Link> {'>'} <label htmlFor="suplier">Add Supplier</label>
                            </div>
                            <div className="col-md-12 col-sm-12 col-lg-12 position-relative text-center">
                                <h1 className='display-5 fw-bold'>Add Supplier</h1>
                                < ToastContainer />
                            </div>
                            <hr className="hr" style={{ height: '2px', color: '#0a90e8' }} />
                        </div>                        
                    </div>      

                    <div className="row" style={{marginTop:'50px'}}>
                        <div className="col-md-2 col-sm-2 col-lg-2"/>
                        <div className="col-md-8 col-sm-8 col-lg-8">
                            <div className="shadowBox">
                                <form>
                                    <div className='row'>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='RequisitionID'> Suplier ID : </label>
                                            <input type='text' className='form-control' name='supplierNo' value={this.state.supplierNo} onChange={this.handleInputChange} required placeholder='S0004'/>
                                            {formErrors.supplierNo.length < 5 || formErrors.supplierNo.length > 7 && (
                                                <span style={{ color: 'red' }} className="errorMessage">{formErrors.supplierNo}</span>
                                            )}                                            
                                        </div>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='SiteId'>Name : </label>
                                            <input type='text' className='form-control' name='name' placeholder='Mr.Thilanka' value={this.state.name} onChange={this.handleInputChange} required/>
                                            {formErrors.name.length > 3 && (
                                                <span style={{ color: 'red' }} className="errorMessage">{formErrors.name}</span>
                                            )}                                            
                                        </div>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                    </div>        
                                    <div className='row'>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='RequisitionID'> Phone No : </label>
                                            <input type='number' className='form-control' name='phoneNo' value={this.state.phoneNo} onChange={this.handleInputChange} required placeholder='0715400000'/>
                                            {formErrors.phoneNo < 10 || formErrors.phoneNo > 10 || (
                                                <span style={{ color: 'red' }} className="errorMessage">{formErrors.phoneNo}</span>
                                            )}                                            
                                        </div>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='SiteId'>E-Mail : </label>
                                            <input type='email' className='form-control' name='email' placeholder='thilanka@gmail.com' value={this.state.email} onChange={this.handleInputChange} required/>
                                            {formErrors.email.length > 0 && (
                                                <span style={{ color: 'red', fontWeight: 'bold' }} className="errorMessage">{formErrors.email}</span>
                                            )}                                            
                                        </div>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                    </div>        
                                    <div className='row'>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='RequisitionID'> Address : </label>
                                            <input type='text' className='form-control' name='address' value={this.state.address} onChange={this.handleInputChange} required placeholder='suplier address'
                                            />
                                        </div>
                                        <div className='form-group col-md-5' style={{ marginTop: '15px' }}>
                                            <label htmlFor='SiteId'>Register Date : </label>
                                            <input type='date' className='form-control' name='regDate' placeholder='yyyy/mm/dd' value={this.state.regDate} onChange={this.handleInputChange} required
                                            />
                                        </div>
                                        <div className='form-group col-md-1' style={{ marginTop: '15px' }}/>
                                    </div>        
                                     

                                   
                                    <div className="row submitbtn">
                                        <div class="d-grid gap-2 col-4 mx-auto  ">
                                            
                                            <button type="submit" className="btn btn-primary" onClick={this.onSubmit}><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Add Suplier</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-2 col-lg-2"/>
                    </div>                                  
                </div>
            </div>
        );
    };
};