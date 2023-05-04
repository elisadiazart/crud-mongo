import { useEffect, useState } from 'react';
import {
	StyledBookCard,
	StyledForm,
	StyledSearch,
	StyledBookList
} from './styles';

const BookList = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		getAllBooks(setBooks);
	}, []);

	if (books.length === 0) return <h1>No hay resultados</h1>;
	return (
		<main>
			<StyledForm>
				<StyledSearch type='text' placeholder='Buscar libro' />
			</StyledForm>
			<StyledBookList>
				{books.map(book => (
					<StyledBookCard key={book._id}>
						<div>
							<h2>{book.name}</h2>
							<h3>{book.author}</h3>
						</div>
						<img src={book.image} alt={book.name} />
						<button>Más información</button>
						<button>Borrar</button>
					</StyledBookCard>
				))}
			</StyledBookList>
		</main>
	);
};

const getAllBooks = async setBooks => {
	const response = await fetch('http://localhost:3000/api/books/');
	const data = await response.json();
	setBooks(data);
};

export default BookList;
