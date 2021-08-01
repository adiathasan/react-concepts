import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import { themes } from './Theme/theme';
import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './Theme/global';

/* screens */
import FormExampleScreen from './screens/FormScreen/FormExampleScreen';
import HomeScreen from './screens/Home/HomeScreen';

const App: React.FC = () => {
	const { toggleTheme, theme } = useTheme();

	return (
		<ThemeProvider theme={themes[theme]}>
			<GlobalStyles />
			<Header theme={theme} toggle={toggleTheme} />
			<AppStyled>
				<BrowserRouter>
					<Switch>
						<Route
							component={FormExampleScreen}
							exact
							path='/form-hook-pattern'
						/>
						<Route component={HomeScreen} exact path='/' />
					</Switch>
				</BrowserRouter>
			</AppStyled>
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
