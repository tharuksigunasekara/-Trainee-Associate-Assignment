import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

const Login = () => {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            email: user.email,
            password: user.password
        }
        console.log(sendData);

        axios.post('http://localhost/php-react/login.php', sendData)
            .then(res => {
                console.log(res);
                if(res.data.status === '200') {
                    alert("SUCCESS");
                    navigate('/dashboard');
                }
                else {
                    alert("Invalid User");
                }
            })
    }

    return (
        <form onSubmit={onSubmit}>
        <div className="main-box">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Login</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control" onChange={handleChange} value={user.email} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password" onChange={handleChange} value={user.password} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">Password</div>
                <div className="col-md-6">
                    <input type="submit" name="submit" className="btn btn-success" />
                </div>
            </div>
        </div>
        </form>
    )
}

export default Login;