import React from 'react';

// import homeStyles from './home.module.css';

import Offer from '../../components/offer/offer';
import Partners from '../../components/partners/partners';
import ForWhom from '../../components/for-whom/for-whom';
import Services from '../../components/services/services';
import InlineForm from '../../components/inline-form/inline-form';
import HowWeWork from '../../components/how-we-work/how-we-work';
import Price from '../../components/price/price';
import OurTeam from '../../components/our-team/our-team';
import OurCustomers from '../../components/our-customers/our-customers';
import Reviews from '../../components/reviews/reviews';
import Questions from '../../components/questions/questions';

const Home = () => {

  return (
    <main className={`overflow-page`}>
			<Offer />
			<Partners />
			<ForWhom />
			<Services />
			<InlineForm />
			<HowWeWork />
			<Price />
			<div className={`section-overflow`}>
				<OurTeam />
				<OurCustomers />
				<Reviews />
				<Questions />
			</div>
		</main>
  );
}

export default Home;