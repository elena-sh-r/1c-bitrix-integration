import React from 'react';

import homeStyles from './home.module.css';

import partners1Image from '../../images/partners-1.png';
import partners2Image from '../../images/partners-2.png';
import partners3Image from '../../images/partners-3.png';
import forWhom1Image from '../../images/for-whom-1.svg';
import forWhom2Image from '../../images/for-whom-2.svg';
import services3Image from '../../images/services-3.svg';
import services4Image from '../../images/services-4.svg';
import services5Image from '../../images/services-5.svg';
import services6Image from '../../images/services-6.svg';
import services7Image from '../../images/services-6.svg';
import services8Image from '../../images/services-6.svg';
import services9Image from '../../images/services-9.svg';
import inlineForm1Image from '../../images/inline-form-1.svg';
import howWeWork1Image from '../../images/how-we-work-1.svg';
import howWeWork2Image from '../../images/how-we-work-2.svg';
import howWeWork3Image from '../../images/how-we-work-3.svg';
import howWeWork4Image from '../../images/how-we-work-4.svg';
import howWeWork5Image from '../../images/how-we-work-5.svg';
import howWeWork6Image from '../../images/how-we-work-6.svg';
import howWeWork7Image from '../../images/how-we-work-7.svg';
import howWeWork8Image from '../../images/how-we-work-8.svg';
import price3Image from '../../images/price-3.svg';
import ourTeam1Image from '../../images/our-team-1.svg';
import ourTeam2Image from '../../images/our-team-2.svg';
import ourTeam3Image from '../../images/our-team-3.svg';
import ourTeam4Image from '../../images/our-team-4.svg';
import ourTeam5Image from '../../images/our-team-5.svg';
import ourTeam6Image from '../../images/our-team-6.svg';
import ourCustomers1Image from '../../images/our-customers-1.png';
import ourCustomers2Image from '../../images/our-customers-2.png';
import ourCustomers3Image from '../../images/our-customers-3.png';
import ourCustomers4Image from '../../images/our-customers-4.png';
import ourCustomers5Image from '../../images/our-customers-5.png';
import reviews1Image from '../../images/reviews-1.png';
import reviews2Image from '../../images/reviews-2.png';
import questions3Image from '../../images/questions-3.svg';

import Offer from '../../components/offer/offer';

