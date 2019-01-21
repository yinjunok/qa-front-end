import * as React from 'react';
import { MdModeEdit } from 'react-icons/md';
import { Button, ScrollToTop } from '../../components';
import * as css from './styles.less';

const SecondNav: React.FunctionComponent = () => (
  <div className={css.secondNav}>
		<ScrollToTop>
			{
				(toTop) => <h1 className={css.questionTitle} onClick={toTop}>为什么中国要启动土豆主粮化战略？</h1>
			}
		</ScrollToTop>
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