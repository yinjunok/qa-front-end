import * as React from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { Card, Button, Avatar } from '../../components';
import * as css from './styles.less';

class ProfileCard extends React.Component {
  render() {
    return (
      <Card className={css.profileCard}>
        <div className={css.cover}>
          <Button type='grey' className={css.editCover}>
            <MdPhotoCamera size={18} style={{ marginRight: 5 }} />
            编辑封面图片
          </Button>
        </div>
        <div className={css.userData}>
          <div className={css.avatar}>
            <Avatar size={160} radius={8} />
            <div className={css.editAvatar}></div>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProfileCard;
