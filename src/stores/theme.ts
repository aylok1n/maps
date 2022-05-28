import { writable } from "svelte/store";

const isDarkTheme = writable<boolean>(localStorage.isDarkTheme === 'true');
isDarkTheme.subscribe((val) => localStorage.isDarkTheme = String(val));


export const toggle = () => {
  isDarkTheme.update((isDark) => !isDark);
}

export default isDarkTheme
