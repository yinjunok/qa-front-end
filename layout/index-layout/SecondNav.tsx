import * as React from 'react';
import { Logo } from '../../components';
import { SearchBox } from '../../containers';
import * as css from './styles.less';

class SecondNav extends React.Component {

  render() {
    return (
      <div className={css.wrapper}>
        <Logo />
        <SearchBox />
      </div>
    );
  }
}

export default SecondNav;
