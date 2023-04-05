import React, {useEffect, useRef, useState} from 'react';
import styles from './ConfirmationPage.module.scss';
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {useTelegramBot} from '../../hooks/useTelegramBot';
import Modal from '../../components/Modal/Modal';

const ConfirmationPage = () => {
	const [showModal, setShowModal] = useState(false);
	const [showWarningMessage, setShowWarningMessage] = useState(false);
	const [deliveryTypeChecked, setDeliveryTypeChecked] = useState('');
	const [messageData, setMessageData] = useState({});
	const [total, setTotal] = useState(0);
	const [isDataCorrect, setIsDataCorrect] = useState(false);

	const formRef = useRef();

	const productsInCart = useSelector(state => state.cart.cart);

	const BOT_API_KEY = '6099165848:AAEE8FJY__fg_eVnPUSfwncJnr1XYuT7DTw';
	const BOT_CHAT_ID = '-1001978469999';
	
	useEffect(() => {
		let totalPrice = 0;
		productsInCart.forEach(item => totalPrice += item.quantity * item.price);
		setTotal(totalPrice);
	}, [productsInCart]);

	const onChangeHandler = () => {
		const formData = new FormData(formRef.current);

		const name = formData.get('full-name');
		const phone = formData.get('phone');
		const email = formData.get('email');
		const typeOfDelivery = formData.get('typeOfDelivery');
		const address = formData.get('address');
		const typeOfPayment = formData.get('typeOfPayment');
		const comment = formData.get('comment');

		let data = {};
        
		if(isValidName(name) && isValidPhone(phone) && isValidEmail(email) &&
			!!typeOfPayment && !!typeOfDelivery && !!address){
			setIsDataCorrect(true);
			data = {
				fullName: name,
				phone: phone,
				email: email,
				typeOfPayment: typeOfPayment,
				address: address,
				typeOfDelivery: typeOfDelivery,
				comment: comment,
			};
		} else {
			setIsDataCorrect(false);
		}
		setMessageData(data);
		console.log('is all data correct: ', isDataCorrect);
	};

	const isValidName = (fullName) => {
		return /^([A-ZА-ЯІЇЄ][a-zа-яіїє']*\s){1,3}[A-ZА-ЯІЇЄ][a-zа-яіїє']*$/u.test(fullName.trim());
	};

	const isValidPhone = (phone) => {
		return /^(?:\+38)?0\d{9}$/.test(phone);
	};

	const isValidEmail = (email) => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const confirmFunction = () => {
		if(isDataCorrect) {
			setShowWarningMessage(false);
			setShowModal(true);
			const message = `
		    Order confirmation:
		    Personal info:
		    name: ${messageData.fullName}
		    phone: ${messageData.phone}
		    e-mail: ${messageData.email}
		    	
		    Address and payment:
		    type of payment: ${messageData.typeOfPayment}
		    address: ${messageData.address}
		    type of delivery: ${messageData.typeOfDelivery}
		    	
		    Products: 
		    ${productsInCart.map(item => `name: ${item.name} | id: ${item.id} | quantity: ${item.quantity};`).join('\n			   ')}
		    
		    ${messageData.comment && `Customer comment: \n			   ${messageData.comment}`}`;
			useTelegramBot(BOT_API_KEY, BOT_CHAT_ID, message);
		} else {
			setShowWarningMessage(true);
		}
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
					<form className={styles.infoForm} ref={formRef} onChange={() => onChangeHandler()}>
						<div className={styles.section}>
							<div className={styles.sectionTitle__wrapper}>
								<p className={styles.sectionTitle}>Контактні дані</p>
								<p className={styles.hint}>*Поля, обов&apos;язкові для заповнення</p>
							</div>
							<p>Ім&apos;я отримувача*</p>
							<input type='text' placeholder='Іван Петрович' name="full-name" className={styles.input} required/>
							<p>Телефон*</p>
							<input type='text' placeholder='+380631113344' name="phone" className={styles.input} required/>
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
									{deliveryTypeChecked === 'self pickup' && <input type='text' name='address' className={styles.input}/>}
								</div>
								<div>
									<label><input type="radio" name="typeOfDelivery" value='nova poshta' onClick={
										(e) => setDeliveryTypeChecked(e.target.value)
									}/>
									<span>Нова пошта (до відділення)</span>
									</label>
									{deliveryTypeChecked === 'nova poshta' && <input type='text' name='address' className={styles.input}/>}
								</div>
								<div>
									<label>
										<input type="radio" name="typeOfDelivery" value='courier' onClick={
											(e) => setDeliveryTypeChecked(e.target.value)
										}/>
										<span>Кур&apos;єрська доставка</span>
									</label>
									{deliveryTypeChecked === 'courier' && <input type='text' name='address' className={styles.input}/>}
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
						<textarea className={styles.comment} name='comment' placeholder='Коментар'></textarea>
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
						<button className={styles.confirmButton} onClick={confirmFunction}>Підтвердити</button>
						{showWarningMessage && <p className={styles.warning}>*Введіть правильні дані в форму</p>}
					</div>
				</div>
			</div>
			{showModal && <Modal closeModal={() => setShowModal(false)}/>}
		</div>
	);
};

export default ConfirmationPage;