import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { EThemes } from '../../Theme/theme';
import { useFormContext } from './hook/useForm';

export interface Props {
	name: string;
	placeholder?: string;
	type?: string;
	required?: boolean;
	validator?: {
		regex: RegExp;
		message: string;
	};
}

const Input: React.FC<Props> = (props) => {
	const { name, validator, placeholder, type, required } = props;

	const { setValues } = useFormContext();

	const [touched, setTouched] = useState(false);

	const [error, setError] = useState('');

	const [value, setValue] = useState('');

	useEffect(() => {
		setValues((old) => ({ ...old, [name]: value }));
	}, [value, name, setValues]);

	useEffect(() => {
		if (validator && touched) {
			const isValid = validator.regex.test(value);

			if (!isValid) setError(validator.message);
			else setError('');
		}
	}, [touched, validator, value]);

	return (
		<Wrapper>
			<InputStyled
				onFocus={() => {
					if (!touched) setTouched(true);
				}}
				required={required}
				name={name}
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={(e) => setValue(e.target.value)}
			/>
			<Error>{!!error && <p>{error}</p>}</Error>
		</Wrapper>
	);
};

export default Input;

export const InputStyled = styled.input`
	padding: 0.5rem 0.2rem;
	width: 100%;
	border-radius: 6px;
	border-color: transparent;
	outline: none;
	transition: 0.3s ease;
	background-color: ${({ theme }) => theme[EThemes.BG_PRIMARY]};
	color: ${({ theme }) => theme[EThemes.TEXT_PRIMARY]};
	&:focus {
		border-color: limegreen;
	}
`;

export const Error = styled.div`
	color: orangered;
	min-width: 10px;
	padding: 0.1rem;
	text-align: start;
	font-size: small;
	letter-spacing: 0.1rem;
`;

export const Wrapper = styled.div``;
