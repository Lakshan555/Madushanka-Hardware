import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import swl from 'sweetalert'
import './estyle.css';


export default class SupplierHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      supplier: [],

    };
  }




  componentDidMount() {
    this.retrieveSupplier();

  }

  retrieveSupplier() {
    axios.get(`http://localhost:4000/supplier`).then(res => {
      if (res.data.success) {
        this.setState({
          supplier: res.data.existingSuppliers
        });
        console.log(this.state.supplier);

      }

    });
  }

  //delete function with confirmation
  onDelete = (id) => {
    swl({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.delete(`http://localhost:4000/supplier/delete/${id}`).then((res) => {

            swl('supplier Deleted successfully', {
              icon: "success",
            });
            this.retrieveSupplier();
          })
        }
      });
  }


  filterData(supplier, searchKey) {
    const result = supplier.filter((supplier) =>
      supplier.supplierNo.toLowerCase().includes(searchKey) ||
      supplier.name.toLowerCase().includes(searchKey) ||
      supplier.email.toLowerCase().includes(searchKey)
    )
    this.setState({ supplier: result })
  }


  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value.toLowerCase();
    axios.get("http://localhost:4000/supplier").then(res => {
      if (res.data.success) {
        this.filterData(res.data.existingSuppliers, searchKey)
      }
    });
  }


  render() {
    return (
      <div className="container containerTop">
        <div className="row">
          <div className="col-12">
            <div className="row rtitle" style={{ marginTop: '100px' }}>
              <div className="col-md-12 col-sm-12 col-lg-12">
                <label htmlFor="suplier">Supplier Details</label>
              </div>
              <div className="col-md-12 col-sm-12 col-lg-12 position-relative text-center">
                <h1 className='display-5 fw-bold'>Supplier Details</h1>
                < ToastContainer />
              </div>
              <hr className="hr" style={{ height: '2px', color: '#0a90e8' }} />
            </div>
            <div className="row">

              <div className="col-2 buttons">
                <Link to="/add_suppliers" type="button" class="btn button_add2"><i class="fal fa-plus-circle"></i>&nbsp;&nbsp;Add Supplier</Link><br /><br />
              </div>
              <div className="col-2 buttons">
                <Link to="/itemHome" type="button" class="btn button_add2"><i class="fal fas fa-clipboard-list"></i>&nbsp;&nbsp;Report</Link><br /><br />
              </div>

              <div className="col-3" />
              <div className="col-3 search position-relative" style={{ marginTop: '20px', marginLeft: "210px" }}>

                <i className="fa fa-search"></i> <input className="form-control" type="Search" placeholder="Search Supplier" name="searchQuery" onChange={this.handleSearchArea} />

              </div>
            </div>
            <div className="shadowBox">
              <div className="row">
                <div className="col-12 ">
                  <table class="table table-hover">
                    <thead className="table-primary">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">SupplierId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    {this.state.supplier.map((supplier, index) => (
                      <tbody>
                        <tr>
                          <th scope="row"><a href="" style={{ textDecoration: 'none', color: '#000' }}></a>{index + 1}</th>
                          <td>{supplier.supplierNo}</td>
                          <td>{supplier.name}</td>
                          <td>{supplier.phoneNo}</td>
                          <td>{supplier.email}</td>
                          <td>{supplier.address}</td>
                          <td>
                            <Link to={`/update_supplier/${supplier._id}`} type="button" class="btn btn-warning" style={{ width: '95px', margin: '2px' }}>
                              <i class="far fa-edit"></i>&nbsp;Edit
                            </Link>&nbsp;&nbsp;
                            <Link to="#" type="button" class="btn btn-danger" onClick={() => this.onDelete(supplier._id)}>
                              <i className="far fa-trash-alt"></i>&nbsp;Remove
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
