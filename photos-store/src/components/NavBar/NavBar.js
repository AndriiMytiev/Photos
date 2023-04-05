import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
	return (
		<div className={styles.NavBar}>
			<div className={styles.NavBar__container}>
				<NavLink to='/'>Цифрова техніка</NavLink>
				<NavLink to='/'>Оптика на фото</NavLink>
				<NavLink to='/'>Аксесуари</NavLink>
				<NavLink to='/'>Чохли</NavLink>
				<NavLink to='/'>Студійне обладнання</NavLink>
				<NavLink to='/'>Штативи</NavLink>
				<NavLink to='cameras'>Фотоапарати</NavLink>
				<NavLink to='/'>Фотокартки</NavLink>
			</div>
		</div>
	);
};

export default NavBar;