import axios from 'axios';
import { useState, useContext, useEffect } from "react";
import { userContext } from "../../context/UserCtx";
import { useHistory, useLocation } from 'react-router-dom'


const Login = () => {

    const { setUser } = useContext(userContext);
    const history = useHistory()
    const [username, setUsername] = useState({
        email: "",
        password: ""
    });


    function handleUserChange(event) {
        setUsername({
            ...username,
            [event.target.name]: event.target.value
        })
    }

    function loginUserHandler(event) {

        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, username)
            .then((res) => {
                console.log(res)
                setUser(res.data.user);
                localStorage.setItem("user", res.data.token);
                console.log(res.data.token)
                if (res.data.user.userType === "admin") {
                    history.push("/adminpage")
                } else {
                    history.push("/home");
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form onSubmit={loginUserHandler} className="mx-auto m-5">
                    <input className="col-12 m-2" type="text" name="email" value={username.email} placeholder="Email" onChange={handleUserChange}></input>
                    <input className="col-12 m-2" type="password" name="password" value={username.password} placeholder="password" onChange={handleUserChange}></input>


                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;