import React from 'react';

import offerStyles from './offer.module.css';

import offer1Image from '../../images/offer-1.svg';

const Offer = ({ funcB24 }) => {
  return (
    <section className={`${offerStyles.offer}`}>
      <div className={`container ${offerStyles.offer__container}`}>
        <div className={`${offerStyles.offer__content}`}>
          <div className={`${offerStyles.offer__title}`}>
            Продажи на маркетплейсах под ключ
          </div>
          <div className={`${offerStyles.offer__descr}`}>
            <div className={`line ${offerStyles['offer__descr-line']}`} />
            Подключим вас к крупнейшим маркетплейсам России и СНГ с многомиллионной аудиторией,
            организуем размещение товаров на маркетплейсах, их продвижение и продажи.
          </div>
          <div className={`${offerStyles.offer__info}`}>
            <div className={`${offerStyles['offer__info-left']}`}>
              <div className={`${offerStyles['offer__info-title']} ${offerStyles['offer__info-title_purple']}`}>МЫ</div>
              Берём на себя выход на маркетплейсы и всю рутину
            </div>
            <div className={`${offerStyles['offer__info-right']}`}>
              <div className={`${offerStyles['offer__info-title']} ${offerStyles['offer__info-title_pink']}`}>ВЫ</div>
              Регулярно получаете и увеличиваете прибыль от продаж
            </div>
          </div>
          <script data-b24-form="click/11/f6bsu0" data-skip-moving="true">
            {funcB24(window, document, 'https://team.pm52.ru/upload/crm/form/loader_11_f6bsu0.js')}
          </script>
          <a href="#callback-form" className={`btn btn_gr ${offerStyles.offer__btn} magnific-popup`}><span>Оставить заявку</span></a>
        </div>
        <img src={offer1Image} alt="" width="736" className={`${offerStyles.offer__image}`} />
      </div>
    </section>
  );
};

export default Offer;
