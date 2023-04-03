import product from '../public/product.json';
import ProductItem from '../ProductItem/ProductItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.scss';
import './slick.css';
import './slick.theme.css';

export default  function ProductSlider()  {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};
	return (
		<div className={styles.ProductSlider}>
			<Slider {...settings}>
				{product.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</Slider>
		</div>
	);
}
