import * as React from 'react';

interface IAvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  radius?: number;
  src?: string;
}

const Avatar: React.SFC<IAvatarProps> = ({ children,  className, style, ...props }) => {
  const sty = {
    width: props.size,
    height: props.size,
    borderRadius: `${props.radius}%`,
    background: `url(${props.src}) center / contain no-repeat`,
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
  src: 'https://pic1.zhimg.com/da8e974dc_xl.jpg',
}

export default Avatar;
