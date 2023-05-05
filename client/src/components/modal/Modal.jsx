import { createPortal } from 'react-dom';
import {
	StyledModalContainer,
	StyledMessageContainer,
	StyledCloseButton
} from './styles';

const Modal = ({ setContentModal, children }) => {
	if (!children) return;
	return createPortal(
		<StyledModalContainer>
			<StyledMessageContainer>
				<StyledCloseButton onClick={() => setContentModal(false)}>
					x
				</StyledCloseButton>
				{children}
			</StyledMessageContainer>
		</StyledModalContainer>,
		document.getElementById('modal')
	);
};

export default Modal;
