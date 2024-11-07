import "./NavBar.css"
import React from "react"
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux'

let NavBar = () => {
  const state = useSelector(state => state.handleCart)
  return (
    <header>
     
     <div class="main-navbar shadow-sm sticky-top">
        <div class="top-navbar">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <h5 class="brand-name">SoftBenz Task</h5>
                    </div>
                    <div class="col-md-5 my-auto">
                        <form role="search">
                            <div class="input-group">
                                <input type="search" placeholder="Search your product" class="form-control" />

                                <button class="btn bg-white" type="submit">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-5 my-auto">
                        <ul class="nav justify-content-end">
                          <NavLink to="/cart">
                            
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <i class="fa fa-shopping-cart"></i> Cart  ({state.length})
                                </a>
                            </li></NavLink>
                           

                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">

                <a class="navbar-brand d-block d-sm-block d-md-none d-lg-none" href="#">
                    SoftBenz
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
              
            </div>

        </nav>
    </div>


       
          

     
    </header>
  )
}
export default NavBar