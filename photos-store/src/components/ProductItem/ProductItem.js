import React, {useState} from 'react';
import styles from './ProductItem.module.scss';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cartSlice';

// eslint-disable-next-line react/prop-types
const ProductItem = ({item}) => {
	const [mouseDown, setMouseDown] = useState(false);

	const dispatch = useDispatch();

	return (
		<div className={styles.prodItem}
			onMouseEnter={() => setMouseDown(true)}
			onMouseLeave={() => setMouseDown(false)}
		>
			<div className={styles.prodItem__Img}>
				<img src={item.image} alt={item.name}/>
			</div>
			<div className={styles.prodItem__Text}>
				<h3>{item.name}</h3>
				<div className={styles.price}>
					<h2>{item.price} грн</h2>
					<p className={styles.hasIn} style={{color: item.available ? '#51AD33' : '#C2CDDD'}}>
						{item.available ? 'в наявності' : 'нема в наявності'}
					</p>
					{item.available &&
						<img
							src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/cart_icon.svg?alt=media&token=c29e736a-a56d-46aa-8136-16fad022f0b7'
							onClick={() => dispatch(addToCart(item))}
							className={styles.cartIcon}
							alt='cart-icon'
						/>
					}
				</div>
			</div>
			<div className={styles.descriptCont}>
				{mouseDown && <p>{item.description}</p>}
			</div>
		</div>
	);
};

ProductItem.propTypes = {
	item: PropTypes.shape({
		image: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		available: PropTypes.bool.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};

export default ProductItem;
