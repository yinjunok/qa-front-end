import * as React from 'react';
import CardHeader, { CardHeaderProps } from './CardHeader';
import CardSection from './CardSection';
import * as css from './styles.less';

interface ICardProps extends React.SFC<React.HTMLAttributes<HTMLDivElement>> {
  CardHeader: CardHeaderProps;
  CardSection: React.SFC;
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

export default Card;