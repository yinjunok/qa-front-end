import * as React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { Button } from '../../components';
import * as css from './styles.less';

class Cover extends React.Component {
  render() {
    return (
      <div className={css.cover}>
        <Button type='grey' className={css.editCover}>
          <MdPhotoCamera size={18} style={{ marginRight: 5 }} />
          编辑封面图片
        </Button>
      </div>
    );
  }
}

export default Cover;