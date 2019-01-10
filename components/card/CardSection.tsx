import * as React from 'react';
import * as css from './styles.less';

type CardSectionProps = React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>>;

const CardSection: CardSectionProps = ({ children, className, ...props}) => (
  <div className={`${css.CardSection} ${className}`} {...props}>
    {children}
  </div>
);

CardSection.defaultProps = {
  className: '',
  children: null,
}

export default CardSection;
