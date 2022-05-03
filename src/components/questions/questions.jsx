import React, { useState } from 'react';

import questionsStyles from './questions.module.css';

import data from '../../data/questions.json';

import questions3Image from '../../images/questions-3.svg';

const Questions = ({ funcB24 }) => {
  const [open, setOpen] = useState(null);

  const toggleHandler = (idx) => {
    if(open === idx) {
      return setOpen(null)
    }

    setOpen(idx)
  }

  return (
    <section className={`${questionsStyles['questions']}`} id='questions'>
      <div className={`container`}>
        <div className={`${questionsStyles['questions__row']}`}>
          <div className={`${questionsStyles['questions__left']}`}>
            <div className={`line line_m19`}></div>
            <div className={`h2 h2_wh`}>Часто задаваемые <br /> вопросы:</div>
            <div className={`${questionsStyles['questions__container']}`}>
              {data?.questions?.map((question, idx) => (
                <div key={idx} className={`${questionsStyles['questions-item']}`}>
                  <div className={`${questionsStyles['questions-item__title']} ${open === idx && questionsStyles['questions-item__title_active']}`} onClick={() => toggleHandler(idx)}>
                    {question.question}
                  </div>
                  <div className={`${questionsStyles['questions-item__answer']} ${open === idx && questionsStyles['questions-item__answer_opened']}`}>
                    {question.answer}
                  </div>
                </div>
              ))}
            </div>
            <div className={`${questionsStyles['questions__center']}`}>
              <script data-b24-form="click/11/f6bsu0" data-skip-moving="true">
                {funcB24(window,document,'https://team.pm52.ru/upload/crm/form/loader_11_f6bsu0.js')}
              </script>
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