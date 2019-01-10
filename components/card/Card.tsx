import * as React from 'react';
import CardHeader, { CardHeaderProps } from './CardHeader';
import CardSection, { CardSectionProps } from './CardSection';
import * as css from './styles.less';

interface ICardProps extends React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>> {
  CardHeader: CardHeaderProps;
  CardSection: CardSectionProps;
}

const Card: ICardProps = ({ className, children, ...props }) => (
  <div
    className={`${css.card} ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.CardHeader = CardHeader;
Card.CardSection = CardSection;

Card.defaultProps = {
  className: '',
}

export default Card;