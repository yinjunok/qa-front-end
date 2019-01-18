import * as React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Button } from '../../components';
import * as css from './styles.less';

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


const SecondNav: React.FunctionComponent = () => (
  <div className={css.secondNav}>
    <h1 className={css.questionTitle} onClick={toTop}>为什么中国要启动土豆主粮化战略？</h1>
    <div className={css.buttonGroup}>
      <Button>
        关注问题
      </Button>
      <Button type='blue'>
        <MdModeEdit className={css.buttonIcon} />
        写回答
      </Button>
    </div>
  </div>
);

export default SecondNav;