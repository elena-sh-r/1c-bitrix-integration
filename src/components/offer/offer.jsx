import React from 'react';

// import offerStyles from './offer.module.css';

import offer1Image from '../../images/offer-1.svg';

const Offer = () => {

  return (
    <section className={`offer`}>
				<div className={`container offer__container`}>
					<div className={`offer__content`}>
						<div className={`offer__title`}>
							Продажи на маркетплейсах под ключ
						</div>
						<div className={`offer__descr`}>
							<div className={`line offer__descr-line`}></div>
							Подключим вас к крупнейшим маркетплейсам России и СНГ с многомиллионной аудиторией, организуем размещение товаров на маркетплейсах, их продвижение и продажи.
						</div>
						<div className={`offer__info`}>
							<div className={`offer__info-left`}>
								<div className={`offer__info-title offer__info-title_purple`}>МЫ</div>
								Берём на себя выход на маркетплейсы и всю рутину
							</div>
							<div className={`offer__info-right`}>
								<div className={`offer__info-title offer__info-title_pink`}>ВЫ</div>
								Регулярно получаете и увеличиваете прибыль от продаж
							</div>
						</div>
						<a href='#callback-form' className={`btn btn_gr offer__btn magnific-popup`}><span>Оставить заявку</span></a>
					</div>
					<img src={offer1Image} alt='' width='736' className={`offer__image`} />
				</div>
			</section>
  );
}

export default Offer;