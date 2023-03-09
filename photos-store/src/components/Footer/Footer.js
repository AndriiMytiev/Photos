import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.links}>
					<img src="./img/ABCblack.svg"/>
					<p>Інтернет магазин</p>
					<p>0 800 21 21 50</p>
					<p>info@abcphoto.com.ua</p>
				</div>
				<div className={styles.links}>
					<h4>Інформація</h4>
					<p>Про компанію</p>
					<p>Мапа Сайту</p>
					<p>Публічна Оферта</p>
				</div>
				<div className={styles.links}>
					<h4>Покупцям</h4>
					<p>Кредит</p>
					<p>Доставка та оплата</p>
					<p>Сервіс та гарантії</p>
				</div>
				<div className={styles.links}>
					<h4>Звязатися з нами</h4>
					<p>Контакти</p>
					<p>Магазини</p>
				</div>
				<div className={styles.links__input}>
					<h4>Підписатися на річну підписку</h4>
					<div className={styles.circle}><img src='./img/arrow.svg'/></div>
					<input type='text' placeholder='E-mail'></input>
					<p>Ми в соцмережах</p>
					<img className={styles.firstImg} src='./img/instagram.svg'/>
					<img className={styles.secondImg} src='./img/facebook.svg'/>
				</div>
				<hr></hr>
			</div>
			
		</div>
	);
};

export default Footer;