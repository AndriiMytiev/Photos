import React from 'react';
import styles from './CartItem.module.scss';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {addQuantity, removeQuantity, removeFormCart} from '../../store/cartSlice';

const CartItem = ({item}) => {
	const dispatch = useDispatch();
	return (
		<div className={styles.cartItem}>
			<div className={styles.cartItem__image}>
				<img src={item.image} alt={item.name}/>
			</div>
			<div className={styles.cartItem__name}>
				<h3>{item.name}</h3>
				<p>Код товару: {item.id}</p>
			</div>
			<div className={styles.cartItem__price}>
				<p>{item.price} грн.</p>
			</div>
			<div className={styles.cartItem__quantity}>
				<button onClick={() => dispatch(removeQuantity(item.id))}>-</button>
				<span>{item.quantity}</span>
				<button onClick={() => dispatch(addQuantity(item.id))}>+</button>
			</div>
			<div className={styles.cartItem__final}>
				{item.price * item.quantity} грн.
			</div>
			<div onClick={() => dispatch(removeFormCart(item.id))} className={styles.deleteItem}>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/cross.png?alt=media&token=f78695b8-63ca-4555-8e15-1ee01b991c62'
					alt='cross'
				/>
			</div>
		</div>
	);
};

CartItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired,
	}).isRequired,
};
export default CartItem;