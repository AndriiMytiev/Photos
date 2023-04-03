import React from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header__container}>
				<NavLink to='#'>Магазини</NavLink>
				<NavLink to='#'>Кредит</NavLink>
				<NavLink to='#'>Гарантії</NavLink>
				<NavLink to='#'>Компанії</NavLink>
				<NavLink to='#'>Контакти</NavLink>
				<NavLink to='#'>Карта Сайту</NavLink>
			</div>
		</div>
	);
};

export default Header;
