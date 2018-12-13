import * as React from 'react';
import css from './card.less';

interface ICardProps {
  children: React.ReactNode;
}

const Card: React.SFC<ICardProps> = props => (<div className={css.card}>{props.children}</div>)


export default Card;