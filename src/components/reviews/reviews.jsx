import React from 'react';

import reviewsStyles from './reviews.module.css';

import data from '../../data/reviews.json';

const Reviews = () => {
  return (
    <section className={`${reviewsStyles.reviews}`} id="reviews">
      <div className={`container ${reviewsStyles.reviews__index}`}>
        <div className="line line_m19" />
        <div className="h2 h2_bl">
          Отзывы
          {' '}
          <br />
          {' '}
          клиентов:
        </div>
      </div>
      <div className={`container ${reviewsStyles.reviews__container}`}>
        <div className={`swiper-btn swiper-prev ${reviewsStyles['reviews__slider-btn']} ${reviewsStyles['reviews__slider-prev']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM2 9H1V7h1v2z" fill="#232430" /></svg></div>
        <div className={`swiper-btn swiper-next ${reviewsStyles['reviews__slider-btn']} ${reviewsStyles['reviews__slider-next']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 010 1.414l-6.364 6.364A1 1 0 01.93 13.657L6.586 8 .929 2.343A1 1 0 012.343.93l6.364 6.364zM7 7h1v2H7V7z" fill="#232430" /></svg></div>
        <div className={`${reviewsStyles.reviews__overflow}`}>
          <div className={'swiper-container reviews__slider\']}'}>
            <div className="swiper-wrapper">
              {data?.reviews?.map((review) => {
                return (
                  <div key={review.id} className="swiper-slide">
                    <div className={`${reviewsStyles['reviews-item']}`}>
                      <div className={`${reviewsStyles['reviews-item__date']}`} dangerouslySetInnerHTML={{ __html: review.date }} />
                      <div className={`${reviewsStyles['reviews-item__image']}`}>
                        <img src={(!review.image?.startsWith('http') ? process.env.PUBLIC_URL : '') + review.image} alt={review.title} />
                      </div>
                      <div className={`${reviewsStyles['reviews-item__title']}`}>
                        {review.title}
                      </div>
                      <div className={`${reviewsStyles['reviews-item__descr']}`}>
                        {review.description}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
