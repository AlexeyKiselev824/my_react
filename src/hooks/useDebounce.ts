import { useCallback, useRef } from "react";

export default function useDebounce<T extends unknown[]>(
    callback: (...args: T) => void, delay: number
): (...args: T) => void {

    const timer = useRef();

    const debouncedCallback = useCallback((...args: T) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        // @ts-ignore
        timer.current = setTimeout(() => {
            callback.call(null, ...args);
        }, delay)
    }, [callback, delay]);

    return debouncedCallback;
}