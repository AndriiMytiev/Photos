import React, { useState, useEffect } from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';
import { NavLink } from 'react-router-dom';
import styles from './ProductPageItem.module.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
// eslint-disable-next-line react/prop-types
const ProductPageItem = ({product}) => {
    
	const dispatch = useDispatch();

	const [item, setItem] = useState({});

	useEffect(() => {
		(async function () {
			let productsArray = [];
			const querySnapshot = await getDocs(collection(db, '/products/XfSXvNolwQEFWrfo1V46/cameras'));
			querySnapshot.forEach((doc) => {
				productsArray.push(doc.data());
			});
			productsArray = productsArray.filter((item) => item.id === +product);
			setItem(productsArray[0]);
		})();
	}, []);


	return (
		<div className={styles.Section}>
			<div className={styles.camerasPage__link}>
				<ul>
					<li><NavLink to='/'>Головна</NavLink></li>
					<li className={styles.arrow}>{'>'}</li>
					<li><NavLink to='/'>Цифрова техніка</NavLink></li>
					<li className={styles.arrow}>{'>'}</li>
					<li><NavLink to='cameras'>Фотопарати</NavLink></li>
					<li className={styles.arrow}>{'>'}</li>
					<li><NavLink to={'/cameras/' +  item.id}>{item.name}</NavLink></li>
				</ul>
			</div>
			<div className={styles.NameItem}>
				<h1>{item.name}</h1>	
				<p>Код товару: {item.id}</p>	
			</div>
			<div className={styles.PageItem}>
				<div className={styles.PageItem__container}>
					<div className={styles.ItemImg}>
						<img src={item.image}/>
					</div>
					<div className={styles.ItemText}>
						<p className={styles.hasIn} style={{color: item.available ? '#51AD33' : '#C2CDDD'}}>
							{item.available ? 'в наявності' : 'нема в наявності'}
						</p>
						<h2>{item.price} грн</h2>
						<img src='../img/Cart.svg'/>
						{item.available && <button className={styles.BuyBut} onClick={() => dispatch(addToCart(item))} >Купити </button>}
						<div className={styles.PropositionItem}>
							<div className={styles.Buy}>
								<div className={styles.BuyUl}>
									<p>Доставка</p>
									<ul>
										<li>Доставка по всій Україні</li>
										<li>Оплата товара при отриманні</li>
										<li>Можливий самовивіз</li>
									</ul>
								</div>
							</div>
							<div className={styles.Credit}>
								<div className={styles.CreditUl}>
									<p>Гарантія</p>
									<ul>
										<li>Офіційна 24 місяці</li>
										<li>Від виробника</li>
									</ul>
									<NavLink to='/'>Умови доставки та оплати</NavLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.ButtonCont}>
				<button>Опис</button>
				<button>Характеристики</button>
				<button>Аксесуари</button>
			</div>
		</div>
	);
};

export default ProductPageItem;