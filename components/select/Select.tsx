import * as React from 'react';
import List from '../list/List';
import Card from '../card/Card';
import RenderOuter from '../render-outer/RenderOuter';
import * as css from './styles.less';
import { debounce } from '../../utils';

interface ISelectProps {
  onChange?: (val: number | string) => void;
  options?: IOption[];
  value: number | string;
}

interface IOption {
  label?: string | number;
  value: string | number;
}

export default class Select extends React.Component<ISelectProps, {}> {
  static defaultProps = {
    onChange: () => {},
    options: [],
    value: null,
  }

  private selectEle = React.createRef<HTMLDivElement>();
  state = {
    showOptions: false,
    optionsPanel: {
      top: 0,
      left: 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render() {
    const { options, value } = this.props;
    const { showOptions, optionsPanel } = this.state;

    return (
      <div className={css.select} ref={this.selectEle}>
        <List className={css.option} onClick={this.toggleOptions}>
          <p className={css.selected}>
            {
              this.getSelected
            }
          </p>
        </List>
        <RenderOuter>
          {
            showOptions && 
              <Card className={css.optionsPanel} style={{ left: optionsPanel.left, top: optionsPanel.top }}>
                {
                  (options as IOption[]).map((option: IOption) => (
                    <List
                      key={option.value}
                      onClick={() => this.selectHandler(option.value)}
                      className={`${css.option} ${value === option.value ? css.checked : ''}`}
                    >
                      {option.label ? option.label : option.value}
                    </List>)
                  )
                }
              </Card>
          }
        </RenderOuter>
      </div>
    );
  }

  private resizeHandler = debounce(() => {
    const { left, top } = this.getPanelPos();

    this.setState({
      optionsPanel: {
        left,
        top,
      }
    });
  }, 100)

  private getPanelPos = () => {
    const parent = this.selectEle.current;

    const rect = (parent as HTMLDivElement).getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top + 35,
    }
  }

  private get getSelected() {
    const { options, value } = this.props;

    if (value === null) {
      return null;
    }

    let selected = (options as IOption[]).filter((option: IOption) => option.value === value);
    if (selected.length === 0) {
      return value;
    } else {
      return selected[0].label;
    }
  }

  private toggleOptions = () => {
    const { left, top } = this.getPanelPos();

    this.setState({
      optionsPanel: {
        left,
        top
      },
      showOptions: !this.state.showOptions
    });
  }

  private selectHandler = (val: number | string) => {
    const { onChange, value } = this.props;
    if (val === value) {
      return;
    }
    if (onChange) {
      onChange(val);
    }
    this.toggleOptions();
  }
}
