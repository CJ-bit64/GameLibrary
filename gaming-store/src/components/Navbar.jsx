import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">GameHub</Link>
      <div className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/games">Store</Link>
      <Link to="/library">My Library</Link>
      </div>
    </nav>
  );
}

export default Navbar;  