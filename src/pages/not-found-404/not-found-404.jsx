import React from 'react';

import notFoundStyles from './not-found-404.module.css';

import error404Image2 from '../../images/error-404-2.svg';
import error404Image1 from '../../images/error-404-1.svg';

const NotFound404 = () => {
  return (
    <main className="overflow-page">
      <section className={`${notFoundStyles['error-404']}`}>
        <div className="container">
          <div className={`${notFoundStyles['error-404__row']}`}>
            <div className={`${notFoundStyles['error-404__left']}`}>
              <div className={`${notFoundStyles['error-404__bg']}`}>
                <img src={error404Image2} alt="" width="672" />
              </div>
              <div className={`${notFoundStyles['error-404__title']}`}>
                Страница
                {' '}
                <br />
                {' '}
                не найдена
              </div>
              <div className={`${notFoundStyles['error-404__descr']}`}>
                <div className={`line ${notFoundStyles['error-404__line']}`} />
                К сожалению, запрашиваемая Вами страница не найдена.
                Возможно она была удалена либо ее адрес был изменен.
              </div>
              <a href="/" className="btn btn_gr"><span>Вернуться назад</span></a>
            </div>
            <div className={`${notFoundStyles['error-404__right']}`}>
              <img src={error404Image1} alt="" width="634" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default NotFound404;
