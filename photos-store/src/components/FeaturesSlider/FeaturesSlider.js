import React from 'react';
import styles from './FeaturesSlider.module.scss';

const FeaturesSlider = () => {

	//const Menu = () => {
	// const [sliderImages, setSliderImages] = React.useState([])   
	// 	const showPrevImage = () => {
	// 	const images = [...sliderImages]
	// 	const lastImage = images[5]
	// 	const newImagesArray = images.pop()  
	// 	newImagesArray.shift(lastImage)
	// 	setSliderImages(newImagesArray)
	// 	}

	// const fotoUrl = {
	// 	firstBack: './img/FeaturesItemOneBackground.png',
	// 	firstCam: './img/OneCam.png',
	// 	firstText: './img/OneCamText.png'
	// };

	return (
		<div className={styles.FeaturesContainer}>
			<div className={styles.FeaturesItems}>
				<div className={styles.FeaturesItemOne}>
					<img src='./img/FeaturesItemOneBackground.png'/>
					<div className={styles.buttonCont}>
						<button className={styles.prev}>←</button>
						<button className={styles.next}>→</button>
					</div>
					<img className={styles.OneCam} src='./img/OneCam.png'/>
					<img className={styles.OneCamText} src='./img/OneCamText.png'/>
					<p className={styles.OneTextName}>Canon EOS 5D Mark IV kit 24-70 f/4L IS USM</p>
					<p className={styles.OnePrice}>118 161<p className={styles.currency}>грн</p></p>
					<p className={styles.TwoPrice}>77 299<p className={styles.TwoCurrency}>грн</p></p>
				</div>
				<div className={styles.FeaturesItemTwo}>
					<img src='./img/FeaturesItemTwoBackground.png'/>
					<img className={styles.TwoCam} src='./img/TwoCam.png' />
					<div className={styles.sale}>
						<p>СКИДКА 10%</p>
					</div>
					<div className={styles.TwoPrice}>
						<p className={styles.TwoPriceText}>1 120<p className={styles.TwoPriceCurrency}>грн</p></p>
						<p className={styles.TwoPriceName}>Benro DJ-80</p>
					</div>
				</div>
				<div className={styles.FeaturesItemThree}>
					<img src='./img/FeaturesItemThreeBackground.png'/>
					<img className={styles.ThreeCam}  src='./img/ThreeCam.png'/>
					<img className={styles.ThreeSale} src='./img/ThreeSale.png' />
					<img className={styles.ThreePercent} src='./img/ThreePercent.png' />
					<img className={styles.ThreeText} src='./img/ThreeText.png' />
				</div>
				<div className={styles.FeaturesItemFour}>
					<img src='./img/FeaturesItemFourBackground.png'/>
					<img className={styles.FourImg} src='./img/FourImg.png' />
					<div className={styles.FourName}>
						<p>Фотопапір</p>
						<p>Canon KP-108IN </p>
					</div>
					<div className={styles.FourPrices}>
						<p>1 028 грн</p>
						<p>908 грн</p>
					</div>
				</div>
				<div className={styles.FeaturesItemFive}>
					<img src='./img/FeaturesItemFiveBackground.png'/>
					<img className={styles.FiveCam} src='./img/FiveCam.png' />
					<div className={styles.FiveName}>
						<p>Обєктив</p>
						<p>Nikon 50mmf</p>
						<p>1.8G AF-S</p>
					</div>
					<div className={styles.FivePrices}>
						<p>4 982 грн</p>
						<p>4 758 грн </p>
					</div>
				</div>
				<div className={styles.FeaturesItemSix}>
					<img src='./img/FeaturesItemSixBackground.png'/>  
					<img className={styles.SixImg} src='./img/SixImg.png' />
					<div className={styles.SixName}>
						<p>Суперціна</p>
						<p>5 684</p>
						<p className={styles.SixCurrency}>грн</p>
					</div>
				</div>
			</div>
		</div>     
	);
};

export default FeaturesSlider;