import React from 'react';
import ProductPageItem from '../../components/ProductPageItem/ProductPageItem';
import { useParams } from 'react-router-dom';
import ProductPageInfo from '../../components/ProductPageInfo/ProductPageInfo';

const ProductPage = () => {
	const params = useParams();
	return (<div>
		<ProductPageItem product={params.id}  />
		<ProductPageInfo />
	</div>);
};

export default ProductPage;