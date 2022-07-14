import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import EditBook from '../components/EditBook';
import AddBook from '../components/AddBook';
import BooksList from '../components/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import BooksContext from '../context/BooksContext';

const AppRouter = () => {
	// useLocalStorage hook.
	const [books, setBooks] = useLocalStorage('books', []);

	return (
		<BrowserRouter>
			<div>
				<Header />
				<div className='main-content'>
					{/* Each component declared as part of route can access books & setBooks via Context API. */}
					<BooksContext.Provider value={{ books, setBooks }}>
						<Switch>
							<Route component={BooksList} path='/' exact={true} />
							<Route component={AddBook} path='/add' />
							<Route component={EditBook} path='/edit/:id' />
							<Route component={() => <Redirect to='/' />} />
						</Switch>
					</BooksContext.Provider>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default AppRouter;
