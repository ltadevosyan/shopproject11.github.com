import React from "react";
import { NavLink } from "react-router-dom";

const CartBtn = () => {
    return (
        <>
           <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Cart (0)
            </NavLink> 
        </> 
    )
}
export default CartBtn