import { Link } from 'react-router-dom';
import './components.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar_left_sec">
        <div className="navbar_logo">
          <Link to="/">Home</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/uslugi">Uslugi</Link>
            </li>
            <li>
              <Link to="/kontakti">Kontakti</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar_right_sec">Right section</div>
    </div >
  )
}

export default Navbar