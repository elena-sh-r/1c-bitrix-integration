import React from 'react';
import { Link } from 'react-router-dom';

import headerStyles from './header.module.css';

import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={`${headerStyles['header']}`}>
      <div className={`${headerStyles['container']}`}>
        <div className={`${headerStyles['header__row']}`}>
          <div className={`${headerStyles['header__group']}`}>
            <Link to='/'  className={`${headerStyles['header__logo']}`}>
              <img src={logo} alt="" width="79px" />
            </Link>
            <div className={`${headerStyles['hamburger']} ${headerStyles['hamburger--squeeze']} ${headerStyles['header__hamburger']}`}>
              <div className={`${headerStyles['hamburger-box']}`}>
                <div className={`${headerStyles['hamburger-inner']}`}></div>
              </div>
            </div>
          </div>
          <div className={`${headerStyles['header-menu']}`}>
            <div className={`${headerStyles['header-menu__container']}`}>
              <ul className={`${headerStyles['header-menu__list']}`}>
                <li><a href="#anchor-1">С кем работаем</a></li>
                <li><a href="#anchor-2">Для кого</a></li>
                <li><a href="#anchor-3">Услуги</a></li>
                <li><a href="#anchor-4">Схема работы</a></li>
                <li><a href="#anchor-5">Цены</a></li>
                <li><a href="#anchor-6">Команда</a></li>
                <li><a href="#anchor-7">Отзывы</a></li>
                <li><a href="#anchor-8">FAQ</a></li>
              </ul>
            </div>
          </div>
          <a href="tel:8800787447" className={`${headerStyles['header__phone']}`}>8 800 787 447</a>
        </div>
      </div>
    </header>
  );
}

export default Header;