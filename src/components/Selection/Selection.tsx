import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { pop } from '../styles/Animations';

interface Props {
	selected: boolean;
	label: any;
}

const Selection: React.FC<Props> = (props) => {
	const { selected, label } = props;

	return (
		<SelectionContainer>
			<CheckBox>
				{selected && <CheckIcon width='100%' height='100%' />}
			</CheckBox>
			<div className='flex-1'>{label}</div>
		</SelectionContainer>
	);
};

export default Selection;

const SelectionContainer = styled.div`
	display: flex;
	align-items: center;

	.flex-1 {
		flex: 1;
	}
`;

const CheckBox = styled.div`
	padding: 1px;
	width: 20px;
	height: 20px;
	border-radius: 4px;
	border: 1px solid limegreen;
	margin-right: 0.5rem;
`;

const CheckIcon = styled(FaCheck)`
	border-radius: inherit;

	animation: ${pop} 0.3s ease forwards;
`;
