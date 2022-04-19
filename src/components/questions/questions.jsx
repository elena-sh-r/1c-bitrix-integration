import React from 'react';

import questionsStyles from './questions.module.css';

import questions3Image from '../../images/questions-3.svg';

const Questions = () => {

  return (
    <section className={`${questionsStyles['questions']}`} id='questions'>
      <div className={`container`}>
        <div className={`${questionsStyles['questions__row']}`}>
          <div className={`${questionsStyles['questions__left']}`}>
            <div className={`line line_m19`}></div>
            <div className={`h2 h2_wh`}>Часто задаваемые <br /> вопросы:</div>
            <div className={`${questionsStyles['questions__container']}`}>
              <div className={`${questionsStyles['questions-item']}`}>
                <div className={`${questionsStyles['questions-item__title']}`}>Сколько стоят ваши услуги?</div>
                <div className={`${questionsStyles['questions-item__answer']}`}>
                  Наш склад может наклеить штрихкоды на ваши товары самостоятельно
                </div>
              </div>
              <div className={`${questionsStyles['questions-item']}`}>
                <div className={`${questionsStyles['questions-item__title']}`}>За какие услуги необходимо доплачивать отдельно?</div>
                <div className={`${questionsStyles['questions-item__answer']}`}>
                  Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации системы обучения кадров, соответствует насущным
                </div>
              </div>
              <div className={`${questionsStyles['questions-item']}`}>
                <div className={`${questionsStyles['questions-item__title']}`}>У нас нет штрих-кодов/маркировки. Что делать?</div>
                <div className={`${questionsStyles['questions-item__answer']}`}>
                  Наш склад может наклеить штрихкоды на ваши товары самостоятельно
                </div>
              </div>
              <div className={`${questionsStyles['questions-item']}`}>
                <div className={`${questionsStyles['questions-item__title']}`}>Какое минимальное количество поставки?</div>
                <div className={`${questionsStyles['questions-item__answer']}`}>
                  Наш склад может наклеить штрихкоды на ваши товары самостоятельно
                </div>
              </div>
            </div>
            <div className={`${questionsStyles['questions__center']}`}>
              <a href='#callback-form' className={`btn btn_gr magnific-popup`}><span>Задать свой вопрос</span></a>
            </div>
          </div>
          <div className={`${questionsStyles['questions__right']}`}>
            <img src={questions3Image} alt='' width='567' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;