import React from 'react';

import { Helmet } from 'react-helmet';

interface Props {
	title?: string;
}

const ScreenLayout: React.FC<Props> = ({ title, children }) => {
	return (
		<div>
			<Helmet>
				<title>React Patterns {title && ' | ' + title}</title>
			</Helmet>
			{children}
		</div>
	);
};

export default ScreenLayout;
