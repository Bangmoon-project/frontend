import React from 'react';
import styles from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Nav = () => {
  const navigate = useNavigate();

  // login 페이지로 이동
  const handleLogin = () => {
    const token = Cookies.get('token');
    console.log('nav token:', token);
    navigate('/login');
  };
  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>
        <li>HOME</li>
        <li>RANKING</li>
        <li onClick={handleLogin}>
          <div className={`${styles.login}`}>
            <span className={`${styles.text}`}>LOGIN</span>
          </div>
        </li>
        <li className={`${styles.write}`}>WRITE</li>
      </ul>
    </nav>
  );
};

export default Nav;
