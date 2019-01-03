import * as React from 'react';
import * as css from './styles.less';

type SectionProps = React.FunctionComponent<React.HTMLAttributes<HTMLDivElement>>;

const Section: SectionProps = ({ children, className, ...props }) => (
  <div className={`${css.section} ${className}`} {...props}>{children}</div>
)

Section.defaultProps = {
  className: '',
}

export default Section;