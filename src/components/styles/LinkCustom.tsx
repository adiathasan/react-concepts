import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { EThemes } from '../../Theme/theme';

export const LinkCustom = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme[EThemes.LINK_PRIMARY]};
	margin: 0.5rem 0.5rem 0 0;
	font-size: large;
	font-weight: 600;
`;

export const LinkBlank = styled.a`
	text-decoration: none;
	color: ${({ theme }) => theme[EThemes.LINK_PRIMARY]};
	margin: 0.5rem 0.5rem 0 0;
	font-size: large;
	font-weight: 600;
`;
