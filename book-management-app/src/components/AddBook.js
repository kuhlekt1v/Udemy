import { useContext } from 'react';
import BookForm from './BookForm';
import BooksContext from '../context/BooksContext';

// History prop is automatically passed from React Router to
// every component mentioned in <Route/> (from AppRouter.js).
// We passed books & setBooks from AppRouter.js file

const AddBook = ({ history }) => {
	const { books, setBooks } = useContext(BooksContext);

	const handleOnSubmit = book => {
		setBooks([book, ...books]);
		history.push('/');
	};

	return (
		<>
			<BookForm handleOnSubmit={handleOnSubmit} />
		</>
	);
};

export default AddBook;
