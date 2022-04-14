import React from 'react';

import footerStyles from './footer.module.css';

import logo2Image from '../../images/logo-2.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={`${footerStyles['footer']}`}>
      <div className={`${footerStyles['container']}`}>
        <div className={`${footerStyles['footer__row']}`}>
          <a href="/" className={`${footerStyles['footer__logo']}`}>
            <img src={logo2Image} alt="" width="79" />
          </a>
          <ul className={`${footerStyles['footer__menu']}`}>
            <li><a href="#anchor-1">С кем работаем</a></li>
            <li><a href="#anchor-2">Для кого</a></li>
            <li><a href="#anchor-3">Услуги</a></li>
            <li><a href="#anchor-4">Схема работы</a></li>
            <li><a href="#anchor-5">Цены</a></li>
            <li><a href="#anchor-6">Команда</a></li>
            <li><a href="#anchor-7">Отзывы</a></li>
            <li><a href="#anchor-8">FAQ</a></li>
          </ul>
          <div className={`${footerStyles['footer__group']}`}>
            <a href="tel:8800787447" className={`${footerStyles['footer__phone']}`}>8 800 787 447</a>
            <a href="mailto:entersales@order.ru" className={`${footerStyles['footer__email']}`}>entersales@order.ru</a>
          </div>
        </div>
      </div>
      <div className={`${footerStyles['footer__bottom']}`}>
        <div className={`${footerStyles['container']}`}>
          <div className={`${footerStyles['footer__row']} ${footerStyles['footer__row_ai']}`}>
            <div className={`${footerStyles['footer__copyright']}`}>2022© EnterSales.ru - Продажа на маркетплейсах под ключ</div>
            <Link href="#" className={`${footerStyles['footer__policy']}`}>Политика конфиденциальности</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;