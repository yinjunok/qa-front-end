import * as React from 'react';
import * as css from './styles.less';

const CardSection: React.FunctionComponent = props => (
  <div className={css.CardSection}>{props.children}</div>
);

export default CardSection;
