import React from 'react';
import styled from 'styled-components';

interface Props {
	isOpen: boolean;
	isUnmounted: boolean;
}

const ClickOutsideWrapper: React.FC<Props> = React.forwardRef<
	HTMLDivElement,
	Props
>((props, ref) => {
	const { children, isOpen, isUnmounted } = props;

	if (!isOpen) return null;

	return (
		<StyledClickWrapper done={isUnmounted} ref={ref}>
			{children}
		</StyledClickWrapper>
	);
});

export default ClickOutsideWrapper;

const StyledClickWrapper = styled.div<{ done: boolean }>`
	z-index: 100;
	animation: ${({ done }) => (done ? 'unmount' : 'mount')} 0.3s ease-out
		forwards;

	@keyframes mount {
		0% {
			opacity: 0;
			transform: translateY(10px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@keyframes unmount {
		0% {
			opacity: 1;
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			transform: translateY(10px);
		}
	}
`;
