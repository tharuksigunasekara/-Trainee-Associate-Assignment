import {useNavigate} from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <div className="row">
                <h1>Home</h1>
            </div>
            <br/>
            <div>
                <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
                <button className="btn btn-primary" onClick={() => navigate('/register')}>Register</button>
            </div>
        </div>
    )
}

export default Home;