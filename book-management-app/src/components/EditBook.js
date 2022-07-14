import BookForm from './BookForm';
import { useParams } from 'react-router-dom';
import BooksContext from '../context/BooksContext';
import { useContext } from 'react';

const EditBook = ({ history }) => {
	const { id } = useParams();
	const { books, setBooks } = useContext(BooksContext);

	const bookToEdit = books.find(book => book.id === id);

	const handleOnSubmit = book => {
		const filteredBooks = books.filter(book => book.id !== id);
		setBooks([book, ...filteredBooks]);
		history.push('/');
	};

	return (
		<div>
			<BookForm book={bookToEdit} handleOnSubmit={handleOnSubmit} />
		</div>
	);
};

export default EditBook;
