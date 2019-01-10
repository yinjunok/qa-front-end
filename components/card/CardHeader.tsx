import * as React from 'react';
import * as css from './styles.less';

export type CardHeaderProps = React.FunctionComponent<any>;

const CardHeader: CardHeaderProps = ({ children, className, ...props }) => (
  <div className={`${css.CardHeader} ${className}`} {...props}>
    {children}
  </div>
);

CardHeader.defaultProps = {
  className: '',
  children: null,
}

export default CardHeader;