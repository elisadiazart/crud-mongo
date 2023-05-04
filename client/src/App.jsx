import BookList from './components/book-list/Booklist';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<h1>Mis libros</h1>
			<BookList />
		</>
	);
};

export default App;
