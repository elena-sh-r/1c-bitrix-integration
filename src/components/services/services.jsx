import React from 'react';

// import servicesStyles from './services.module.css';

import services3Image from '../../images/services-3.svg';
import services4Image from '../../images/services-4.svg';
import services5Image from '../../images/services-5.svg';
import services6Image from '../../images/services-6.svg';
import services7Image from '../../images/services-6.svg';
import services8Image from '../../images/services-6.svg';
import services9Image from '../../images/services-9.svg';

const Services = () => {

  return (
    <section className={`services`} id='services'>
				<div className={`container services__container`}>
					<div className={`line line_m10`}></div>
					<div className={`h2 h2_wh`}>Наши услуги:</div>
					<div className={`services__row`}>
						<div className={`services__col`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services3Image} alt='' width='70' className={`services__item-image`} />
								</div>
								<div className={`services__item-right`}>Регистрация и <br /> настройка</div>
							</div>
						</div>
						<div className={`services__col services__col_middle`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services4Image} alt='' width='60' />
								</div>
								<div className={`services__item-right`}>Подготовка товара к <br /> реализации</div>
							</div>
						</div>
						<div className={`services__col`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services5Image} alt='' width='66' />
								</div>
								<div className={`services__item-right`}>Маркетинговая поддержка<br /> и продвижение</div>
							</div>
						</div>
						<div className={`services__col`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services6Image} alt='' width='66' />
								</div>
								<div className={`services__item-right`}>Анализ товара и <br /> составление стратегии</div>
							</div>
						</div>
						<div className={`services__col services__col_middle`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services7Image} alt='' width='66' />
								</div>
								<div className={`services__item-right`}>Помощь в <br /> формировании отгрузки</div>
							</div>
						</div>
						<div className={`services__col`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services8Image} alt='' width='66' />
								</div>
								<div className={`services__item-right`}>Аналитика и <br /> корректировка стратегии</div>
							</div>
						</div>
						<div className={`services__col`}>
							<div className={`services__item`}>
								<div className={`services__item-left`}>
									<img src={services9Image} alt='' width='66' />
								</div>
								<div className={`services__item-right`}>Персональная<br /> клиентская поддержка</div>
							</div>
						</div>
					</div>
					<a href='#callback-form' className={`btn btn_gr magnific-popup`}><span>узнать больше</span></a>
				</div>
			</section>
  );
}

export default Services;