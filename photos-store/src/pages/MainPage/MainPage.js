import React from 'react';
import styles from './MainPage.module.scss';
import BenroSlider from '../../components/BenroSlider/BenroSlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import FeaturesSlider from '../../components/FeaturesSlider/FeaturesSlider';

const MainPage = () => {
	return (
		<div className={styles.mainPage}>
			<BenroSlider />
			<div className={styles.mainPage__container}>
				<ProductSlider />
				<FeaturesSlider />
			</div>
		</div>
	);
};

export default MainPage;