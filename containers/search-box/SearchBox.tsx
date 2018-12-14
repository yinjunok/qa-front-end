import * as React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import { Input, Button } from '../../components';
import * as css from './styles.less';

interface ISearchBox {

}

class SearchBox extends React.Component<ISearchBox & WithStyles<typeof styles>, {}> {
  render() {
    const { classes } = this.props;
    return (
      <div className={css.searchWrapper}>
        <div className={css.searchInputWrapper}>
          <Input
            placeholder='搜索感兴趣的内容...'
            rightIcon={<SearchIcon className={classes.icon} />}
          />
        </div>
        <Button>提问</Button>
      </div>
    );
  }
}

const styles = () => ({
  icon: {
    color: '#8590A6'
  },
});

export default withStyles(styles)(SearchBox)