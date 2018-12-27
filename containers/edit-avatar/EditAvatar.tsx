import * as React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { Avatar } from '../../components';
import * as css from './styles.less';

class EditAvatar extends React.Component {
  render() {
    return (
      <div className={css.avatar}>
        <Avatar size={160} radius={8} />
        <div className={css.editAvatar}>
          <div className={css.editIcon}>
            <MdPhotoCamera color='#fff' size={35} />
            修改我的头像
          </div>
        </div>
      </div>
    );
  }
}

export default EditAvatar;