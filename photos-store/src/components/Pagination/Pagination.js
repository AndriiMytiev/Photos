import React, {useEffect, useRef, useState} from 'react';
import styles from './Pagination.module.scss';
import ProductItem from '../ProductItem/ProductItem';

import {collection, getDocs} from 'firebase/firestore';
import {db} from '../../firebase';

// eslint-disable-next-line react/prop-types
const Pagination = ({items, minPrice, maxPrice, typesArray, producersArray, lensArray, matrixArray}) => {
	const [amountOfPage, setAmountOfPage] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage, setItemPerPage] = useState(0);

	const [productsFromDB, setProductsFromDB] = useState([]);
	const [products, setProducts] = useState([]);
	const [productsOnPage, setProductsOnPage] = useState([]);

	const [sortBy, setSortBy] = useState('fromExpensive');

	const [types, setTypes] = useState([]);
	const [producers, setProducers] = useState([]);
	const [lens, setLens] = useState([]);
	const [matrix, setMatrix] = useState([]);

	const inputRef = useRef();

	useEffect(() => {
		console.log(matrix);
		console.log(types);
		console.log(lens);
		console.log(producers);
	}, [matrix, types, lens, producers]);

	useEffect(() => {
		setProducers(producersArray);
		setTypes(typesArray);
		setLens(lensArray);
		setMatrix(matrixArray);
	}, [producersArray, typesArray, lensArray, matrixArray]);

	useEffect(() => {
		(async function () {
			const productsArray = [];
			const querySnapshot = await getDocs(collection(db, '/products/XfSXvNolwQEFWrfo1V46/cameras'));
			querySnapshot.forEach((doc) => {
				productsArray.push(doc.data());
			});
			setProductsFromDB(productsArray.sort((a, b) => a.id > b.id ? 1 : -1));
		})();
	}, []);

	useEffect(() => {
		setProducts(productsFromDB.filter(item => item.price > minPrice && item.price < maxPrice));
		setItemPerPage(items);
		setCurrentPage(1);
	}, [productsFromDB, items, minPrice, maxPrice, products]);

	useEffect(() => {
		let newProducts = [];
		switch (sortBy) {
		case 'fromExpensive':
			newProducts = (products.sort((a, b) => a.price < b.price ? 1 : -1));
			break;
		case 'fromCheap':
			newProducts = (products.sort((a, b) => a.price > b.price ? 1 : -1));
			break;
		case 'byAvailability':
			newProducts = (products.sort((a, b) => a.available < b.available ? 1 : -1));
			break;
		}
		setProducts(newProducts);
		setAmountOfPage(Math.ceil(products.length / itemPerPage));
		setProductsOnPage(products.slice((itemPerPage * (currentPage - 1)), (itemPerPage + itemPerPage * (currentPage - 1))));
	}, [products, currentPage, itemPerPage, sortBy]);

	useEffect(() => {
		let temp = [];
		if (producers.length) {
			if(temp.length){
				temp = temp.filter(item => producers.includes(item.producer));
			} else {
				temp = productsFromDB.filter(item => producers.includes(item.producer));
			}
		}
		if (types.length) {
			if(temp.length){
				temp = temp.filter(item => types.includes(item.type));
			} else {
				temp = productsFromDB.filter(item => types.includes(item.type));
			}
		}
		if (lens.length) {
			if(temp.length){
				temp = temp.filter(item => lens.includes(item.lens));
			} else {
				temp = productsFromDB.filter(item => lens.includes(item.lens));
			}
		}
		if (matrix.length) {
			if(temp.length){
				temp = temp.filter(item => matrix.includes(item.matrix));
			} else {
				temp = productsFromDB.filter(item => matrix.includes(item.matrix));
			}
		}
		if (temp.length === 0 && producers.length === 0 && types.length === 0 && lens.length === 0 && matrix.length === 0) {
			temp = productsFromDB.filter(item => item.price > minPrice && item.price < maxPrice);
		}
		setProducts(temp.filter(item => item.price > minPrice && item.price < maxPrice));
		setCurrentPage(1);
	}, [types, producers, lens, minPrice, maxPrice]);

	const itemPerPageHandler = () => {
		const amount = inputRef.current.value;
		if (amount > 0 && amount <= 9) {
			setItemPerPage(+amount);
			setCurrentPage(1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => Number(prev - 1));
		}
	};

	const nextPage = () => {
		if (currentPage < amountOfPage) {
			setCurrentPage(prev => Number(prev + 1));
		}
	};

	const changePageHandler = (e) => {
		setCurrentPage(+e.target.id);
	};

	const sortByHandler = (e) => {
		setSortBy(e.target.value);
		setCurrentPage(1);
	};

	const createNavList = () => {
		const pageList = [];
		for (let i = 1; i <= amountOfPage; i++) {
			pageList.push(<li key={i} id={i} onClick={(e) => changePageHandler(e)}>{i}</li>);
		}
		return pageList;
	};

	return (
		<div className={styles.page}>
			<div className={styles.page__settings}>
				<div className={styles.left_block}>
					<p>
						{(1 + itemPerPage * (currentPage - 1))} - {(itemPerPage + itemPerPage * (currentPage - 1) > products.length)
							? products.length
							: itemPerPage + itemPerPage * (currentPage - 1)
						} із {products.length}
					</p>
					<p>Показувати</p>
					<input type='number' placeholder={'1 - 9'} min={1} max={9}
						className={styles.numbers}
						ref={inputRef}/>
					<button onClick={itemPerPageHandler}>Show</button>
				</div>
				<div className={styles.right_block}>
					<p>Сортувати по: </p>
					<select onChange={(e) => sortByHandler(e)}>
						<option value='fromExpensive'>від дорогих до дешевих</option>
						<option value='fromCheap'>від дешевих до дорогих</option>
						<option value='byAvailability'>є в наявності</option>
					</select>
				</div>
			</div>
			{amountOfPage ? <div className={styles.page__content}>
				<div className={styles.page__products}>
					{productsOnPage.map(prod => <div key={prod.id} className={styles.prod}>
						<ProductItem item={prod}/>
					</div>)}
				</div>
				<div className={styles.pagination}>
					<button onClick={prevPage}>←</button>
					<ul>
						{createNavList()}
					</ul>
					<button onClick={nextPage}>→</button>
				</div>
			</div> : <div className={styles.notFound}>
				<p>За даними параметрами пошуку нічого не знайдено.</p>
				<p>Спробуйте інші параметри.</p>
			</div>}
		</div>
	);
};

export default Pagination;