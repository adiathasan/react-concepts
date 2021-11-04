import { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useUpdateEffect = (cb: EffectCallback, deps?: DependencyList) => {
	const cbRef = useRef(cb);

	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			cbRef.current();
			return;
		}

		isMounted.current = true;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return { isMounted };
};
