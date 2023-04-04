import ProductItem from '../ProductItem/ProductItem';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import styles from './ProductSlider.module.scss';
import './slick.css';
import './slick.theme.css';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

export default  function ProductSlider()  {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async function () {
			const productsArray = [];
			const querySnapshot = await getDocs(collection(db, '/products/XfSXvNolwQEFWrfo1V46/cameras'));
			querySnapshot.forEach((doc) => {
				productsArray.push(doc.data());
			});
			setProducts(productsArray.sort((a, b) => a.id > b.id ? 1 : -1));
		})();
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	return (
		<div className={styles.ProductSlider}>
			<Slider {...settings}>
				{products.map((item) => (
					<ProductItem key={item.id} item={item} />
				))}
			</Slider>
		</div>
	);
}
