import { Link } from 'react-router-dom';
import './Loading.css';
import logo from '../assets/Resources/Logo.png'


function Loading() {
  return (
    <>
        <div className="banner">
            <div className="container">
                <h1>       
                    <img className="logo" src={logo} alt="logo" /> 
                    Ready-to-Play
                </h1>
                <Link to="/home">
                    <button type="button" className="btn btn-secondary btn-lg"> Let The Rumbling Begin </button>
                </Link>
            </div>
      </div>
    </>
  );
}

export default Loading;
