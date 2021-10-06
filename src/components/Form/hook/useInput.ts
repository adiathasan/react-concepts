import React, { useCallback, useState } from 'react';

const useInput = (init: string = '') => {
	const [value, setValue] = useState(() => init);

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value),
		[]
	);

	return { value, onChange };
};

export default useInput;
