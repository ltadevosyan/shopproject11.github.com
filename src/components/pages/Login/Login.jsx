/*import React from 'react';
import "./Login.module.css";

const Login = () => {
    return(
        <div className="login">Login</div>
    )
}
export default Login;*/

import {useState} from "react";

const Login  = ({title, handleClick}) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
        return (
            <div>
                <input
                    type="email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    placeholder= "Enter your E-mail"
                />
                <input
                    type="password"
                    value={pass}
                    onChange={(e)=> setPass(e.target.value)}
                    placeholder= "Enter your Password"
                />
                <button onClick={() => handleClick(email,pass)}>
                    {title}
                </button>
            </div>
        )
}
export { Login }