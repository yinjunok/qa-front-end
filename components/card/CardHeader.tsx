import * as React from 'react';
import * as css from './styles.less';

const CardHeader: React.SFC = props => (
  <div className={css.CardHeader}>
    {props.children}
  </div>
)

export default CardHeader;