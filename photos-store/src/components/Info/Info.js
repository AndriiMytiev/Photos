import React, {useEffect, useState} from 'react';
import styles from './Info.module.scss';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Info = () => {
	const [amount, setAmount] = useState(0);
	const productsInCart = useSelector(state => state.cart.cart);
	useEffect(() => {
		let temp = 0;
		productsInCart.forEach(item => temp += item.quantity);
		setAmount(temp);
	}, [productsInCart]);
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
				<NavLink to={'/cart'}>
					<div className={styles.circle}><img src='./img/Cart.svg' />
						{amount > 0 && <div className={styles.amount}>{amount}</div>}
					</div>
					<p>Корзина</p>
				</NavLink>
			</div>
		</div>
	);
};

export default Info;