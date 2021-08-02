import React from 'react';
import styled from 'styled-components';

import { LinkBlank, LinkCustom } from '../../components/styles/LinkCustom';
import { patternLinks } from '../../static/me';
import { EThemes } from '../../Theme/theme';

const HomeScreen = () => {
	return (
		<Main>
			{patternLinks.map((data, i) => (
				<Each key={data.code + i}>
					<H2>{data.title}</H2>
					<LinkCustom to={data.link}>Demo!</LinkCustom>
					<LinkBlank target='_blank' href={data.code} rel='noreferrer'>
						Code!
					</LinkBlank>
				</Each>
			))}
		</Main>
	);
};

export default HomeScreen;

export const H2 = styled.h2`
	margin-bottom: 1rem;
`;

export const Main = styled.main`
	padding: 1rem;
	width: 1200px;
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	perspective: 800px;
`;

export const Each = styled.div`
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	padding: 2rem;
	border-radius: 6px;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
	transition: 0.3s ease;

	&:hover {
		transform: translateY(-20px) rotateX(5deg);
	}
`;
