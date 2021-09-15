import { keyframes } from 'styled-components';

export const pop = keyframes`
		0% {
			opacity: 0;
			transform: scale(0);
		}
		75% {
			opacity: 1;
			transform: scale(1.1);
		}
		100% {
			opacity: 1;
			transform: scale(1);
		}
`;
