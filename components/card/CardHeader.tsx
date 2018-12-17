import * as React from 'react';
import * as css from './styles.less';

export type CardHeaderProps = React.SFC<React.HTMLAttributes<HTMLDivElement>>;

const CardHeader: CardHeaderProps = ({ children, className, ...props}) => (
  <div className={`${css.CardHeader} ${className}`} {...props}>
    {children}
  </div>
)

export default CardHeader;