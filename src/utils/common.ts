export function joinClasses(array: string[]) {
	return array.join(' ');
}

export function generateId() {
	return Date.now(); // TODO: Improve this in the future
}
