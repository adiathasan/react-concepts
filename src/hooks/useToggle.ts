import * as React from 'react';

export const useToggle = (init = false) => {
	const [value, setValue] = React.useState(init);

	const toggleValue = (given?: boolean) =>
		typeof given !== 'undefined' ? setValue(given) : setValue((o) => !o);

	return [value, toggleValue] as const;
};
