import React, { useRef, useState} from 'react';
import styles from './CamerasPage.module.scss';
import {NavLink} from 'react-router-dom';
import MultiRangeSlider from 'multi-range-slider-react';
import './MultiRangeSlider.scss';

import Pagination from '../../components/Pagination/Pagination';

const CamerasPage = () => {
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(50000);

	const [minInputValue, setMinInputValue] = useState(0);
	const [maxInputValue, setMaxInputValue] = useState(50000);

	const [types, setTypes] = useState([]);
	const [producers, setProducers] = useState([]);
	const [lens, setLens] = useState([]);
	const [matrix, setMatrix] = useState([]);

	const formPriceRef = useRef(null);
	const formOptionsRef = useRef(null);

	const submitHandler = (e) => {
		e.preventDefault();
		const formPriceData = new FormData(formPriceRef.current);
		setMinPrice(+formPriceData.get('minPrice'));
		setMaxPrice(+formPriceData.get('maxPrice'));
	};

	const onFormChange = () => {
		const formOptionsData = new FormData(formOptionsRef.current);

		const typesArray = [];
		!!formOptionsData.get('mirrors') && typesArray.push('mirrors');
		!!formOptionsData.get('compact') && typesArray.push('compact');
		!!formOptionsData.get('systemic') && typesArray.push('systemic');
		setTypes(typesArray);

		const producersArray = [];
		!!formOptionsData.get('canon') && producersArray.push('Canon');
		!!formOptionsData.get('fujifilm') && producersArray.push('Fujifilm');
		!!formOptionsData.get('nikon') && producersArray.push('Nikon');
		!!formOptionsData.get('panasonic') && producersArray.push('Panasonic');
		!!formOptionsData.get('pentax') && producersArray.push('Pentax');
		!!formOptionsData.get('sony') && producersArray.push('Sony');
		setProducers(producersArray);

		const lensArray = [];
		!!formOptionsData.get('withoutLens') && lensArray.push('withoutLens');
		!!formOptionsData.get('withLens') && lensArray.push('withLens');
		setLens(lensArray);

		const matrixArray = [];
		!!formOptionsData.get('cmos') && matrixArray.push('cmos');
		!!formOptionsData.get('cropped') && matrixArray.push('cropped');
		!!formOptionsData.get('fullSize') && matrixArray.push('fullSize');
		setMatrix(matrixArray);
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
					<form ref={formPriceRef}
						onSubmit={(e) => submitHandler(e)}
						className={styles.priceForm}>
						<input
							id='minPrice'
							name='minPrice'
							value={minInputValue}
							type='text'
							maxLength="5"
							onChange={(e) => e.target.value <= maxInputValue && setMinInputValue(+e.target.value)}/>
						<span> - </span>
						<input
							id='maxPrice'
							name='maxPrice'
							value={maxInputValue}
							type='text'
							maxLength="5"
							onChange={(e) => e.target.value >= minInputValue && setMaxInputValue(+e.target.value)}/>
						<input type='submit' className={styles.submit} value='OK'/>
					</form>
					<MultiRangeSlider
						onChange={(e) => {
							setMinPrice(e.minValue);
							setMaxPrice(e.maxValue);
						}}
						onInput={(e) => {
							setMinInputValue(e.minValue);
							setMaxInputValue(e.maxValue);
						}}
						min={0}
						max={50000}
						minValue={minInputValue}
						maxValue={maxInputValue}
						step={100}
						ruler={false}
						label={false}
						thumbLeftColor={'#51AD33'}
						thumbRightColor={'#51AD33'}
						barInnerColor={'#51AD33'}
						baseClassName={'newMulti-range-slider'}
					></MultiRangeSlider>
					<form ref={formOptionsRef}
						className={styles.optionsForm}
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
					<Pagination
						items={9}
						minPrice={minPrice}
						maxPrice={maxPrice}
						typesArray={types}
						producersArray={producers}
						lensArray={lens}
						matrixArray={matrix}
					/>
				</div>
			</div>
		</div>
	);
};

export default CamerasPage;