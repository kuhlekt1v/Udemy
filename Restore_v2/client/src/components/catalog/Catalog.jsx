import { useState, useEffect } from 'react';
import ProductList from './ProductList';

const Catalog = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/api/products')
			.then(response => response.json())
			.then(data => setProducts(data));
	}, []);

	return (
		<>
			<ProductList products={products} />
		</>
	);
};

export default Catalog;
