import * as React from 'react';
import classnames from 'classnames';
import * as css from './styles.less';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'blue' | 'grey';
}

const Button: React.SFC<IButtonProps> = ({children, className, type, ...props}) => {
  return (
    <button
      className={classnames(css.button, css[type as string], className)}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'primary',
}

export default Button;
