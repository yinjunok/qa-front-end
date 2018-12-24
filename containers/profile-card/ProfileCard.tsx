import * as React from 'react';
import { MdPhotoCamera, MdAdd } from 'react-icons/md';
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
            <div className={css.editAvatar}>
              <div className={css.editIcon}>
                <MdPhotoCamera color='#fff' size={35} />
                修改我的头像
              </div>
            </div>
          </div>
          <div className={css.userText}>
            <h1 className={css.username}>Cat Chen</h1>
            <p className={css.description}>如果你想应用里每个组件都处理路由对象，你可以使用withRouter高阶组件。</p>
          </div>

          <div className={css.buttonGroup}>
            <Button type='blue'>编辑个人资料</Button>
            <Button style={{ display: 'flex', alignItems: 'center' }}>
              <MdAdd size={20} color='#fff' />
              关注他
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProfileCard;
