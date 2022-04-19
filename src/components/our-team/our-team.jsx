import React from 'react';

import ourTeamStyles from './our-team.module.css';

import ourTeam1Image from '../../images/our-team-1.svg';
import ourTeam2Image from '../../images/our-team-2.svg';
import ourTeam3Image from '../../images/our-team-3.svg';
import ourTeam4Image from '../../images/our-team-4.svg';
import ourTeam5Image from '../../images/our-team-5.svg';
import ourTeam6Image from '../../images/our-team-6.svg';

const OurTeam = () => {

  return (
    <section className={`${ourTeamStyles['our-team']}`} id='our-team'>
      <div className={`container`}>
        <div className={`${ourTeamStyles['our-team__row']} ${ourTeamStyles['our-team__row_main']}`}>
          <div className={`${ourTeamStyles['our-team__left']}`}>
            <div className={`line line_m19`}></div>
            <div className={`h2 h2_bl`}>Наша <br /> команда:</div>
            <div className={`${ourTeamStyles['our-team__descr']}`}>
              В нашей команде собраны лучшие специалисты своей области.
            </div>
          </div>
          <div className={`${ourTeamStyles['our-team__right']}`}>
            <div className={`${ourTeamStyles['our-team__row']} ${ourTeamStyles['our-team__row_inner']}`}>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_left']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_o']}`}>
                    <img src={ourTeam1Image} alt='' width='78' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Менеджер проектов</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Менеджер, координирующий работу всей команды.</div>
                  </div>
                </div>
              </div>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_middle']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_tw']}`}>
                    <img src={ourTeam2Image} alt='' width='82' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Персональный аккаунт-менеджер</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Управляет аккаунтом клиента на маркетплейсах (настройка личного кабинета, управление ассортиментом)</div>
                  </div>
                </div>
              </div>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_right']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_t']}`}>
                    <img src={ourTeam3Image} alt='' width='77' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Контент-менеджер</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Пишет продающие тексты для карточек товаров.</div>
                  </div>
                </div>
              </div>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_left']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_fr']}`}>
                    <img src={ourTeam4Image} alt='' width='91' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Контент-оптимизатор</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Занимается оптимизацией текстов карточек товаров - SEO контент для товаров.</div>
                  </div>
                </div>
              </div>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_middle']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_f']}`}>
                    <img src={ourTeam5Image} alt='' width='87' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Аналитик</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Ведет детальную аналитику продаж и создает отчеты по проекту.</div>
                  </div>
                </div>
              </div>
              <div className={`${ourTeamStyles['our-team__col']} ${ourTeamStyles['our-team__col_right']}`}>
                <div className={`${ourTeamStyles['our-team-item']}`}>
                  <div className={`${ourTeamStyles['our-team-item__icon']} ${ourTeamStyles['our-team-item__icon_s']}`}>
                    <img src={ourTeam6Image} alt='' width='73' />
                  </div>
                  <div className={`${ourTeamStyles['our-team-item__text']}`}>
                    <div className={`${ourTeamStyles['our-team-item__title']}`}>Специалист по рекламе</div>
                    <div className={`${ourTeamStyles['our-team-item__descr']}`}>Создает и ведет рекламные кампании клиента (Повышение отзывов, PPC, AMS, Coupon Sale и другое).</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;