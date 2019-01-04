import * as React from 'react';
import * as css from './styles.less';

type TagProps = React.FunctionComponent<React.HTMLAttributes<HTMLSpanElement>>;

const Tag: TagProps = ({ children, className, ...props }) => {
  return (
    <span className={`${css.tag} ${className}`} {...props}>{children}</span>
  );
}

Tag.defaultProps = {
  className: '',
}

export default Tag;