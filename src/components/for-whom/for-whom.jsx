import React from 'react';

import forWhomStyles from './for-whom.module.css';

import forWhom1Image from '../../images/for-whom-1.svg';
import forWhom2Image from '../../images/for-whom-2.svg';

const ForWhom = () => {
  return (
    <section className={`${forWhomStyles['for-whom']}`} id="for-whom">
      <div className="container">
        <div className="line line_m10" />
        <div className="h2 h2_bl">Для кого подходит?</div>
        <div className={`${forWhomStyles['for-whom__left']}`}>
          <div className={`${forWhomStyles['for-whom__left-image']}`}>
            <img src={forWhom1Image} alt="" width="446" />
          </div>
          <div className={`${forWhomStyles['for-whom__left-content']}`}>
            <div className={`${forWhomStyles['for-whom__subtitle']}`}>Для производителей</div>
            <div className={`${forWhomStyles['for-whom__descr']}`}>Расширим каналы сбыта, увеличим продажи. Мы берем на себя продажи на маркетплесах, а вы сосредоточитесь на производстве.</div>
          </div>
        </div>
        <div className={`${forWhomStyles['for-whom__right']}`}>
          <div className={`${forWhomStyles['for-whom__right-content']}`}>
            <div className={`${forWhomStyles['for-whom__subtitle']}`}>Для интернет-магазинов</div>
            <div className={`${forWhomStyles['for-whom__descr']}`}>Доступ к многомиллионной аудитории потенциальных покупателей ваших товаров кратчайшие сроки.</div>
          </div>
          <div className={`${forWhomStyles['for-whom__right-image']}`}>
            <img src={forWhom2Image} alt="" width="467" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
