import React from 'react';

import howWeWorkStyles from './how-we-work.module.css';

import howWeWork8Image from '../../images/how-we-work-8.svg';

import data from '../../data/how-we-work.json';

const HowWeWork = ({ funcB24 }) => {
  return (
    <section className={`${howWeWorkStyles['how-we-work']}`} id="how-we-work">
      <div className="container">
        <div className="line line_m10" />
        <div className="h2 h2_bl">Как мы работаем?</div>
        <div className={`${howWeWorkStyles['how-we-work__row']}`}>
          {data?.howWeWork?.map((step) => {
            return (
              <div key={step.id} className={`${howWeWorkStyles['how-we-work__col']}`}>
                <div className={`${howWeWorkStyles['how-we-work-item']}`}>
                  <div className={`${howWeWorkStyles['how-we-work-item__number']}`}>{`${step.id < 9 && '0'}${step.id}`}</div>
                  <div className={`${howWeWorkStyles['how-we-work-item__icon']}`}>
                    <img src={(!step.image?.startsWith('http') ? process.env.PUBLIC_URL : '') + step.image} alt={step.title} width="49" />
                  </div>
                  <div className={`${howWeWorkStyles['how-we-work-item__title']}`}>{step.title}</div>
                  <div className={`${howWeWorkStyles['how-we-work-item__descr']}`}>
                    {step.description}
                    {step.more && (
                    <script data-b24-form="click/11/f6bsu0" data-skip-moving="true">
                      {funcB24(window, document, 'https://team.pm52.ru/upload/crm/form/loader_11_f6bsu0.js')}
                    </script>
                    )}
                    {step.more && <a href={step.more} className="magnific-popup">Подробнее</a>}
                  </div>
                </div>
              </div>
            );
          })}

          <div className={`${howWeWorkStyles['how-we-work__col']}`}>
            <div className={`${howWeWorkStyles['how-we-work-item-gradient']}`}>
              <div className={`${howWeWorkStyles['how-we-work-item-gradient__icon']}`}>
                <img src={howWeWork8Image} alt="" width="49" />
              </div>
              <div className={`${howWeWorkStyles['how-we-work-item-gradient__title']}`}>Готовы к сотрудничеству?</div>
              <div className={`${howWeWorkStyles['how-we-work-item-gradient__descr']}`}>С радостью Вас проконсультируем!</div>
              <script data-b24-form="click/11/f6bsu0" data-skip-moving="true">
                {funcB24(window, document, 'https://team.pm52.ru/upload/crm/form/loader_11_f6bsu0.js')}
              </script>
              <a href="#callback-form" className="btn btn_wh magnific-popup">оставить заявку</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
