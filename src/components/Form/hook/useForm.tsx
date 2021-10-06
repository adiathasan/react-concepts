import { createContext, useContext, useMemo, useReducer } from 'react';

import { InitState, Values } from '../form.types';
import FormComponent from '../FormComponent';

const initState = {
	values: {},
	setValues: () => {},
};

const formContext = createContext<InitState>(initState);

export const useForm = () => {
	const [values, setValues] = useReducer(
		(state: Values, newState: Values) => ({ ...state, ...newState }),
		{}
	);

	const api = useMemo(
		() => ({
			values,
			setValues,
			formContext,
		}),
		[values]
	);

	const Form = FormComponent(api);

	return { ...api, Form };
};

export const useFormContext = () => useContext(formContext);
