import React, { useMemo } from 'react';
import styled from 'styled-components';

import { EThemes } from '../../Theme/theme';
import { Api } from './form.types';

interface FormProps extends React.FormHTMLAttributes<any> {
	children: React.ReactNode;
	onSubmit?: (values: any) => void;
	// formProps: React.FormHTMLAttributes<any>;
}

export type SForm = ((c: FormProps) => JSX.Element | null) & {
	api?: Api;
};

const FormComponent = (api: Api) => {
	const Form: SForm = useMemo(
		() =>
			({ children, onSubmit, ...all }) => {
				if (!Form.api) return null;

				const { formContext, ...rest } = Form.api;

				return (
					<formContext.Provider value={{ ...rest }}>
						<FormStyled
							{...all}
							onSubmit={(e) => {
								e.preventDefault();
								onSubmit?.(rest.values);
							}}>
							{children}
						</FormStyled>
					</formContext.Provider>
				);
			},
		[]
	);

	Form.api = api;

	return React.memo(Form);
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
`;
