import React from 'react';

import footerStyles from './footer.module.css';

import logo2Image from '../../images/logo-2.svg';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className={`${footerStyles['footer']}`}>
      <div className={`container`}>
        <div className={`${footerStyles['footer__row']}`}>
          <a href='/' className={`${footerStyles['footer__logo']}`}>
            <img src={logo2Image} alt='' width='79' />
          </a>
          <ul className={`${footerStyles['footer__menu']}`}>
            <li><HashLink smooth to={'/#partners'}>С кем работаем</HashLink></li>
            <li><HashLink smooth to={'/#for-whom'}>Для кого</HashLink></li>
            <li><HashLink smooth to={'/#services'}>Услуги</HashLink></li>
            <li><HashLink smooth to={'/#how-we-work'}>Схема работы</HashLink></li>
            <li><HashLink smooth to={'/#price'}>Цены</HashLink></li>
            <li><HashLink smooth to={'/#our-team'}>Команда</HashLink></li>
            {/* <li><HashLink smooth to={'/#reviews'}>Отзывы</HashLink></li> */}
            <li><HashLink smooth to={'/#questions'}>FAQ</HashLink></li>
          </ul>
          <div className={`${footerStyles['footer__group']}`}>
            <a href='tel:8800787447' className={`${footerStyles['footer__phone']}`}>8 800 787 447</a>
            <a href='mailto:entersales@order.ru' className={`${footerStyles['footer__email']}`}>entersales@order.ru</a>
          </div>
        </div>
      </div>
      <div className={`${footerStyles['footer__bottom']}`}>
        <div className={`container`}>
          <div className={`${footerStyles['footer__row']} ${footerStyles['footer__row_ai']}`}>
            <div className={`${footerStyles['footer__copyright']}`}>2022© EnterSales.ru - Продажа на маркетплейсах под ключ</div>
            <a href='#' className={`${footerStyles['footer__policy']}`}>Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;