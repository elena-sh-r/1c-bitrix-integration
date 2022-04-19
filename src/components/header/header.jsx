import React from 'react';
import { Link } from 'react-router-dom';

import headerStyles from './header.module.css';

import logo from '../../images/logo.svg';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <header className={`${headerStyles['header']}`}>
      <div className={`container`}>
        <div className={`${headerStyles['header__row']}`}>
          <div className={`${headerStyles['header__group']}`}>
            <Link to='/'  className={`${headerStyles['header__logo']}`}>
              <img src={logo} alt='' width='79px' />
            </Link>
            <div className={`hamburger hamburger--squeeze ${headerStyles['header__hamburger']}`}>
              <div className={`hamburger-box`}>
                <div className={`hamburger-inner`}></div>
              </div>
            </div>
          </div>
          <div className={`${headerStyles['header-menu']}`}>
            <div className={`${headerStyles['header-menu__container']}`}>
              <ul className={`${headerStyles['header-menu__list']}`}>
                <li><HashLink smooth to={'/#partners'}>С кем работаем</HashLink></li>
                <li><HashLink smooth to={'/#for-whom'}>Для кого</HashLink></li>
                <li><HashLink smooth to={'/#services'}>Услуги</HashLink></li>
                <li><HashLink smooth to={'/#how-we-work'}>Схема работы</HashLink></li>
                <li><HashLink smooth to={'/#price'}>Цены</HashLink></li>
                <li><HashLink smooth to={'/#our-team'}>Команда</HashLink></li>
                <li><HashLink smooth to={'/#reviews'}>Отзывы</HashLink></li>
                <li><HashLink smooth to={'/#questions'}>FAQ</HashLink></li>
              </ul>
            </div>
          </div>
          <a href='tel:8800787447' className={`${headerStyles['header__phone']}`}>8 800 787 447</a>
        </div>
      </div>
    </header>
  );
}

export default Header;