import React from 'react';
import styles from './Info.module.scss';

const Info = () => {
	return (
		<div className={styles.info}>
			<div className={styles.info__container}>
				<div className={styles.circle}>
					<img src="./img/Lupa.svg" />
				</div>
				<img src='ABC.svg'/>
				<input type='text' placeholder='Наприклад: Canon 400D'></input>
				<select>
					<option>0 (800) 21 21 500 Київ</option>
					<option>0 (800) 75 75 231 Дніпро</option>
				</select>
			</div>
			<div className={styles.info__cart}>
				
				<div className={styles.circle}><img src='./img/Cart.svg' /></div>
				<p>Корзина</p>
			</div>
		</div>
	);
};

export default Info;