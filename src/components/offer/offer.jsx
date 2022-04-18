import React from 'react';

import offerStyles from './offer.module.css';

import offer1Image from '../../images/offer-1.svg';

const Offer = () => {

  return (
    <section className={`${offerStyles['offer']}`}>
				<div className={`${offerStyles['container']} ${offerStyles['offer__container']}`}>
					<div className={`${offerStyles['offer__content']}`}>
						<div className={`${offerStyles['offer__title']}`}>
							Продажи на маркетплейсах под ключ
						</div>
						<div className={`${offerStyles['offer__descr']}`}>
							<div className={`${offerStyles['line']} ${offerStyles['offer__descr-line']}`}></div>
							Подключим вас к крупнейшим маркетплейсам России и СНГ с многомиллионной аудиторией, организуем размещение товаров на маркетплейсах, их продвижение и продажи.
						</div>
						<div className={`${offerStyles['offer__info']}`}>
							<div className={`${offerStyles['offer__info-left']}`}>
								<div className={`${offerStyles['offer__info-title']} ${offerStyles['offer__info-title_purple']}`}>МЫ</div>
								Берём на себя выход на маркетплейсы и всю рутину
							</div>
							<div className={`${offerStyles['offer__info-right']}`}>
								<div className={`${offerStyles['offer__info-title']} ${offerStyles['offer__info-title_pink']}`}>ВЫ</div>
								Регулярно получаете и увеличиваете прибыль от продаж
							</div>
						</div>
						<a href="#callback-form" className={`${offerStyles['btn']} ${offerStyles['btn_gr']} ${offerStyles['offer__btn']} ${offerStyles['magnific-popup']}`}><span>Оставить заявку</span></a>
					</div>
					<img src={offer1Image} alt="" width="736" className={`${offerStyles['offer__image']}`} />
				</div>
			</section>
  );
}

export default Offer;