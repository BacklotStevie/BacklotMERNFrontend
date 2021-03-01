import { useState, useContext } from "react";
import { userContext } from "../../context/UserCtx";
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Adduser = () => {

    const { setUser } = useContext(userContext);

    const [username, setUsername] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    })
    const history = useHistory()

    function handleUserChange(event) {
        setUsername({
            ...username,
            [event.target.name]: event.target.value
        })
    }

    function addUserHandler(event) {

        event.preventDefault();
        axios.post(`http://localhost:5000/users/signup`, username)
            .then((res) => {

                setUser(res?.data?.user);
                localStorage.setItem("token", res.data.token);
                history.push("/")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <form onSubmit={addUserHandler} className='signupform mx-auto m-5'>
                    <input className="col-12 m-2" type="text" name="firstname" value={username.firstname} placeholder="First Name" onChange={handleUserChange}></input>
                    <input className="col-12 m-2" type="text" name="lastname" value={username.lastname} placeholder="Last Name" onChange={handleUserChange}></input>
                    <input className="col-12 m-2" type="text" name="email" value={username.email} placeholder="Email" onChange={handleUserChange}></input>
                    <input className="col-12 m-2" type="password" name="password" value={username.password} placeholder="Password" onChange={handleUserChange}></input>


                    <button type="submit">Submit</button>
                    <br /><br />
                    <h3>Already a user?</h3><Link to="/login">Login</Link>
                </form>
            </div>
        </div>

    );
};

export default Adduser;