import React from 'react';

import inlineFormStyles from './inline-form.module.css';

import inlineForm1Image from '../../images/inline-form-1.svg';

const InlineForm = () => {

  return (
    <section className={`${inlineFormStyles['inline-form']}`}>
				<div className={`container ${inlineFormStyles['inline-form__container']}`}>
					<div className={`line line_m10`}></div>
					<div className={`h2 h2_bl`}>Остались вопросы?</div>
					<div className={`${inlineFormStyles['inline-form__descr']}`}>
						С радостью ответим на все возникшие вопросы и проведем бесплатную консультацию!
					</div>
					<img src={inlineForm1Image} alt='' width='506' className={`${inlineFormStyles['inline-form__img']}`} />
				</div>
			</section>
  );
}

export default InlineForm;