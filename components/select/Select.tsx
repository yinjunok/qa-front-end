import * as React from 'react';
import List from '../list/List';
import * as css from './styles.less';

interface ISelectProps {
  onChange?: () => void;
  options?: IOption[];
  defaultValue?: string | number;
}

interface IOption {
  label?: string | number;
  value: string | number;
}

export default class Select extends React.Component<ISelectProps, {}> {
  static defaultProps = {
    onChange: () => {},
    options: [],
    defaultValue: null,
  }

  render() {
    const { options } = this.props;
    return (
      <div className={css.select}>
        <span className={css.selected}>
          {
            this.getSelected
          }
        </span>
        <div>
          {
            (options as IOption[]).map((option: IOption) => (
              <List key={option.value}>{option.label ? option.label : option.value}</List>)
            )
          }
        </div>
      </div>
    );
  }

  private get getSelected() {
    const { options, defaultValue } = this.props;

    if (defaultValue === null) {
      return null;
    }

    let selected = (options as IOption[]).filter((option: IOption) => option.value === defaultValue);
    if (selected.length === 0) {
      return defaultValue;
    } else {
      return selected[0].label;
    }
  }
}
