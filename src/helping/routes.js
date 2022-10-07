import HomePage from "../components/pages/Home/HomePage";
import Products from "../components/pages/Products/Products";
import Login from "../components/pages/Login/Login";
import Register from "../components/pages/Register/Register";

import SingleProduct from "../components/pages/SingleProduct/SingleProduct";
import { Navigate } from "react-router-dom";

export const Routes = [
    {
        path: 'homePage',
        title: 'HOME PAGE',
        element: <HomePage/>,
    },
    {
        path: 'products',
        title: 'PRODUCTS',
        element: <Products />,
        // children: [
        //     {
        //         path: ':s',
        //         element: <Products />
        //     },
        // ]
    },
    {
        path: 'products/product/:id',
        title: '',
        element: <SingleProduct />,
    },
    {
        path: 'login',
        title: 'Login',
        element: <Login />,
    },
    {
        path: 'register',
        title: 'Register',
        element: <Register />,
    },
    {
        path: '*',
        element: <Navigate to='homePage'/>,
    },
    
];