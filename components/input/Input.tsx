import * as React from 'react';
import * as css from './styles.less';

interface ISearchBox extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon: React.ReactNode | null;
}

export default class SearchBox extends React.Component<ISearchBox, {}> {
  static defaultProps = {
    rightIcon: null,
  }

  render() {
    const { rightIcon, className, ...props } = this.props;
    return (
      <div className={css.inputWrapper}>
        <input className={css.input} {...props} />
        {rightIcon}
      </div>
    );
  }
}
