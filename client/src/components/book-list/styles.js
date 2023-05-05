import styled from 'styled-components';

const StyledBookCard = styled.div`
	width: 250px;
	background-color: lightgrey;
	border-radius: 6px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-bottom: 2rem;
`;

const StyledForm = styled.form`
	padding: 1rem;
	margin-bottom: 2rem;
`;

const StyledSearch = styled.input`
	width: 400px;
	padding: 0.5rem 1rem;
	border: none;
	border-bottom: 1px solid black;
`;
const StyledBookList = styled.div`
	width: calc(1000px + 4rem);
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(4, 1fr);
	margin: auto;
	margin-top: 4rem;
`;

const StyledDiv = styled.div`
	height: 130px;
`;

const StyledTitle = styled.h2`
	margin-bottom: auto;
`;

const StyledButtons = styled.div`
	margin-top: 1rem;
`;

const StyledMain = styled.main`
	width: calc(1000px + 4rem);
	padding: 1rem;
	margin: auto;
`;

export {
	StyledBookCard,
	StyledForm,
	StyledSearch,
	StyledBookList,
	StyledDiv,
	StyledTitle,
	StyledButtons,
	StyledMain
};
