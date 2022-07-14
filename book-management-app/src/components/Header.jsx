const { NavLink } = require('react-router-dom');

const Header = () => {
	return (
		<header>
			<h1>Book Management</h1>
			<hr />
			<div className='links'>
				<NavLink to='/' className='link' activeClassName='active' exact>
					Books List
				</NavLink>
				<NavLink to='/add' className='link' activeClassName='active'>
					Add Book
				</NavLink>
			</div>
		</header>
	);
};

export default Header;
