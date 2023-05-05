import {
	StyledBookCard,
	StyledForm,
	StyledSearch,
	StyledBookList,
	StyledDiv,
	StyledTitle,
	StyledButtons,
	StyledMain
} from './styles';
import { useFetch } from '../../hooks/useFetch';
import { useState } from 'react';
import Modal from '../modal/Modal';
import BookDescription from '../book-description/BookDescription';

const BookList = () => {
	const [contentModal, setContentModal] = useState(null);
	const { data, loading, error, setFetchInfo } = useFetch({
		url: 'http://localhost:3000/api/books/'
	});

	if (loading) return <h2>loading...</h2>;

	if (error) return <h2>Something went wrong...</h2>;

	return (
		<StyledMain>
			<StyledForm>
				<StyledSearch type='text' placeholder='Buscar libro' />
			</StyledForm>
			<button>Subir Libro</button>
			<StyledBookList>
				{data.map(book => (
					<StyledBookCard key={book._id}>
						<StyledDiv>
							<StyledTitle>{book.name}</StyledTitle>
							<p>{book.author}</p>
						</StyledDiv>
						<img src={book.image} alt={book.name} />
						<StyledButtons>
							<button
								onClick={() =>
									setContentModal(
										<BookDescription
											book={book}
											setContentModal={setContentModal}
										/>
									)
								}
							>
								Más información
							</button>
							<button onClick={() => deleteUser(setFetchInfo, book._id)}>
								Borrar
							</button>
						</StyledButtons>
					</StyledBookCard>
				))}
			</StyledBookList>
			<Modal setContentModal={setContentModal}>{contentModal}</Modal>
		</StyledMain>
	);
};

const deleteUser = async (setFetchInfo, id) => {
	setFetchInfo({
		url: `http://localhost:3000/api/books/${id}`,
		options: {
			method: 'DELETE',
			headers: {
				Accept: 'application/json'
			}
		}
	});
};

export default BookList;
