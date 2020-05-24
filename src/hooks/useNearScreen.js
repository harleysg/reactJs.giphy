import { useRef, useState, useEffect } from "react";

export default function useNearScreen({ distance = "100px" } = {}) {
	const [isNearScreen, setShow] = useState(false);
	const $elRef = useRef();

	useEffect(handleObserver, [setShow, $elRef, distance]);

	return { isNearScreen, fromRef: $elRef };

	function handleObserver() {
		const observer = new IntersectionObserver(cbObserver, {
			rootMargin: distance,
		});

		observer.observe($elRef.current);

		return () => observer.disconnect();

		function cbObserver(entries, observe) {
			const { isIntersecting } = entries[0];
			if (isIntersecting) {
				setShow(true);
				observe.disconnect();
			}
		}
	}
}
