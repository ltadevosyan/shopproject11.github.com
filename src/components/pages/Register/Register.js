/*const Register = ()=>{
    return(
        <>Register</>
    )
}
export default Register;*/

import {Form} from "../Login/Form";
import {useNavigate} from "react-router-dom";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../../hooks/slices/userSlice";
import {useDispatch} from "react-redux";

const SignUp = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleRegister = (email, password) => {
        const auth = getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth,email, password)
            .then(({user}) =>{
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                }));
                navigate("/homePage")
            })
            .catch(console.error)
    };
    return (
        <Form
            title = 'Register'
            handleClick={handleRegister}
        />
    )
}
export default SignUp

