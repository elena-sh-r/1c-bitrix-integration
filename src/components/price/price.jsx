import React from 'react';

import priceStyles from './price.module.css';

import price3Image from '../../images/price-3.svg';
import data from '../../data/price.json';

const Price = () => {

  return (
    <section className={`${priceStyles['price']}`} id='price'>
				<div className={`container`}>
					<div className={`line line_m10`}></div>
					<div className={`h2 h2_bl`}>Стоимость услуг</div>
					<div className={`${priceStyles['price__row']}`}>
						{data?.prices?.map((price, idx) => <div key={idx} className={`${priceStyles['price__col']}`}>
								<a href='#callback-form' className={`${priceStyles['price-item']} magnific-popup`}>
									<span className={`${priceStyles['price-item__line']}`}></span>
									<span className={`${priceStyles['price-item__title']}`} dangerouslySetInnerHTML={{__html: price.title}}></span>
									<span className={`${priceStyles['price-item__descr']}`} dangerouslySetInnerHTML={{__html: price.description}}></span>
									<span className={`${priceStyles['price-item__hover']}`}>
										<img src={price3Image} alt='' width='12' />
									</span>
								</a>
							</div>
						)}
					</div>
				</div>
			</section>
  );
}

export default Price;