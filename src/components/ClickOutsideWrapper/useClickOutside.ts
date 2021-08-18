import { createRef, useCallback, useEffect, useRef, useState } from 'react';

const TIME_UNMOUT = 400;

const useClickOutside = (clickOutsideCb?: () => void) => {
	const [isOpen, setIsOpen] = useState(false);

	const [isUnmounted, setIsUnmounted] = useState(false);

	const toggle = useCallback(() => {
		let timeFn;

		if (timeFn) clearTimeout(timeFn);

		if (!isOpen) {
			setIsOpen(true);
			return;
		}

		setIsUnmounted(true);

		timeFn = setTimeout(() => {
			setIsOpen(false);
			setIsUnmounted(false);
		}, TIME_UNMOUT);
	}, [isOpen]);

	/*
	 *logic outside click
	 */

	const ref = createRef<HTMLDivElement>();

	const cbRef = useRef<typeof clickOutsideCb>();

	cbRef.current = clickOutsideCb;

	useEffect(() => {
		const onCllickOutside = (e: MouseEvent) => {
			if ((e.target as Node)?.contains(ref.current) && isOpen) {
				cbRef.current?.();
				toggle();
			}
		};

		document.addEventListener('click', onCllickOutside, true);

		return () => {
			document.removeEventListener('click', onCllickOutside, true);
		};
	}, [ref, toggle, cbRef, isOpen]);

	return { ref, toggle, isOpen, register: { isOpen, isUnmounted, ref } };
};

export default useClickOutside;
