import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SearchIcon from '@material-ui/icons/Search';
import NoSsr from '@material-ui/core/NoSsr';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Input, Button, Card, List } from '../../components';
import * as css from './styles.less';

interface ISearchBoxProps extends WithStyles<typeof styles> {
  showHistoryHint?: boolean;
}

interface ISearchBoxState {
  showHistory: boolean;
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
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this.inputElement.current as Input);
    if (node !== null) {
      node.addEventListener('click', (e: Event) => {
        e.stopImmediatePropagation();
      });
    }
  }

  render() {
    const { classes } = this.props;
    const { showHistory } = this.state;

    return (
      <div className={css.searchWrapper}>
        <div className={css.searchInputWrapper}>
          <Input
            ref={this.inputElement}
            onFocus={this.showHistoryHandler}
            onClickCapture={(e: any) => {
              console.log(e.nativeEvent.type);
              e.stopPropagation();
            }}
            placeholder='搜索感兴趣的内容...'
            rightIcon={
              <NoSsr>
                <SearchIcon className={classes.icon} />
              </NoSsr>
            }
          />
          {
            showHistory
              && <div className={css.history}>
                  <Card>
                    <CardHeader className={css.searchHint}>历史记录</CardHeader>
                    <div>
                      <List><a target="__blank" href='https://www.baidu.com'>Baidu</a></List>
                      <List>2</List>
                      <List>3</List>
                    </div>
                  </Card>
                </div>
          }
        </div>
        <Button>提问</Button>
      </div>
    );
  }

  private showHistoryHandler = () => {
    this.setState({
      showHistory: true
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

const styles = () => ({
  icon: {
    color: '#8590A6',
    cursor: 'pointer',
  },
});

export default withStyles(styles)(SearchBox)
