import * as React from 'react';
import * as css from './styles.less';

const List: React.SFC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ children, className, ...props }) => {
  return (
    <div
      className={`${css.list} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default List;