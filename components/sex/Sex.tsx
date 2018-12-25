import * as css from './styles.less';

interface ISex extends React.SVGAttributes<SVGElement> {
  sex?: 'boy' | 'girl'
}

const Sex: React.SFC<ISex> = ({
  sex,
  className,
  ...props
}) => {
  let path;
  let viewBox;
  if (sex === 'boy') {
    viewBox = '0 0 14 14';
    path = <path d="M3.025 10.64c-1.367-1.366-1.367-3.582 0-4.95 1.367-1.366 3.583-1.366 4.95 0 1.367 1.368 1.367 3.584 0 4.95-1.367 1.368-3.583 1.368-4.95 0zm10.122-9.368c-.002-.414-.34-.75-.753-.753L8.322 0c-.413-.002-.746.33-.744.744.002.413.338.75.75.752l2.128.313c-.95.953-1.832 1.828-1.832 1.828-2.14-1.482-5.104-1.27-7.013.64-2.147 2.147-2.147 5.63 0 7.777 2.15 2.148 5.63 2.148 7.78 0 1.908-1.91 2.12-4.873.636-7.016l1.842-1.82.303 2.116c.003.414.34.75.753.753.413.002.746-.332.744-.745l-.52-4.073z" fill-rule="evenodd" />;
  }

  if (sex === 'girl') {
    viewBox = '0 0 12 16';
    path = <path d="M6 0C2.962 0 .5 2.462.5 5.5c0 2.69 1.932 4.93 4.485 5.407-.003.702.01 1.087.01 1.087H3C1.667 12 1.667 14 3 14s1.996-.006 1.996-.006v1c0 1.346 2.004 1.346 1.998 0-.006-1.346 0-1 0-1S7.658 14 8.997 14c1.34 0 1.34-2-.006-2.006H6.996s-.003-.548-.003-1.083C9.555 10.446 11.5 8.2 11.5 5.5 11.5 2.462 9.038 0 6 0zM2.25 5.55C2.25 3.48 3.93 1.8 6 1.8c2.07 0 3.75 1.68 3.75 3.75C9.75 7.62 8.07 9.3 6 9.3c-2.07 0-3.75-1.68-3.75-3.75z" fill-rule="evenodd" />
  }

  return (
    <svg
      width="14"
      height="16"
      viewBox={viewBox}
      stroke="currentColor"
      fill="currentColor"
      className={`${css.icon} ${className}`}
      aria-hidden="true"
      style={{ width: 14, height: 16 }}
      {...props}
    >
      <g>
        {path}
      </g>
    </svg>
  )
}

Sex.defaultProps = {
  className: '',
  sex: 'boy',
}

export default Sex;