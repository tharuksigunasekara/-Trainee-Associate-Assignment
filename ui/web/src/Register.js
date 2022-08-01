import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';



const Register = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        full_name: '',
        user_name: '',
        email: '',
        password: ''
    });
    
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            full_name: data.full_name,
            user_name: data.user_name,
            email: data.email,
            password: data.password
        }
        console.log(sendData);

        axios.post('http://localhost/php-react/insert.php', sendData)
            .then(res => {
                console.log(res);
                if(res.data.status === 'Invalid') {
                    alert("Invalid User");
                }
                else {
                    alert("User Created");
                    navigate('/login');
                }
            })
    }

    return (
        <div className="main-box">
            <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Register</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">Full Name</div>
                <div className="col-md-6">
                    <input type="text" name="full_name" className="form-control" onChange={handleChange} value={data.full_name} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">User Name</div>
                <div className="col-md-6">
                    <input type="text" name="user_name" className="form-control" onChange={handleChange} value={data.user_name} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Email</div>
                <div className="col-md-6">
                    <input type="email" name="email" className="form-control" onChange={handleChange} value={data.email} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">Password</div>
                <div className="col-md-6">
                    <input type="password" name="password"  className="form-control" onChange={handleChange} value={data.password} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    <input type="submit" name="submit" value="Register" className="btn btn-success"/>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Register;