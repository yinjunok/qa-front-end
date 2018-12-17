import * as React from 'react';
import * as css from './styles.less';

interface ISwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.FormEvent<HTMLInputElement>, checked: boolean) => void;
}

export default class Switch extends React.Component<ISwitchProps, {}> {
  static defaultProps = {
    checked: true,
    disabled: false,
    onChange: () => {}
  }

  render() {
    const { checked } = this.props;

    return (
      <div className={css.switch}>
        <span className={`${css.checkboxBg} ${checked && css.open}`} />
        <span className={`${css.dot} ${checked ? css.open : css.close}`} />
        <input
          type='checkbox'
          checked={checked}
          className={css.checkbox}
          onChange={this.changeHandler}
        />
        
      </div>
    );
  }

  private changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const checked = !this.props.checked;

    if (onChange) {
      onChange(event, checked);
    }
  }
}
