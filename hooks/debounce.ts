export function useDebounce<T>(func: Function, delay: number): (...args) => void {
	let timeout: NodeJS.Timeout
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), delay)
	}
}
