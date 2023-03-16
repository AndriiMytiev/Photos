import React, {useEffect, useRef, useState} from 'react';
import styles from './CamerasPage.module.scss';
import {NavLink} from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import {db} from '../../firebase';


// const cameras = [
// 	{
// 		id: 1,
// 		name: 'Canon PowerShot G3 (0106C011)',
// 		price: '18 599',
// 		inStock: true,
// 	},
//     {
//         id: 2,
//         name: 'Canon PowerShot G3 (0106C011)',
//         price: '18 599',
//         inStock: true,
//     },
//     {
//         id: 3,
//         name: 'Canon PowerShot G3 (0106C011)',
//         price: '18 599',
//         inStock: true,
//     },
//     {
//         id: 4,
//         name: 'Canon PowerShot G3 (0106C011)',
//         price: '18 599',
//         inStock: true,
//     },
//     {
//         id: 5,
//         name: 'Canon PowerShot G3 (0106C011)',
//         price: '18 599',
//         inStock: true,
//     },
//     {
//         id: 6,
//         name: 'Canon PowerShot G3 (0106C011)',
//         price: '18 599',
//         inStock: true,
//     },
// ];

const CamerasPage = () => {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(50000);
	const [options, setOptions] = useState({});

	const [data, setData] = useState([]);

	const formPriceRef = useRef(null);
	const formOptionsRef = useRef(null);

	const optionsObj = {
		types: {
			mirrors: false,
			compact: false,
			systemic: false,
		},
	};

	useEffect(() => {
		(async function() {
			const productsArray = [];
			const querySnapshot = await getDocs(collection(db, 'covers'));
			querySnapshot.forEach((doc) => {
				// console.log(`${doc.id} => ${doc.data()}`);
				productsArray.push(doc.data());
				console.log(doc.data());
			});
			setData(productsArray);
		})();
	}, []);

	useEffect(() => {
		console.log(minPrice, maxPrice);
	}, [minPrice, maxPrice]);

	useEffect(() => {
		console.log(data);
	}, [data]);


	const submitHandler = (e) => {
		e.preventDefault();
		const formPriceData = new FormData(formPriceRef.current);
		setMinPrice(+formPriceData.get('minPrice'));
		setMaxPrice(+formPriceData.get('maxPrice'));
	};

	const onFormChange = () => {
		const formOptionsData = new FormData(formOptionsRef.current);
		optionsObj.types.mirrors = !!formOptionsData.get('mirrors');
		optionsObj.types.compact = !!formOptionsData.get('compact');
		optionsObj.types.systemic = !!formOptionsData.get('systemic');
		setOptions(optionsObj);
	};

	return (
		<div className={styles.camerasPage}>
			<div className={styles.camerasPage__link}>
				<ul>
					<li><NavLink to='/'>Головна</NavLink></li>
					<li className={styles.arrow}>{'>'}</li>
					<li><NavLink to='/'>Цифрова техніка</NavLink></li>
					<li className={styles.arrow}>{'>'}</li>
					<li><NavLink to='cameras'>Фотопарати</NavLink></li>
				</ul>
			</div>
			<div className={styles.camerasPage__container}>
				<div className={styles.filtration}>
					<h2 className={styles.title}>фотопарати</h2>
					<h3 className={styles.inputTitle}>По ціні</h3>
					<form ref={formPriceRef} onSubmit={(e) => submitHandler(e)}
						className={styles.priceForm}>
						<input id='minPrice' name='minPrice' defaultValue='0' type='text' maxLength="5"/>
						<span> - </span>
						<input id='maxPrice' name='maxPrice' defaultValue='50000' type='text' maxLength="5"/>
						<input type='submit' className={styles.submit} value='OK'/>
					</form>
					<form ref={formOptionsRef} onSubmit={e => submitHandler(e)} className={styles.optionsForm}
						onChange={() => onFormChange()}>
						<h3 className={styles.inputTitle}>По типу</h3>
						<div className={styles.inputsContainer}>
							<label><input type="checkbox" name="mirrors"/><span>дзеркальні</span></label>
							<label><input type="checkbox" name="compact"/><span>компактні</span></label>
							<label><input type="checkbox" name="systemic"/><span>системні</span></label>
						</div>

						<h3 className={styles.inputTitle}>По виробнику</h3>
						<div className={styles.inputsContainer}>
							<label><input type="checkbox" name="canon"/><span>Canon</span></label>
							<label><input type="checkbox" name="fujifilm"/><span>Fujifilm</span></label>
							<label><input type="checkbox" name="nikon"/><span>Nikon</span></label>
							<label><input type="checkbox" name="panasonic"/><span>Panasonic</span></label>
							<label><input type="checkbox" name="pentax"/><span>Pentax</span></label>
							<label><input type="checkbox" name="sony"/><span>Sony</span></label>
						</div>

						<h3 className={styles.inputTitle}>Комплектація</h3>
						<div className={styles.inputsContainer}>
							<label><input type="checkbox" name="withoutLens"/><span>Без об{'\''}єктиву</span></label>
							<label><input type="checkbox" name="withLens"/><span>З об{'\''}єктивом</span></label>
						</div>

						<h3 className={styles.inputTitle}>Матриця</h3>
						<div className={styles.inputsContainer}>
							<label><input type="checkbox" name="cmos"/><span>CMOS</span></label>
							<label><input type="checkbox" name="cropped"/><span>Кропнута</span></label>
							<label><input type="checkbox" name="fullSize"/><span>Повнорозмірна</span></label>
						</div>
					</form>
				</div>
				<div className={styles.productsList}>

				</div>
			</div>

		</div>
	);
};

export default CamerasPage;