import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MdSearch } from "react-icons/md";
import { Input, Button, Card, List, RenderOuter } from '../../components';
import * as css from './styles.less';
import { debounce} from '../../utils';

interface ISearchBoxProps {
  showHistoryHint?: boolean;
}

interface ISearchBoxState {
  showHistory: boolean;
  historyPos: {
    left: number;
    top: number;
  }
}

const { CardHeader } = Card;

class SearchBox extends React.Component<ISearchBoxProps, ISearchBoxState> {
  static defaultProps = {
    showHistoryHint: true,
  }

  static getDerivedStateFromProps(nextProps: ISearchBoxProps, prevState: ISearchBoxState) {
    const { showHistoryHint } = nextProps;
    const { showHistory } = prevState;

    return {
      showHistory: showHistory && showHistoryHint
    }
  }

  private inputElement = React.createRef<Input>();
  state = {
    showHistory: false,
    historyPos: {
      left: 0,
      top: 0,
    }
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.inputElement.current as Input);
    if (node !== null) {
      node.addEventListener('click', (e: Event) => {
        e.stopImmediatePropagation();
      });
    }
    window.addEventListener('resize', this.resizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeHandler);
  }

  render() {
    const { showHistory, historyPos } = this.state;

    return (
      <div className={css.searchWrapper}>
        <div className={css.searchInputWrapper}>
          <Input
            ref={this.inputElement}
            onFocus={this.showHistoryHandler}
            placeholder='搜索感兴趣的内容...'
            rightIcon={
              <MdSearch size={24} className={css.searchIcon} />
            }
          />
          {
            showHistory &&
              <RenderOuter>
                <div className={css.history} style={{ top: historyPos.top, left: historyPos.left }}>
                    <Card>
                      <CardHeader className={css.searchHint}>历史记录</CardHeader>
                      <div>
                        <List><a target="__blank" href='https://www.baidu.com'>Baidu</a></List>
                        <List>2</List>
                        <List>3</List>
                      </div>
                    </Card>
                  </div>
              </RenderOuter>
          }
        </div>
        <Button>提问</Button>
      </div>
    );
  }

  private getInputPos = () => {
    const node = ReactDOM.findDOMNode(this.inputElement.current as Input);
    const rect = (node as HTMLDivElement).getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top + rect.height + 10
    }
  }

  private resizeHandler = debounce(() => {
    const { left, top } = this.getInputPos();
    this.setState({
      historyPos: {
        left,
        top,
      }
    })
  }, 100)

  private showHistoryHandler = () => {
    const { left, top } = this.getInputPos();

    this.setState({
      showHistory: true,
      historyPos: {
        left,
        top,
      }
    });
    document.documentElement.addEventListener('click', this.hiddenHistoryHandler);
  }

  private hiddenHistoryHandler = () => {
    this.setState({
      showHistory: false
    });

    document.documentElement.removeEventListener('click', this.hiddenHistoryHandler);
  }
}

export default SearchBox;
