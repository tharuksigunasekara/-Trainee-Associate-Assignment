import { useEffect, useState } from 'react';
import axios from 'axios';



const Dashboard = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get('http://localhost/php-react/dashboard.php');
        setUser(result.data.records);
    }

    return (
        <div className="container">
            <div className="row">
                <h1 className='rowHead'>
                welcome to dashboard
                </h1>
            </div>
            <div className="row">
                <h1 className='heading'>
                User List
                </h1>
            </div>
            <div className="row">
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map(user => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.full_name}</td>
                                <td>{user.user_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Dashboard;