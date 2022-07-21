import {
	AppBar,
	Badge,
	Box,
	IconButton,
	List,
	ListItem,
	Switch,
	Toolbar,
	Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const midLinks = [
	{ title: 'catalog', path: '/catalog' },
	{ title: 'about', path: '/about' },
	{ title: 'contact', path: '/contact' },
];

const rightLinks = [
	{ title: 'login', path: '/login' },
	{ title: 'register', path: '/register' },
];

const navStyles = {
	color: 'inherit',
	typography: 'h6',
	textDecoration: 'none',
	'&:hover': { color: 'grey.400' },
	'&.active': { color: 'text.secondary' },
};

export default function Header({ darkMode, handleThemeChange }) {
	return (
		<AppBar position='static' sx={{ mb: 4 }}>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				{/* Left side elements */}
				<Box display='flex' alignItems='center'>
					<Typography
						variant='h6'
						component={NavLink}
						to='/'
						sx={navStyles}
						exact='true'
					>
						RE-STORE
					</Typography>
					<Switch checked={darkMode} onClick={handleThemeChange} />
				</Box>

				{/* Middle elements */}

				<List sx={{ display: 'flex' }}>
					{midLinks.map(({ title, path }) => (
						<ListItem component={NavLink} to={path} key={path} sx={navStyles}>
							{title.toUpperCase()}
						</ListItem>
					))}
				</List>

				{/* Right side elements */}
				<Box display='flex' alignItems='center'>
					<IconButton size='large' sx={{ color: 'inherit' }}>
						<Badge badgeContent={4} color='secondary'>
							<ShoppingCartIcon />
						</Badge>
					</IconButton>
					<List sx={{ display: 'flex' }}>
						{' '}
						{rightLinks.map(({ title, path }) => (
							<ListItem component={NavLink} to={path} key={path} sx={navStyles}>
								{title.toUpperCase()}
							</ListItem>
						))}
					</List>
				</Box>
			</Toolbar>
		</AppBar>
	);
}
