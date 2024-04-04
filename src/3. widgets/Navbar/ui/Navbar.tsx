import logo from '../../../assets/sprite.png';
import logo1 from '../../../assets/git.png';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to={'https://picasso-diagnostic.ru/patients/'}>
          <img src={logo} alt="logo-main" className="navbar-logo" />
        </Link>
      </div>
      <div>
        <Link to={'https://github.com/ErmakovEv'}>
          <img src={logo1} alt="logo-git" className="navbar-logo" />
        </Link>
      </div>
    </div>
  );
}
