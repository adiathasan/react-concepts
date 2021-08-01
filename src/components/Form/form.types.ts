import { Dispatch, SetStateAction, Context } from 'react';

export type Values = Record<string, string>;

export interface InitState {
	values: Record<string, string>;
	setValues: Dispatch<SetStateAction<Values>>;
}

export interface Api extends InitState {
	formContext: Context<InitState>;
}
