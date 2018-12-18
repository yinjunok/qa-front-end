import * as React from 'react';

interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
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
    width: size,
    height: size,
    borderRadius: `${radius}%`,
    background: `url(${src}) center / contain no-repeat`,
  }
  
  return (
    <div
      className={`${className}`}
      style={{ ...style, ...sty }}
      {...props}
    >
      {children}
    </div>
  );
}

Avatar.defaultProps = {
  size: 30,
  radius: 50,
  src: '/static/components/avatar/default-avatar.jpg',
}

export default Avatar;
