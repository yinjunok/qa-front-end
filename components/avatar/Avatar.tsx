import * as React from 'react';
import defaultAvatar from './asset/default-avatar.jpg';

interface IAvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  radius?: number;
  src?: string;
}

const Avatar: React.SFC<IAvatarProps> = ({
  src,
  size,
  style,
  radius,
  children,
  className,
  ...props
}) => {
  const sty = {
    display: 'inline-block',
    width: size,
    height: size,
    borderRadius: `${radius}px`,
    background: `url(${src}) center / contain no-repeat`,
  }
  
  return (
    <span
      className={`${className}`}
      style={{ ...style, ...sty }}
      {...props}
    >
      {children}
    </span>
  );
}

Avatar.defaultProps = {
  size: 30,
  radius: 30,
  src: defaultAvatar,
  style: {},
  className: '',
}

export default Avatar;
