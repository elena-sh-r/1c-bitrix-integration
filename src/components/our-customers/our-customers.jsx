import React from 'react';

import ourCustomersStyles from './our-customers.module.css';

import data from '../../data/customers.json';

const OurCustomers = () => {
  return (
    <section className={`${ourCustomersStyles['our-customers']}`}>
      <div className={`container ${ourCustomersStyles['our-customers__index']}`}>
        <div className="line line_m19" />
        <div className="h2 h2_bl">
          Наши
          {' '}
          <br />
          клиенты:
        </div>
      </div>
      <div className={`${ourCustomersStyles['our-customers__bg']}`}>
        <div className={`container ${ourCustomersStyles['our-customers__bg-container']}`}>
          <div className={`swiper-btn swiper-prev ${ourCustomersStyles['our-customers__slider-btn']} ${ourCustomersStyles['our-customers__slider-prev']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM2 9H1V7h1v2z" fill="#232430" /></svg></div>
          <div className={`swiper-btn swiper-next ${ourCustomersStyles['our-customers__slider-btn']} ${ourCustomersStyles['our-customers__slider-next']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 010 1.414l-6.364 6.364A1 1 0 01.93 13.657L6.586 8 .929 2.343A1 1 0 012.343.93l6.364 6.364zM7 7h1v2H7V7z" fill="#232430" /></svg></div>
          <div className={`${ourCustomersStyles['our-customers__bg-overflow']}`}>
            <div className={`swiper-container ${ourCustomersStyles['our-customers__slider']}`}>
              <div className="swiper-wrapper">
                {data?.customers?.map((customer) => {
                  return (
                    <div key={customer.id} className="swiper-slide">
                      <div className={`${ourCustomersStyles['our-customers__item']}`}>
                        <img src={(!customer.image?.startsWith('http') ? process.env.PUBLIC_URL : '') + customer.image} alt={customer.title} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
