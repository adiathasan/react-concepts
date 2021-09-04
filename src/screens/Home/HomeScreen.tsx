import React from 'react';
import styled from 'styled-components';

import { LinkBlank, LinkCustom } from '../../components/styles/LinkCustom';
import { patternLinks } from '../../static/me';
import { EThemes } from '../../Theme/theme';

const HomeScreen: React.FC = () => {
	return (
		<Main>
			{patternLinks
				.filter((link) => link.enabled)
				.map((data, i) => (
					<Each key={data.code + i}>
						<H2>{data.title}</H2>
						<LinkContainer>
							<LinkCustom to={data.link}>Demo!</LinkCustom>
							<LinkBlank target='_blank' href={data.code} rel='noreferrer'>
								Code!
							</LinkBlank>
						</LinkContainer>
					</Each>
				))}
		</Main>
	);
};

export default HomeScreen;

export const LinkContainer = styled.div`
	display: flex;
	align-items: center;

	& > * {
		margin-right: 0.8rem;
	}
`;

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
		transform: scale(1.05);
		filter: brightness(1.3);
	}
`;
