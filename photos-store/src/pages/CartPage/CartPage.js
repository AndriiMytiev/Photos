import React, {useEffect, useState} from 'react';
import styles from './CartPage.module.scss';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';

const CartPage = () => {
	const [amount, setAmount] = useState(0);
	const [total, setTotal] = useState(0);

	const productsInCart = useSelector(state => state.cart.cart);
	useEffect(() => {
		let temp = 0;
		let totalPrice = 0;
		productsInCart.forEach(item => totalPrice += item.quantity * item.price);
		productsInCart.forEach(item => temp += item.quantity);
		setAmount(temp);
		setTotal(totalPrice);
	}, [productsInCart]);

	return (
		<div className={styles.cartPage}>
			<div className={styles.cartPage__container}>
				<div className={styles.link}>
					<ul>
						<li><NavLink to='/'>Головна</NavLink></li>
						<li className={styles.arrow}>{'>'}</li>
						<li><NavLink to='cart'>Моя корзина</NavLink></li>
					</ul>
				</div>
				<h2 className={styles.page_title}>Моя корзина</h2>
				<div className={styles.content_title}>
					<p className={styles.content_title__prod}>Товар</p>
					<p className={styles.content_title__price}>Ціна</p>
					<p className={styles.content_title__quantity}>Кількість</p>
					<p className={styles.content_title__all}>Всього</p>
				</div>
				<div className={styles.content}>
					{productsInCart.length > 0
						? productsInCart.map(item => <CartItem key={item.id} item={item}/>)
						: <h1 className={styles.empty}>Корзина порожня</h1>}
				</div>
				<div className={styles.cartPage__container__footer}>
					<NavLink to='/'>
						<p className={styles.continue}>Продовжити покупки</p>
					</NavLink>

					{amount > 0 &&
						<div className={styles.order}>
							<p className={styles.total}>Разом: <span>{amount} товарів</span> на загальну суму</p>
							<p className={styles.total_price}><span>{total}</span> грн</p>
							<NavLink to='/confirm'>
								<p className={styles.issue}>Оформити</p>
							</NavLink>
						</div>}
				</div>
			</div>
		</div>
	);
};

export default CartPage;