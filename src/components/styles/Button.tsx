import styled from 'styled-components';

import { EThemes } from '../../Theme/theme';

export const Button = styled.button`
	padding: 0.5rem 0.3rem;
	outline: none;
	border-color: transparent;
	border-radius: 6px;
	width: 100%;
	transition: 0.3s ease;
	cursor: pointer;
	&:focus {
		border-color: limegreen;
	}
`;

export const ButtonPrimary = styled(Button)`
	background-color: ${({ theme }) => theme[EThemes.BTN_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
`;