const Home = () => {

  return (
    <main className={`${homeStyles['overflow-page']}`}>
			<Offer />
			<section className={`${homeStyles['partners']}`} id="partners">
				<div className={`${homeStyles['container']}`}>
					<div className={`${homeStyles['partners__row']} ${homeStyles['partners__row_mb']}`}>
						<div className={`${homeStyles['partners__left']}`}>
							<div className={`${homeStyles['line']} ${homeStyles['line_m19']}`}></div>
							<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']} ${homeStyles['partners__title']}`}>Мы работаем с маркетплейсами:</div>
							<div className={`${homeStyles['partners-result']}`}>
								<div className={`${homeStyles['partners-result__number']}`}> 350 <span>млрд</span></div>
								<div className={`${homeStyles['partners-result__descr']}`}>выручка поставщиков на всех маркетплейсах в 2019 году</div>
							</div>
							<div className={`${homeStyles['partners-result']}`}>
								<div className={`${homeStyles['partners-result__number']}`}> 450 <span>млн</span></div>
								<div className={`${homeStyles['partners-result__descr']}`}>человек в месяц заходит на маркетплейсы</div>
							</div>
						</div>
						<div className={`${homeStyles['partners__right']}`}>
							<div className={`${homeStyles['partners__row']} ${homeStyles['partners__row_m']}`}>
								<div className={`${homeStyles['partners__col']}`}>
									<div className={`${homeStyles['partners__brand']}`}>
										<img src={partners1Image} alt="" />
									</div>
								</div>
								<div className={`${homeStyles['partners__col']}`}>
									<div className={`${homeStyles['partners__brand']}`}>
										<img src={partners2Image} alt="" />
									</div>
								</div>
								<div className={`${homeStyles['partners__col']}`}>
									<div className={`${homeStyles['partners__brand']}`}>
										<img src={partners3Image} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={`${homeStyles['for-whom']}`} id="for-whom">
				<div className={`${homeStyles['container']}`}>
					<div className={`${homeStyles['line']} ${homeStyles['line_m10']}`}></div>
					<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Для кого подходит?</div>
					<div className={`${homeStyles['for-whom__left']}`}>
						<div className={`${homeStyles['for-whom__left-image']}`}>
							<img src={forWhom1Image} alt="" width="446" />
						</div>
						<div className={`${homeStyles['for-whom__left-content']}`}>
							<div className={`${homeStyles['for-whom__subtitle']}`}>Для производителей</div>
							<div className={`${homeStyles['for-whom__descr']}`}>Расширим каналы сбыта, увеличим продажи. Мы берем на себя продажи на маркетплесах, а вы сосредоточитесь на производстве.</div>
						</div>
					</div>
					<div className={`${homeStyles['for-whom__right']}`}>
						<div className={`${homeStyles['for-whom__right-content']}`}>
							<div className={`${homeStyles['for-whom__subtitle']}`}>Для интернет-магазинов</div>
							<div className={`${homeStyles['for-whom__descr']}`}>Доступ к многомиллионной аудитории потенциальных покупателей ваших товаров кратчайшие сроки.</div>
						</div>
						<div className={`${homeStyles['for-whom__right-image']}`}>
							<img src={forWhom2Image} alt="" width="467" />
						</div>
					</div>
				</div>
			</section>
			<section className={`${homeStyles['services']}`} id="services">
				<div className={`${homeStyles['container']} ${homeStyles['services__container']}`}>
					<div className={`${homeStyles['line']} ${homeStyles['line_m10']}`}></div>
					<div className={`${homeStyles['h2']} ${homeStyles['h2_wh']}`}>Наши услуги:</div>
					<div className={`${homeStyles['services__row']}`}>
						<div className={`${homeStyles['services__col']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services3Image} alt="" width="70" className={`${homeStyles['services__item-image']}`} />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Регистрация и <br /> настройка</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']} ${homeStyles['services__col_middle']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services4Image} alt="" width="60" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Подготовка товара к <br /> реализации</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services5Image} alt="" width="66" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Маркетинговая поддержка<br /> и продвижение</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services6Image} alt="" width="66" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Анализ товара и <br /> составление стратегии</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']} ${homeStyles['services__col_middle']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services7Image} alt="" width="66" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Помощь в <br /> формировании отгрузки</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services8Image} alt="" width="66" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Аналитика и <br /> корректировка стратегии</div>
							</div>
						</div>
						<div className={`${homeStyles['services__col']}`}>
							<div className={`${homeStyles['services__item']}`}>
								<div className={`${homeStyles['services__item-left']}`}>
									<img src={services9Image} alt="" width="66" />
								</div>
								<div className={`${homeStyles['services__item-right']}`}>Персональная<br /> клиентская поддержка</div>
							</div>
						</div>
					</div>
					<a href="#callback-form" className={`${homeStyles['btn']} ${homeStyles['btn_gr']} ${homeStyles['magnific-popup']}`}><span>узнать больше</span></a>
				</div>
			</section>
			<section className={`${homeStyles['inline-form']}`}>
				<div className={`${homeStyles['container']} ${homeStyles['inline-form__container']}`}>
					<div className={`${homeStyles['line']} ${homeStyles['line_m10']}`}></div>
					<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Остались вопросы?</div>
					<div className={`${homeStyles['inline-form__descr']}`}>
						С радостью ответим на все возникшие вопросы и проведем бесплатную консультацию!
					</div>
					<img src={inlineForm1Image} alt="" width="506" className={`${homeStyles['inline-form__img']}`} />
				</div>
			</section>
			<section className={`${homeStyles['how-we-work']}`} id="how-we-work">
				<div className={`${homeStyles['container']}`}>
					<div className={`${homeStyles['line']} ${homeStyles['line_m10']}`}></div>
					<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Как мы работаем?</div>
					<div className={`${homeStyles['how-we-work__row']}`}>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>01</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork1Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Получаем бриф</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Создаем для вас стратегию<br /> <a href="#callback-form" className={`${homeStyles['magnific-popup']}`}>Подробнее</a></div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>02</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork2Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Заключаем договор</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Обсуждаем детали, ассортимент, ценообразование, заключаем договор.</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>03</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork3Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Регистрация на маркетплейсах</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Поможем с подготовкой документации и регистрацией на маркетплейсах.</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>04</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork4Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Подготовим к продажам</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Подготавливаем контент и опубликуем его на маркетплейсах.</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>05</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork5Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Первые заказы</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Помогаем с размещением и продижением товарров на площадках.</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>06</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork6Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Отчетность и аналитика</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Анализ ниши и конкурентов, ценовая аналитика, стратегия ценообразования, ежемесячный отчет</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item']}`}>
								<div className={`${homeStyles['how-we-work-item__number']}`}>07</div>
								<div className={`${homeStyles['how-we-work-item__icon']}`}>
									<img src={howWeWork7Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item__title']}`}>Развиваем продажи</div>
								<div className={`${homeStyles['how-we-work-item__descr']}`}>Комплексно развиваем продажи и ваших товаров на выбранных площадках.</div>
							</div>
						</div>
						<div className={`${homeStyles['how-we-work__col']}`}>
							<div className={`${homeStyles['how-we-work-item-gradient']}`}>
								<div className={`${homeStyles['how-we-work-item-gradient__icon']}`}>
									<img src={howWeWork8Image} alt="" width="49" />
								</div>
								<div className={`${homeStyles['how-we-work-item-gradient__title']}`}>Готовы к сотрудничеству?</div>
								<div className={`${homeStyles['how-we-work-item-gradient__descr']}`}>С радостью Вас проконсультируем!</div>
								<a href="#callback-form" className={`${homeStyles['btn']} ${homeStyles['btn_wh']} ${homeStyles['magnific-popup']}`}>оставить заявку</a>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className={`${homeStyles['price']}`} id="price">
				<div className={`${homeStyles['container']}`}>
					<div className={`${homeStyles['line']} ${homeStyles['line_m10']}`}></div>
					<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Стоимость услуг</div>
					<div className={`${homeStyles['price__row']}`}>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Комплексное сопровождение <br />(Wb, Ozon, Market)</span>
								<span className={`${homeStyles['price-item__descr']}`}>
									<span>3 %</span> от оборота на площадках (минимальная оплата <span>35000 руб.</span> в месяц)
								</span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Реклама и продвижение внутри площадок</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>10 %</span> от бюджета в месяц, но не менее <span>35000 руб.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Создание фото для 1 товара (собственная фото студия)</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>50 руб./шт.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Обработка 1 фото</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>150 руб./шт.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Текст/характеристик на 1 <br /> карточку</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>150	руб./шт.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Оформление бренд-зоны</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>10000 руб./мп.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Создание спецификаций <br /> товаров</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>100 руб./шт.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Написание обзоров на WB</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>	10000 руб. за обзор</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
						<div className={`${homeStyles['price__col']}`}>
							<a href="#callback-form" className={`${homeStyles['price-item']} ${homeStyles['magnific-popup']}`}>
								<span className={`${homeStyles['price-item__line']}`}></span>
								<span className={`${homeStyles['price-item__title']}`}>Рекламные посты в <br /> медиа-ресурсах</span>
								<span className={`${homeStyles['price-item__descr']}`}><span>5000 от руб./шт.</span></span>
								<span className={`${homeStyles['price-item__hover']}`}>
									<img src={price3Image} alt="" width="12" />
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
			<div className={`${homeStyles['section-overflow']}`}>
				<section className={`${homeStyles['our-team']}`} id="our-team">
					<div className={`${homeStyles['container']}`}>
						<div className={`${homeStyles['our-team__row']} ${homeStyles['our-team__row_main']}`}>
							<div className={`${homeStyles['our-team__left']}`}>
								<div className={`${homeStyles['line']} ${homeStyles['line_m19']}`}></div>
								<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Наша <br /> команда:</div>
								<div className={`${homeStyles['our-team__descr']}`}>
									В нашей команде собраны лучшие специалисты своей области.
								</div>
							</div>
							<div className={`${homeStyles['our-team__right']}`}>
								<div className={`${homeStyles['our-team__row']} ${homeStyles['our-team__row_inner']}`}>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_left']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_o']}`}>
												<img src={ourTeam1Image} alt="" width="78" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Менеджер проектов</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Менеджер, координирующий работу всей команды.</div>
											</div>
										</div>
									</div>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_middle']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_tw']}`}>
												<img src={ourTeam2Image} alt="" width="82" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Персональный аккаунт-менеджер</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Управляет аккаунтом клиента на маркетплейсах (настройка личного кабинета, управление ассортиментом)</div>
											</div>
										</div>
									</div>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_right']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_t']}`}>
												<img src={ourTeam3Image} alt="" width="77" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Контент-менеджер</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Пишет продающие тексты для карточек товаров.</div>
											</div>
										</div>
									</div>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_left']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_fr']}`}>
												<img src={ourTeam4Image} alt="" width="91" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Контент-оптимизатор</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Занимается оптимизацией текстов карточек товаров - SEO контент для товаров.</div>
											</div>
										</div>
									</div>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_middle']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_f']}`}>
												<img src={ourTeam5Image} alt="" width="87" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Аналитик</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Ведет детальную аналитику продаж и создает отчеты по проекту.</div>
											</div>
										</div>
									</div>
									<div className={`${homeStyles['our-team__col']} ${homeStyles['our-team__col_right']}`}>
										<div className={`${homeStyles['our-team-item']}`}>
											<div className={`${homeStyles['our-team-item__icon']} ${homeStyles['our-team-item__icon_s']}`}>
												<img src={ourTeam6Image} alt="" width="73" />
											</div>
											<div className={`${homeStyles['our-team-item__text']}`}>
												<div className={`${homeStyles['our-team-item__title']}`}>Специалист по рекламе</div>
												<div className={`${homeStyles['our-team-item__descr']}`}>Создает и ведет рекламные кампании клиента (Повышение отзывов, PPC, AMS, Coupon Sale и другое).</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${homeStyles['our-customers']}`}>
					<div className={`${homeStyles['container']} ${homeStyles['our-customers__index']}`}>
						<div className={`${homeStyles['line']} ${homeStyles['line_m19']}`}></div>
						<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Наши <br />клиенты:</div>
					</div>
					<div className={`${homeStyles['our-customers__bg']}`}>
						<div className={`${homeStyles['container']} ${homeStyles['our-customers__bg-container']}`}>
							<div className={`${homeStyles['swiper-btn']} ${homeStyles['swiper-prev']} ${homeStyles['our-customers__slider-btn']} ${homeStyles['our-customers__slider-prev']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM2 9H1V7h1v2z" fill="#232430"/></svg></div>
							<div className={`${homeStyles['swiper-btn']} ${homeStyles['swiper-next']} ${homeStyles['our-customers__slider-btn']} ${homeStyles['our-customers__slider-next']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 010 1.414l-6.364 6.364A1 1 0 01.93 13.657L6.586 8 .929 2.343A1 1 0 012.343.93l6.364 6.364zM7 7h1v2H7V7z" fill="#232430"/></svg></div>
							<div className={`${homeStyles['our-customers__bg-overflow']}`}>
								<div className={`${homeStyles['swiper-container']} ${homeStyles['our-customers__slider']}`}>
									<div className={`${homeStyles['swiper-wrapper']}`}>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers1Image} alt="" />
											</div>
										</div>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers2Image} alt="" />
											</div>
										</div>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers3Image} alt="" />
											</div>
										</div>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers4Image} alt="" />
											</div>
										</div>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers5Image} alt="" />
											</div>
										</div>
										<div className={`${homeStyles['swiper-slide']}`}>
											<div className={`${homeStyles['our-customers__item']}`}>
												<img src={ourCustomers1Image} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${homeStyles['reviews']}`} id="reviews">
					<div className={`${homeStyles['container']} ${homeStyles['reviews__index']}`}>
						<div className={`${homeStyles['line']} ${homeStyles['line_m19']}`}></div>
						<div className={`${homeStyles['h2']} ${homeStyles['h2_bl']}`}>Отзывы <br /> клиентов:</div>
					</div>
					<div className={`${homeStyles['container']} ${homeStyles['reviews__container']}`}>
						<div className={`${homeStyles['swiper-btn']} ${homeStyles['swiper-prev']} ${homeStyles['reviews__slider-btn']} ${homeStyles['reviews__slider-prev']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.293 8.707a1 1 0 010-1.414L6.657.929A1 1 0 018.07 2.343L2.414 8l5.657 5.657a1 1 0 11-1.414 1.414L.293 8.707zM2 9H1V7h1v2z" fill="#232430"/></svg></div>
						<div className={`${homeStyles['swiper-btn']} ${homeStyles['swiper-next']} ${homeStyles['reviews__slider-btn']} ${homeStyles['reviews__slider-next']}`}><svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 010 1.414l-6.364 6.364A1 1 0 01.93 13.657L6.586 8 .929 2.343A1 1 0 012.343.93l6.364 6.364zM7 7h1v2H7V7z" fill="#232430"/></svg></div>
						<div className={`${homeStyles['reviews__overflow']}`}>
							<div className={`${homeStyles['swiper-container']} ${homeStyles['reviews__slider']}`}>
								<div className={`${homeStyles['swiper-wrapper']}`}>
									<div className={`${homeStyles['swiper-slide']}`}>
										<div className={`${homeStyles['reviews-item']}`}>
											<div className={`${homeStyles['reviews-item__date']}`}>
												<span>15</span>
												Ноября
											</div>
											<div className={`${homeStyles['reviews-item__image']}`}>
												<img src={reviews1Image} alt="" />
											</div>
											<div className={`${homeStyles['reviews-item__title']}`}>
												Спасибо команде EnterSales за успешные продажи в 2020 году
											</div>
											<div className={`${homeStyles['reviews-item__descr']}`}>
												Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. Товарищи! начало повседневной работы по формированию позиции позволяет выполнять важные задания по разработке новых предложений.
											</div>
										</div>
									</div>
									<div className={`${homeStyles['swiper-slide']}`}>
										<div className={`${homeStyles['reviews-item']}`}>
											<div className={`${homeStyles['reviews-item__date']}`}>
												<span>27</span>
												Августа
											</div>
											<div className={`${homeStyles['reviews-item__image']}`}>
												<img src={reviews2Image} alt="" />
											</div>
											<div className={`${homeStyles['reviews-item__title']}`}>
												После обращение в компанию EnterSales наши продажи выросли почти на 40%
											</div>
											<div className={`${homeStyles['reviews-item__descr']}`}>
												Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям.
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className={`${homeStyles['questions']}`} id="questions">
					<div className={`${homeStyles['container']}`}>
						<div className={`${homeStyles['questions__row']}`}>
							<div className={`${homeStyles['questions__left']}`}>
								<div className={`${homeStyles['line']} ${homeStyles['line_m19']}`}></div>
								<div className={`${homeStyles['h2']} ${homeStyles['h2_wh']}`}>Часто задаваемые <br /> вопросы:</div>
								<div className={`${homeStyles['questions__container']}`}>
									<div className={`${homeStyles['questions-item']}`}>
										<div className={`${homeStyles['questions-item__title']}`}>Сколько стоят ваши услуги?</div>
										<div className={`${homeStyles['questions-item__answer']}`}>
											Наш склад может наклеить штрихкоды на ваши товары самостоятельно
										</div>
									</div>
									<div className={`${homeStyles['questions-item']}`}>
										<div className={`${homeStyles['questions-item__title']}`}>За какие услуги необходимо доплачивать отдельно?</div>
										<div className={`${homeStyles['questions-item__answer']}`}>
											Повседневная практика показывает, что сложившаяся структура организации способствует подготовки и реализации системы обучения кадров, соответствует насущным
										</div>
									</div>
									<div className={`${homeStyles['questions-item']}`}>
										<div className={`${homeStyles['questions-item__title']}`}>У нас нет штрих-кодов/маркировки. Что делать?</div>
										<div className={`${homeStyles['questions-item__answer']}`}>
											Наш склад может наклеить штрихкоды на ваши товары самостоятельно
										</div>
									</div>
									<div className={`${homeStyles['questions-item']}`}>
										<div className={`${homeStyles['questions-item__title']}`}>Какое минимальное количество поставки?</div>
										<div className={`${homeStyles['questions-item__answer']}`}>
											Наш склад может наклеить штрихкоды на ваши товары самостоятельно
										</div>
									</div>
								</div>
								<div className={`${homeStyles['questions__center']}`}>
									<a href="#callback-form" className={`${homeStyles['btn']} ${homeStyles['btn_gr']} ${homeStyles['magnific-popup']}`}><span>Задать свой вопрос</span></a>
								</div>
							</div>
							<div className={`${homeStyles['questions__right']}`}>
								<img src={questions3Image} alt="" width="567" />
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
  );
}

export default Home;