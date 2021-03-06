import React from 'react';

import priceStyles from './price.module.css';

import price3Image from '../../images/price-3.svg';
import data from '../../data/price.json';

const Price = ({ funcB24 }) => {
  return (
    <section className={`${priceStyles.price}`} id="price">
      <div className="container">
        <div className="line line_m10" />
        <div className="h2 h2_bl">Стоимость услуг</div>
        <div className={`${priceStyles.price__row}`}>
          {data?.prices?.map((price) => {
            return (
              <div key={price.id} className={`${priceStyles.price__col}`}>
                <script data-b24-form="click/11/f6bsu0" data-skip-moving="true">
                  {funcB24(window, document, 'https://team.pm52.ru/upload/crm/form/loader_11_f6bsu0.js')}
                </script>
                <a href="#callback-form" className={`${priceStyles['price-item']} magnific-popup`}>
                  <span className={`${priceStyles['price-item__line']}`} />
                  <span className={`${priceStyles['price-item__title']}`} dangerouslySetInnerHTML={{ __html: price.title }} />
                  <span className={`${priceStyles['price-item__descr']}`} dangerouslySetInnerHTML={{ __html: price.description }} />
                  <span className={`${priceStyles['price-item__hover']}`}>
                    <img src={price3Image} alt="" width="12" />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Price;
