import Sign_up from "../Sign_up";
import { Link } from "react-router-dom";
const user = localStorage.getItem("user");


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
                    {user ? (
                        <>
                            <Link to="/profile">
                                <button className="signup-btn">Profile</button>
                            </Link>

                            <button
                                className="login-btn"
                                onClick={() => {
                                    localStorage.removeItem("user");
                                    window.location.reload(); // quick refresh
                                }}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/signup/1">
                                <button className="signup-btn">Sign Up</button>
                            </Link>

                            <Link to="/login/1">
                                <button className="login-btn">Login</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
