import * as React from 'react';

const StoreContext = React.createContext<any>(null);
const StoreDispatchContext = React.createContext<any>(null);

interface StoreProviderProps<S, A> {
	init: S;
	reducer: (state: S, action: A) => S;
	children?: React.ReactNode;
}

const StoreProvider = <S, A>(props: StoreProviderProps<S, A>) => {
	const { children, init, reducer } = props;

	const [state, dispatch] = React.useReducer(reducer, init);

	return (
		<StoreContext.Provider value={state}>
			<StoreDispatchContext.Provider value={dispatch}>
				{children}
			</StoreDispatchContext.Provider>
		</StoreContext.Provider>
	);
};

export default StoreProvider;

export const useStore = <S,>() => {
	const store = React.useContext<S>(StoreContext);

	if (!store) {
		throw new Error('StoreProvider not found');
	}

	return store;
};

export const useStoreDispatch = <D,>() => {
	const dispatch = React.useContext<React.Dispatch<D>>(StoreDispatchContext);

	if (!dispatch) {
		throw new Error('StoreDispatchProvider not found');
	}

	return dispatch;
};
