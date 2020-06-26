import { useRef, useState, useEffect } from "react";

export default function useNearScreen({ distance = "100px", extRef = null, once = true } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const $elRef = useRef();
	
	useEffect(function () {	
		const element = extRef ? extRef.current : $elRef.current
		let observer
		Promise.resolve(
		  typeof IntersectionObserver !== 'undefined'
			? IntersectionObserver
			: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: distance
			})
			element && observer.observe(element)
		})
	
	
		return () => observer && observer.disconnect();

		function onChange(entries, observer) {
			const el = entries[0]
			if (el.isIntersecting) {
				setShow(true)
				once && observer.disconnect()
			} else {
				!once && setShow(false)
			}
		}
	})
	
	return {isNearScreen, fromRef: $elRef}
}
