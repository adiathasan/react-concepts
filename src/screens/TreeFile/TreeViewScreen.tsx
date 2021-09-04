import React from 'react';
import styled from 'styled-components';

import ScreenLayout from '../../components/Layout/ScreenLayout';
import { MainWrapper } from '../../components/styles/Main';

const TreeViewScreen: React.FC = () => {
	return (
		<ScreenLayout title='Tree View'>
			<TreeViewContainer>
				<h2>Tree</h2>
			</TreeViewContainer>
		</ScreenLayout>
	);
};

export default TreeViewScreen;

const TreeViewContainer = styled(MainWrapper)``;
