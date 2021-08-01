import React, { useMemo } from 'react';
import styled from 'styled-components';

import { EThemes } from '../../Theme/theme';
import { Api } from './form.types';

interface FormProps {
	children: React.ReactNode;
	onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type SForm = ((c: FormProps) => JSX.Element) & {
	api?: Api;
};

const FormComponent = (api: Api) => {
	const Form: SForm = useMemo(
		() =>
			({ children, onSubmit }) => {
				if (!Form.api) return <></>;

				const { formContext, ...values } = Form.api;

				return (
					<formContext.Provider value={{ ...values }}>
						<FormStyled
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit?.(e);
							}}>
							{children}
						</FormStyled>
					</formContext.Provider>
				);
			},
		[]
	);

	Form.api = api;

	return Form;
};

export default FormComponent;

export const FormStyled = styled.form`
	background-color: ${({ theme }) => theme[EThemes.BG_SECONDARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	padding: 2rem;
	border-radius: 6px;
	text-align: center;
	min-width: 300px;
	box-shadow: 0 0 15px -2px rgba(0, 0, 0, 0.1);
`;
