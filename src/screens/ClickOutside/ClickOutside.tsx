import React from 'react';
import styled from 'styled-components';
import { CgLogOut, CgProfile } from 'react-icons/cg';
import { ImProfile } from 'react-icons/im';

import { EThemes } from '../../Theme/theme';
import { ButtonPrimary } from '../../components/styles/Button';
import ScreenLayout from '../../components/Layout/ScreenLayout';
import useClickOutside from '../../components/ClickOutsideWrapper/useClickOutside';
import ClickOutsideWrapper from '../../components/ClickOutsideWrapper/ClickOutsideWrapper';

const ClickOutside: React.FC = () => {
	const { toggle, register } = useClickOutside();

	return (
		<ScreenLayout title='Click Outside'>
			<Main>
				<BtnRounded onClick={toggle}>
					<CgProfile />
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
			</Main>
		</ScreenLayout>
	);
};

export default ClickOutside;

export const Main = styled.main`
	position: relative;
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	padding: 2rem;
	border-radius: 6px;
	min-width: 300px;
	box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
`;

export const FloatingMenu = styled.div`
	position: absolute;
	right: 10px;
	top: 80%;
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
	height: 40px;
	width: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
`;

export const BtnItem = styled(ButtonPrimary)`
	text-align: start;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
`;

export const Item = styled.section`
	margin-bottom: 0.2rem;
`;
