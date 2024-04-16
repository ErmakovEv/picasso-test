import logo1 from '../../../assets/git.png';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../1. app/storeProvider/hooks/redux';

export function Navbar() {
  const { current, total } = useAppSelector((state) => state.postsTotalSlice);

  return (
    <div className="navbar">
      <div></div>
      <div className="navbar-counter">
        Загружено постов <span>{`${total ? current : 0}/${total}`} </span>
      </div>
      <div>
        <Link to={'https://github.com/ErmakovEv'}>
          <img src={logo1} alt="logo-git" className="navbar-logo" />
        </Link>
      </div>
    </div>
  );
}
