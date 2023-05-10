import React, { useState } from 'react';
import styles from './Nav.module.css';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  // `!!`는 불리언값으로 반환하기 위한 용도로 사용
  // isLoggedIn의 값이 0, undefined, null, '', NaN, 'false' 가 들어왔을경우 false로 반환하기 위한 용도
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get('token'));

  // 로그아웃 버튼 클릭 시 실행되는 함수
  const handleLogout = () => {
    Cookies.remove('token');
    setIsLoggedIn(false);
  };

  // login 페이지로 이동
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <nav className={`${styles.container} absolute text-white h-full`}>
      {/* ----- MenuContainer ----- */}
      <ul className={`${styles.menuContainer}`}>
        <li>
          <Link to={'/'}>HOME</Link>
        </li>
        <li>RANKING</li>
        {isLoggedIn ? (
          <li onClick={handleLogout}>
            <div className={`${styles.logout}`}>
              <span className={`${styles.text}`}>LOGOUT</span>
            </div>
          </li>
        ) : (
          <li onClick={handleLogin}>
            <div className={`${styles.login}`}>
              <span className={`${styles.text}`}>LOGIN</span>
            </div>
          </li>
        )}
        <li className={`${styles.write}`}>
          <Link to={'/posts'}>WRITE</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
