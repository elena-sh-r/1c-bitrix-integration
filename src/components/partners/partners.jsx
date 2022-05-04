import React from 'react';

import partnersStyles from './partners.module.css';

import partners1Image from '../../images/partners-1.png';
import partners2Image from '../../images/partners-2.png';
import partners3Image from '../../images/partners-3.png';

const Partners = () => {
  return (
    <section className={`${partnersStyles.partners}`} id="partners">
      <div className="container">
        <div className={`${partnersStyles.partners__row} ${partnersStyles.partners__row_mb}`}>
          <div className={`${partnersStyles.partners__left}`}>
            <div className="line line_m19" />
            <div className={`h2 h2_bl ${partnersStyles.partners__title}`}>Мы работаем с маркетплейсами:</div>
            <div className={`${partnersStyles['partners-result']}`}>
              <div className={`${partnersStyles['partners-result__number']}`}>
                {' '}
                350
                {' '}
                <span>млрд</span>
              </div>
              <div className={`${partnersStyles['partners-result__descr']}`}>выручка поставщиков на всех маркетплейсах в 2019 году</div>
            </div>
            <div className={`${partnersStyles['partners-result']}`}>
              <div className={`${partnersStyles['partners-result__number']}`}>
                {' '}
                450
                {' '}
                <span>млн</span>
              </div>
              <div className={`${partnersStyles['partners-result__descr']}`}>человек в месяц заходит на маркетплейсы</div>
            </div>
          </div>
          <div className={`${partnersStyles.partners__right}`}>
            <div className={`${partnersStyles.partners__row} ${partnersStyles.partners__row_m}`}>
              <div className={`${partnersStyles.partners__col}`}>
                <div className={`${partnersStyles.partners__brand}`}>
                  <img src={partners1Image} alt="" />
                </div>
              </div>
              <div className={`${partnersStyles.partners__col}`}>
                <div className={`${partnersStyles.partners__brand}`}>
                  <img src={partners2Image} alt="" />
                </div>
              </div>
              <div className={`${partnersStyles.partners__col}`}>
                <div className={`${partnersStyles.partners__brand}`}>
                  <img src={partners3Image} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Partners;
