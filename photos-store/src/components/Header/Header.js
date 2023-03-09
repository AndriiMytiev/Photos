import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<a href='#'>Магазини</a>
				<a href='#'>Кредит</a>
				<a href='#'>Доставка і оплата</a>
				<a href='#'>Гарантії</a>
				<a href='#'>Компанії</a>
				<a href='#'>Контакти</a>
				<a href='#'>Карта Сайту</a>
			</div>
		</div>
	);
};

export default Header;
