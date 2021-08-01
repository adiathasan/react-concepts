import React from 'react';
import styled from 'styled-components';

import { LinkBlank, LinkCustom } from '../../components/styles/LinkCustom';
import { EThemes } from '../../Theme/theme';

const links = [
	{
		title: 'form-hook-pattern',
		code: 'https://github.com/adiathasan/react-concepts',
		link: '/form-hook-pattern',
	},
	{ title: 'more-pattern (coming...  )', code: '', link: '' },
];

const HomeScreen = () => {
	return (
		<Main>
			{links.map((link, i) => (
				<Each>
					<h2>{link.title}</h2>
					<LinkCustom to={link.link}>Demo!</LinkCustom>
					<LinkBlank target='_blank' href={link.code} rel='noreferrer'>
						Code!
					</LinkBlank>
				</Each>
			))}
		</Main>
	);
};

export default HomeScreen;

export const Main = styled.main`
	padding: 1rem;
	width: 1200px;
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
`;

export const Each = styled.div`
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	padding: 2rem;
	border-radius: 6px;
	box-shadow: 0 8px 10px -4px rgba(0, 0, 0, 0.1);
	transition: 0.3s ease;

	&:hover {
		transform: translateY(-10px);
	}
`;
