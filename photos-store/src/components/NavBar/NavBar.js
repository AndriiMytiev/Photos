import React from 'react';
import styles from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
	return (
		<div className={styles.NavBar}>
			<div className={styles.NavBar__container}>
				<NavLink to='one'>Цифрова техніка</NavLink>
				<NavLink to='two'>Оптика на фото</NavLink>
				<NavLink to='three'>Аксесуари</NavLink>
				<NavLink to='four'>Чохли</NavLink>
				<NavLink to='five'>Студійне обладнання</NavLink>
				<NavLink to='six'>Штативи</NavLink>
				<NavLink to='seven'>Фотоальбоми</NavLink>
				<NavLink to='eight'>Фотокартки</NavLink>
			</div>
		</div>
	);
};

export default NavBar;