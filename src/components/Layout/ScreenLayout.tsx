import React from 'react';

import { Helmet } from 'react-helmet';
import styled from 'styled-components';

interface Props {
	title?: string;
}

const ScreenLayout: React.FC<Props> = ({ title, children }) => {
	return (
		<ScreenLayoutStyled>
			<Helmet>
				<title>React Patterns {title && ' | ' + title}</title>
			</Helmet>
			{children}
		</ScreenLayoutStyled>
	);
};

export default ScreenLayout;

const ScreenLayoutStyled = styled.div`
	min-height: 400px;
	min-width: 400px;
`;
