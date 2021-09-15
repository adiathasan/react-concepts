import React, { useState } from 'react';
import styled from 'styled-components';

import ScreenLayout from '../../components/Layout/ScreenLayout';
import TreeView from '../../components/TreeView/TreeView';
import { viewData } from '../../components/TreeView/data';
import { MainWrapper } from '../../components/styles/Main';

const TreeViewScreen: React.FC = () => {
	const [state, setState] = useState(viewData);

	return (
		<ScreenLayout title='Tree View'>
			<TreeViewContainer>
				<TreeView
					data={state}
					onToggle={(i, checked) =>
						setState((old) => {
							const ref = [...old];

							ref[i].show = checked;

							return [...ref];
						})
					}
				/>
			</TreeViewContainer>
		</ScreenLayout>
	);
};

export default TreeViewScreen;

const TreeViewContainer = styled(MainWrapper)`
	min-height: 38vh;
`;
