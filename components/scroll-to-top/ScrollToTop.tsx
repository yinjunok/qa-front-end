import * as React from 'react';

interface IScrollToTopProps {
  children: (toTop: () => void) => JSX.Element;
}

const toTop = () => {
	let cur = window.pageYOffset;
	let target = 0;
	let speed = (target - cur) / 10;
	
	speed = speed > 0 ? Math.floor(speed) : Math.ceil(speed);
	
	let timer = setInterval(animate, 16);
	
	function animate() {
		cur += speed;
		window.scrollTo(0, cur);

		if (cur !== target) {
			cur = window.pageYOffset;
			speed = (target - cur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		} else {
			clearInterval(timer);
		}
	}
}

const ScrollToTop: React.FunctionComponent<IScrollToTopProps> = ({ children }) => children(toTop);

export default ScrollToTop;
