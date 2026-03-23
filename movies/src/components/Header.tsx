import Sign_up from "../Sign_up";
import { Link } from "react-router-dom";

    export default function Header() {
    return (
        <header className="header">
        <div className="header-container">


            <h1 className="logo">Movie</h1>

            <nav className="nav">
            <a href="/">Home</a>
            <a href="/Movies">Movies</a>
            <a href="#">TV Shows</a>
            </nav>

            {/* Button */}
            <div className="auth-buttons">
                <Link to="/signup/1">
                    <button className="signup-btn">Sign Up</button>
                </Link>
                <Link to='/login/1'>
                    <button className="login-btn">Login</button>
                </Link>
            </div>
        </div>
        </header>
    );
    }
