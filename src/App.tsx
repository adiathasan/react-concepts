import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { themes } from './Theme/theme';
import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './Theme/global';

/* screens */
import { routes } from './routes/routes';


const App: React.FC = () => {
	const { theme } = useTheme();

	return (
		<ThemeProvider theme={themes[theme]}>
			<BrowserRouter>
				<GlobalStyles />
				<Header />
				<AppStyled>
					<Routes>
						{routes.map((route, i) => (
							<Route key={route.path + i} {...route} />
						))}
					</Routes>
				</AppStyled>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;

const AppStyled = styled.div`
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 14px;
`;
