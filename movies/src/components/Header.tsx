

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
            <button className="signup-btn">Sign Up</button>
        </div>
        </header>
    );
    }
