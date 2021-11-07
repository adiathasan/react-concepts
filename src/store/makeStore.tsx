import * as React from 'react';

interface StoreProviderProps {
	children?: React.ReactNode;
}

const makeStore = <S, A>(init: S, reducer: (state: S, action: A) => S) => {
	const StoreContext = React.createContext<any>(null);
	const StoreDispatchContext = React.createContext<any>(null);

	const StoreProvider = (props: StoreProviderProps) => {
		const { children } = props;

		const [state, dispatch] = React.useReducer(reducer, init);

		return (
			<StoreContext.Provider value={state}>
				<StoreDispatchContext.Provider value={dispatch}>{children}</StoreDispatchContext.Provider>
			</StoreContext.Provider>
		);
	};

	const useStore = () => {
		const store = React.useContext<S>(StoreContext);

		if (!store) {
			throw new Error('makestore->fn: useStore must be used within a Provider');
		}

		return store;
	};

	const useDispatch = () => {
		const dispatch = React.useContext<React.Dispatch<A>>(StoreDispatchContext);

		if (!dispatch) {
			throw new Error('makestore->fn: useDispatch must be used within a Provider');
		}

		return dispatch;
	};

	return [StoreProvider, useStore, useDispatch] as const;
};

export default makeStore;
