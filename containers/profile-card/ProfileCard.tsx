import * as React from 'react';
import {  MdAdd, MdExpandLess } from 'react-icons/md';
import { Card, Button } from '../../components';
import EditAvatar from '../edit-avatar/EditAvatar';
import Cover from '../cover/Cover';
import * as css from './styles.less';

class ProfileCard extends React.Component {
  render() {
    return (
      <Card className={css.profileCard}>
      
        <Cover />

        <div className={css.userData}>
          <div style={{ marginTop: '-84px' }}>
            <EditAvatar />
          </div>
          <div className={css.introWrapper}>
            <div className={css.userText}>
              <h1 className={css.username}>Cat Chen</h1>
              <p className={css.oneWord}>如果你想应用里每个组件都处理路由对象</p>
            </div>

            <div className={css.intro}>
              <button className={css.seeDetails}>
                <MdExpandLess className={css.icon} size={20} />
                查看详细资料
              </button>

              <div className={css.details}>
                <div className={css.detailsItem}>
                  <span className={css.field}>所在行业</span>
                  <p className={css.info}>互联网</p>
                </div>

                <div className={css.detailsItem}>
                  <span className={css.field}>个人简介</span>
                  <p className={css.info}>
                    最初学音乐，后来学物理，再后来子承父业当了程序员。
                    ——我已委托“维权骑士”（http://rightknights.com）
                    为我的文章进行维权行动，有相关事宜可在微博与我联系。
                  </p>
                </div>

                <div className={css.detailsItem}>
                  <span className={css.field}>个人简介</span>
                  <p className={css.info}>
                    最初学音乐，后来学物理，再后来子承父业当了程序员。
                    ——我已委托“维权骑士”（http://rightknights.com）
                    为我的文章进行维权行动，有相关事宜可在微博与我联系。
                  </p>
                </div>
              </div>
            </div>

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
