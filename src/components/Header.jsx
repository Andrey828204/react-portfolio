import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h2>My Portfolio</h2>

      <nav>
        <Link to="/about">Про мене</Link>
        <Link to="/my-city">Моє місто</Link>
        <Link to="/my-future">Моє майбутнє</Link>
      </nav>
    </header>
  );
}

export default Header;