import styled from 'styled-components';

import { EThemes } from '../../Theme/theme';

export const MainWrapper = styled.main`
	position: relative;
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	padding: 2rem;
	border-radius: 2px;
	min-width: 300px;
	box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
`;
