import { useState } from 'react';
import {
	CssBaseline,
	Container,
	createTheme,
	ThemeProvider,
} from '@mui/material';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import ProductDetails from '../../features/catalog/ProductDetails';
import ServerError from '../errors/ServerError';
import NotFound from '../errors/NotFound';

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
			<ToastContainer position='bottom-right' theme='colored' hideProgressBar />
			<CssBaseline />
			<Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
			<Container>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/catalog/:id' element={<ProductDetails />} />
					<Route path='/about' element={<AboutPage />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/server-error' element={<ServerError />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</ThemeProvider>
	);
}

export default App;
