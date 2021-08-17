import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { themes } from './Theme/theme';
import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './Theme/global';

/* screens */
import { routes } from './routes/routes';

const App: React.FC = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<ThemeProvider theme={themes[theme]}>
			<BrowserRouter>
				<GlobalStyles />
				<Header theme={theme} toggle={toggleTheme} />
				<AppStyled>
					<Switch>
						{routes.map((route, i) => (
							<Route key={route.path + i} {...route} />
						))}
					</Switch>
				</AppStyled>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;

const AppStyled = styled.div`
	min-height: 50vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;
