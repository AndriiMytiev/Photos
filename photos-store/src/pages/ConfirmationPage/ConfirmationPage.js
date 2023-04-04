import React, {useEffect, useRef, useState} from 'react';
import styles from './ConfirmationPage.module.scss';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const ConfirmationPage = () => {
	const [deliveryTypeChecked, setDeliveryTypeChecked] = useState('');
	const [total, setTotal] = useState(0);

	const formRef = useRef();
	const productsInCart = useSelector(state => state.cart.cart);

	useEffect(() => {
		let totalPrice = 0;
		productsInCart.forEach(item => totalPrice += item.quantity * item.price);
		setTotal(totalPrice);
	}, [productsInCart]);

	const onChangeHandler = (e) => {
		e.preventDefault();
		const formData = new FormData(formRef.current);

		const name = formData.get('full-name');
		console.log(name);
	};

	return (
		<div className={styles.confirmationPage}>
			<div className={styles.confirmationPage__container}>
				<div className={styles.link}>
					<ul>
						<li><NavLink to='/'>Головна</NavLink></li>
						<li className={styles.arrow}>{'>'}</li>
						<li><NavLink to='/confirm'>Оформлення замовлення</NavLink></li>
					</ul>
				</div>
				<h2 className={styles.page_title}>Оформлення замовлення</h2>
				<div className={styles.confirmationPage__container__content}>
					<form className={styles.infoForm} ref={formRef} onChange={(e) => onChangeHandler(e)}>
						<div className={styles.section}>
							<div className={styles.sectionTitle__wrapper}>
								<p className={styles.sectionTitle}>Контактні дані</p>
								<p className={styles.hint}>*Поля, обов&apos;язкові для заповнення</p>
							</div>
							<p>Ім&apos;я отримувача*</p>
							<input type='text' placeholder='Іван Петрович' name="full-name" className={styles.input} required/>
							<p>Телефон*</p>
							<input type='text' placeholder='+38063 111 33 44' name="phone" className={styles.input} required/>
							<p>E-mail</p>
							<input type='text' placeholder='Ivanov444@gmail.com' name="email" className={styles.input}/>
						</div>
						<div className={styles.section}>
							<p className={styles.sectionTitle}>Cпособи доставки</p>
							<div className={styles.inputsContainer}>
								<div>
									<label><input type="radio" name="typeOfDelivery" value='self pickup' onClick={
										(e) => setDeliveryTypeChecked(e.target.value)
									}/>
									<span>Самовивіз із пункту видачі</span>
									</label>
									{deliveryTypeChecked === 'self pickup' && <input type='text' className={styles.input}/>}
								</div>
								<div>
									<label><input type="radio" name="typeOfDelivery" value='nova poshta' onClick={
										(e) => setDeliveryTypeChecked(e.target.value)
									}/>
									<span>Нова пошта (до відділення)</span>
									</label>
									{deliveryTypeChecked === 'nova poshta' && <input type='text' className={styles.input}/>}
								</div>
								<div>
									<label>
										<input type="radio" name="typeOfDelivery" value='courier' onClick={
											(e) => setDeliveryTypeChecked(e.target.value)
										}/>
										<span>Кур&apos;єрська доставка</span>
									</label>
									{deliveryTypeChecked === 'courier' && <input type='text' className={styles.input}/>}
								</div>
							</div>
						</div>
						<div className={styles.section}>
							<p className={styles.sectionTitle}>Способи оплати</p>
							<div className={styles.paymentContainer}>
								<div>
									<label><input type="radio" name="typeOfPayment" value='cash on delivery'/>
										<span>Готівкою при отриманні</span>
									</label>
									<label><input type="radio" name="typeOfPayment" value='card on delivery'/>
										<span>Картою при отриманні</span>
									</label>
									<label><input type="radio" name="typeOfPayment" value='cashless payments'/>
										<span>Безготівковий розрахунок</span>
									</label>
								</div>
								<div>
									<label><input type="radio" name="typeOfPayment" value='credit Alfa Bank'/>
										<span>Кредит Альфа Банк</span>
									</label>
									<label><input type="radio" name="typeOfPayment" value='credit Credit Agricole'/>
										<span>Кредит Credit Agricole</span>
									</label>
									<label><input type="radio" name="typeOfPayment" value='credit UKRSIBBANK'/>
										<span>Кредит УКРСИББАНК</span>
									</label>
								</div>
							</div>
						</div>
						<textarea className={styles.comment} placeholder='Коментар'></textarea>
					</form>

					<div className={styles.prodInCart}>
						<div className={styles.prodInCart__title}>
							<p>Товари в кошику</p>
						</div>
						<div className={styles.prodInCart__order}>
							{productsInCart.map((item) => {
								return (<div key={item.id} className={styles.element}>
									<div className={styles.element__image}>
										<img src={item.image} alt={item.name}/>
									</div>
									<div className={styles.element__name}>
										<h3>{item.name}</h3>
										<p>Код товару: {item.id}</p>
									</div>
									<div className={styles.element__price}>
										{item.quantity > 1
											? <div>
												<p>{item.price * item.quantity} грн.</p>
												<p className={styles.priceAndAmount}>{item.quantity}x{item.price} грн.</p>
											</div>
											: <p>{item.price} грн.</p> }
									</div>
								</div>);
							})}
						</div>
						<div className={styles.prodInCart__total}>
							<p className={styles.priceForDelivery}>
								Доставка - 150 грн.
							</p>
							<p>Сума заказу: {total + 150} грн.</p>
						</div>
						<button className={styles.confirmButton}>Підтвердити</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ConfirmationPage;