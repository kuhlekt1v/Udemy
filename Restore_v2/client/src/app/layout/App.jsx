import { useState } from 'react';
import {
	CssBaseline,
	Container,
	createTheme,
	ThemeProvider,
} from '@mui/material';

import Catalog from '../../components/catalog/Catalog';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../components/home/HomePage';
import AboutPage from '../../components/about/AboutPage';
import ContactPage from '../../components/contact/ContactPage';
import ProductDetails from '../../components/catalog/ProductDetails';

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const paletteType = darkMode ? 'dark' : 'light';

	function handleThemeChange() {
		setDarkMode(!darkMode);
	}

	// Overriding MUI theme
	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === 'light' ? '#eaeaea' : '#121212',
			},
		},
	});

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
			<Container>
				<Routes>
					<Route path='/' element={<HomePage />} exact={true} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/catalog/:id' element={<ProductDetails />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;
