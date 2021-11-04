import * as React from 'react';

export const useDomRef = <T>() => {
	return React.useRef<T>(null);
};
