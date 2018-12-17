import * as React from 'react';
import CardHeader, { CardHeaderProps } from './CardHeader';
import CardSection from './CardSection';
import * as css from './styles.less';

interface ICardProps extends React.SFC {
  CardHeader: CardHeaderProps;
  CardSection: React.SFC;
}

const Card: ICardProps = props => (<div className={css.card}>{props.children}</div>)

Card.CardHeader = CardHeader;
Card.CardSection = CardSection;

export default Card;