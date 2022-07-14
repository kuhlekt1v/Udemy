import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
	// First check if value saved to local storage.
	const [value, setValue] = useState(() => {
		try {
			const localValue = window.localStorage.getItem(key);
			return localValue ? JSON.parse(localValue) : initialValue;
		} catch (error) {
			return initialValue;
		}
	});

	// Update local storage if any change.
	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
