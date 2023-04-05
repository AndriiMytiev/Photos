import React, {useEffect, useState} from 'react';
import styles from './ProductPageInfo.module.scss';

const ProductPageInfo = () => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);

	useEffect(() => {
		setShowMoreInfo(false);
	}, []);

	return (
		<div className={styles.infoBlock}>
			<section>
				<div className={styles.blockText}>
					<h2>Якість, на яку заслуговують Ваші фотографії</h2>
					<p>
                        24,2-мегапіксельний датчик зображення формату APS-C нового покоління забезпечує приголомшливу.
                        деталізацію навіть у складних умовах зйомки.

                        Камера EOS 800D миттєво спрацьовує, оснащена яскравим оптичним видошукачем та дозволяє вести
                        безперервну зйомку зі швидкістю 6 кадрів за секунду. При побудові кадру на екрані зі змінним
                        кутом нахилу, найшвидша у світі система АФ у режимі Live View виконує точне фокусування
                        лише за 0,03 с.
					</p>
					{!showMoreInfo && <div className={styles.readMore} onClick={() => setShowMoreInfo(true)}>
						<p>Читати повністю</p>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/arrow_down.svg?alt=media&token=c722aa07-8699-4288-b949-78789b07ccc4'/>
					</div>}
				</div>
				<img
					src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/prodPage-img1.png?alt=media&token=322a2230-6fcf-49b1-b190-fe26cc973ca0'
					alt='image1'
				/>
			</section>
			{showMoreInfo && <div>
				<div className={styles.secondBlock__wrapper}>
					<section>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/prodPage-img2.png?alt=media&token=f618be03-27df-47bf-a488-5bc68f6cdd09'
							alt='image2'/>
						<div className={styles.blockText}>
							<h2>Налаштування компонентів управління</h2>
							<p>
                                Рідкокристалічний дисплей камери дозволяє переглядати налаштування та змінювати їх
                                залежно
                                від умов зйомки у будь-який момент. Важливі параметри можна встановити безпосередньо під
                                час
                                фотосесії. Ніщо не заважає фотографу самостійно пристосовувати знаряддя зйомки до
                                потреб.
							</p>
						</div>
					</section>
				</div>
				<section className={styles.thirdBlock}>
					<h2>Те, що потрібно для художньої зйомки</h2>
					<p>
                        Широкие возможности фотоаппарата CANON EOS 80D делают его идеальным решением для реализации
                        самых смелых творческих идей. Съемка на профессиональном уровне с этой моделью становится
                        доступной даже для новичков в мире фотоискусства.
					</p>
					<img
						src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/prodPage-img3.png?alt=media&token=e674f9fe-818a-4d55-9b26-9199e7f23e7c'
						alt='image3'
					/>
				</section>

				<section>
					<div className={styles.blockText}>
						<h2>Дисплей з режимом Live View</h2>
						<p>
                            Сенсорний дисплей, кут нахилу якого можна змінювати в залежності від умов роботи та власних
                            уподобань, забезпечує можливість зйомки якісних відеороликів практично з будь-якого ракурсу.
                            А режим «живого перегляду» робить творчий процес більш насиченим та цікавим.
						</p>
					</div>
					<div className={styles.blockText}>
						<h2>Синхронізація спалаху</h2>
						<p>
                            Фотоапарат оснащений вбудованим синхронізатором спалаху, який дозволяє швидко і легко
                            навчитися художнім прийомам управління освітленням у фотостудії або під час вуличної зйомки.
                            Для керування процесом зйомки за допомогою планшета або смартфона передбачено абсолютно
                            безкоштовну фірмову програму Connect.
						</p>
					</div>
				</section>

				<div className={styles.fifthBlock__wrapper}>
					<section className={styles.fifthBlock}>
						<h2>Усунення Мерехтіння</h2>
						<p>
                            У режимі керування фоном функція Defocus (Розфокусування) розгладжує фон навколо обличчя, а
                            функція Clear (Читка зйомка) забезпечує різкість під час зйомки об&apos;єкта та фону, що дозволяє
                            робити чудові селфи у поїздках. Селфі також можна робити в панорамному режимі, що є
                            ідеальним для групових фотографій на динамічному тлі.
						</p>
						<img
							src='https://firebasestorage.googleapis.com/v0/b/abc-photos-bdafe.appspot.com/o/prodPage-img4.png?alt=media&token=d0e09876-8a29-4983-883d-858408b45e78'
							alt='image4'
						/>
					</section>
				</div>
			</div>}
		</div>
	)
	;
};

export default ProductPageInfo;