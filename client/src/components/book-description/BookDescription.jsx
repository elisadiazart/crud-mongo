import FormEditBook from '../form-edit-book/FormEditBook';
import { StyledImage } from './styles';

const BookDescription = ({ book, setContentModal }) => {
	const {
		name,
		author,
		pages,
		yearPublished,
		language,
		isbn,
		sinopsis,
		image
	} = book;
	return (
		<>
			<div>
				<h3>{name}</h3>
				<p>{author}</p>
				<p>{pages} pages</p>
				<p>Published: {yearPublished}</p>
				<p>{language}</p>
				<p>ISBN: {isbn}</p>
				<p>{sinopsis}</p>
				<button onClick={() => setContentModal(<FormEditBook />)}>
					Editar
				</button>
			</div>
			<StyledImage src={image} alt={name} />
		</>
	);
};

export default BookDescription;
