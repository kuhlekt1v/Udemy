import { useState, useEffect } from 'react';
import agent from '../../app/api/agent';
import LoadingComponent from '../../app/layout/LoadingComponent';
import ProductList from './ProductList';

const Catalog = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		agent.Catalog.list()
			.then(products => setProducts(products))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <LoadingComponent message='Loading products...' />;
	return (
		<>
			<ProductList products={products} />
		</>
	);
};

export default Catalog;
