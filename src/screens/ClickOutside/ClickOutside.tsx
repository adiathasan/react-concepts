import React from 'react';
import styled from 'styled-components';
import { CgLogOut, CgProfile, CgArrowDown } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';

import { EThemes } from '../../Theme/theme';
import { ButtonPrimary } from '../../components/styles/Button';
import { MainWrapper } from '../../components/styles/Main';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import useClickOutside from '../../components/ClickOutsideWrapper/useClickOutside';
import ClickOutsideWrapper from '../../components/ClickOutsideWrapper/ClickOutsideWrapper';

const ClickOutside: React.FC = () => {
	const { toggle, register } = useClickOutside();

	return (
		<ScreenLayout title='Click Outside'>
			<MainWrapper>
				<AnimArrow size={60} />
				<BtnRounded onClick={toggle}>
					<CgProfile size={30} />
				</BtnRounded>
				<ClickOutsideWrapper {...register}>
					<FloatingMenu>
						<Item>
							<BtnItem>
								<ImProfile
									style={{ marginRight: '2px', transform: 'translateY(1px)' }}
								/>

								<span>Dashboard</span>
							</BtnItem>
						</Item>
						<Item>
							<BtnItem>
								<CgLogOut
									style={{ marginRight: '2px', transform: 'translateY(2px)' }}
								/>

								<span>Logout</span>
							</BtnItem>
						</Item>
					</FloatingMenu>
				</ClickOutsideWrapper>
			</MainWrapper>
		</ScreenLayout>
	);
};

export default ClickOutside;

export const FloatingMenu = styled.div`
	position: absolute;
	right: 0px;
	top: 110%;
	border-radius: 6px;
	min-width: 100px;
	padding: 0.3rem;
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	border: 1px solid ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
	transform: translateY(10px);
`;

export const BtnRounded = styled.div`
	border-radius: 50%;
	margin-left: auto;
	height: 80px;
	width: 80px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
`;

export const BtnItem = styled(ButtonPrimary)`
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
`;

export const Item = styled.section`
	margin-bottom: 0.2rem;
`;

export const AnimArrow = styled(CgArrowDown)`
	transform: translateY(-10px);
	position: absolute;
	bottom: 100%;
	z-index: 1;
	right: 15%;
	animation: bounce 2s ease-in-out infinite alternate;

	@keyframes bounce {
		0% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(20px);
		}
	}
`;
