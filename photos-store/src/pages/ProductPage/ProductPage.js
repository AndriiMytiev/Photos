import React from 'react';
import ProductPageItem from '../../components/ProductPageItem/ProductPageItem';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
	const params = useParams();
	return (
		<ProductPageItem product={params.id}  />
	);
};

export default ProductPage;