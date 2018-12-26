import * as React from 'react';
import * as css from './styles.less';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'primary' | 'blue' | 'grey' | 'vote';
}

const Button: React.SFC<IButtonProps> = ({children, className, type, ...props}) => {
  return (
    <button
      className={`${css.button} ${css[type as string]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'primary',
  className: ''
}

export default Button;
