import React from 'react';
import styles from './Modal.module.scss';
import {NavLink} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Modal = ({closeModal}) => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal__container}>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/modal_croos.svg?alt=media&token=dd761edc-a30b-4e64-ac76-8bcf4d06c7f2'
					alt='cross'
					onClick={closeModal}
					className={styles.cross}
				/>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/modal.svg?alt=media&token=102696e0-f19a-469b-aa85-6521d5a52a54'
					alt='modal'
				/>
				<h2>Дякую, що обрали нас!</h2>
				<p>Ваше замовлення №123456 успішно оформлено.</p>
				<p>Ми зв&apos;яжемося з вами найближчим часом.</p>
				<button><NavLink to='/'>Продовжити покупки</NavLink></button>
			</div>
		</div>
	);
};

export default Modal;