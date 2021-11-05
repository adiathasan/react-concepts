import * as React from 'react';

const StoreContext = React.createContext<any>(null);
const StoreDispatchContext = React.createContext<any>(null);

interface StoreProviderProps {
	children?: React.ReactNode;
}

const makeStore = <S, A>(init: S, reducer: (state: S, action: A) => S) => {
	const StoreProvider = (props: StoreProviderProps) => {
		const { children } = props;

		const [state, dispatch] = React.useReducer(reducer, init);

		return (
			<StoreContext.Provider value={state}>
				<StoreDispatchContext.Provider value={dispatch}>
					{children}
				</StoreDispatchContext.Provider>
			</StoreContext.Provider>
		);
	};

	const useStore = () => {
		const store = React.useContext<S>(StoreContext);

		if (!store) {
			throw new Error('StoreProvider not found');
		}

		return store;
	};

	const useDispatch = () => {
		const dispatch = React.useContext<React.Dispatch<A>>(StoreDispatchContext);

		if (!dispatch) {
			throw new Error('StoreDispatchProvider not found');
		}

		return dispatch;
	};

	return [StoreProvider, useStore, useDispatch] as const;
};

export default makeStore;
