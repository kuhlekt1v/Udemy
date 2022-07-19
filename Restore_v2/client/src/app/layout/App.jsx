import { useState } from 'react';
import {
	CssBaseline,
	Container,
	createTheme,
	ThemeProvider,
} from '@mui/material';

import Catalog from '../../components/catalog/Catalog';
import Header from './Header';

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
				<Catalog />
			</Container>
		</ThemeProvider>
	);
}

export default App;
