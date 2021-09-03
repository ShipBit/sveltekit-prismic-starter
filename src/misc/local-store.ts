import { writable } from 'svelte/store';

export const stored_object = writable(
	typeof localStorage !== 'undefined' && localStorage.stored_object
		? JSON.parse(localStorage.stored_object)
		: {}
);

if (typeof localStorage !== 'undefined') {
	stored_object.subscribe((val) => localStorage.setItem('stored_object', JSON.stringify(val)));
}
