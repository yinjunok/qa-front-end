import * as React from 'react';
import * as css from './styles.less';

interface ISearchBox extends React.InputHTMLAttributes<HTMLInputElement> {
  rightIcon: React.ReactNode | null;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default class SearchBox extends React.Component<ISearchBox, {}> {
  state = {
    isFocus: false,
  }

  static defaultProps = {
    rightIcon: null,
    onFocus: () => {},
    onBlur: () => {}
  }

  render() {
    const {
      rightIcon,
      className,
      onFocus,
      onBlur,
      ...props
    } = this.props;
    const { isFocus } = this.state;

    return (
      <div className={`${css.inputWrapper} ${isFocus ? css.inputActive : ''}`}>
        <input
          className={css.input}
          onFocus={(e: React.FocusEvent<HTMLInputElement>) => this.toggleFocusHandler(e)}
          onBlur={(e: React.FocusEvent<HTMLInputElement>) => this.toggleFocusHandler(e)}
          {...props}
        />
        {rightIcon}
      </div>
    );
  }

  private toggleFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    this.setState({
      isFocus: !this.state.isFocus,
    });
   
    if (e.type = 'focus') {
      this.setState({
        isFocus: !this.state.isFocus,
      });
      const { onFocus } = this.props;
      onFocus && onFocus(e);
    }

    if (e.type = 'blur') {
      const { onBlur } = this.props;
      onBlur && onBlur(e);
    }
  }
}
