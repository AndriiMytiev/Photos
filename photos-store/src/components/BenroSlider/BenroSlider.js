import React from 'react';
import Slider from 'react-slick';
import styles from './BenroSlider.module.scss';
import './slick.css';
import './slick.theme.css';


export default  function BenroSlider()  {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};
	return (
		<Slider {...settings}>
			<div className={styles.benro}>
				<div className={styles.benroText}>
					<img src='./img/BenroText.svg'/>
				</div>
				<img src='./img/Benro.svg'/>
			</div>
			<div className={styles.benro}>
				<div className={styles.benroText}>
					<img src='./img/BenroText.svg'/>
				</div>
				<img src='./img/Benro.svg'/>
			</div>
			<div className={styles.benro}>
				<div className={styles.benroText}>
					<img src='./img/BenroText.svg'/>
				</div>
				<img src='./img/Benro.svg'/>
			</div>
			<div className={styles.benro}>
				<div className={styles.benroText}>
					<img src='./img/BenroText.svg'/>
				</div>
				<img src='./img/Benro.svg'/>
			</div>
			<div className={styles.benro}>
				<div className={styles.benroText}>
					<img src='./img/BenroText.svg'/>
				</div>
				<img src='./img/Benro.svg'/>
			</div>
		</Slider>
	);
}
