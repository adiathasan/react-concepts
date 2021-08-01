import React from 'react';

import {
	HeaderStyled,
	Nav,
	NavItem,
	SvgToggleDark,
	ToggleButton,
} from './Header.styles';
import { Theme } from '../../hooks/useTheme';

const inverseTheme = (theme: Theme) => (theme === 'light' ? 'dark' : 'light');

interface Props {
	toggle: () => void;
	theme: Theme;
}

const Header: React.FC<Props> = ({ toggle, theme }) => {
	return (
		<HeaderStyled>
			<Nav>
				<NavItem>react-patterns</NavItem>
			</Nav>
			<ToggleButton
				onClick={toggle}
				id='theme-toggle'
				aria-label={`Switch to ${inverseTheme(theme)} theme`}>
				<SvgToggleDark
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 472.39 472.39'>
					<g className={`sun ${theme}`}>
						<path d='M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z' />
					</g>
					<g className={`circle ${theme}`}>
						<circle className='cls-1' cx='236.2' cy='236.2' r='103.78' />
					</g>
				</SvgToggleDark>
			</ToggleButton>
		</HeaderStyled>
	);
};

export default Header;
