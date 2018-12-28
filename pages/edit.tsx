import * as React from 'react';
import Link from 'next/link'
import { TopNav, EditAvatar, Cover, EditPageForm } from '../containers';
import * as css from '../styles/edit-page.less';

class Edit extends React.Component {
  render() {
    return (
      <div>
        <TopNav />
        <div className={css.main}>
          <Cover />
          <div className={css.editArea}>
            <div className={css.left}>
              <div className={css.avatar}>
                <EditAvatar />
              </div>
            </div>
            <div className={css.right}>
              <div className={css.editHeader}>
                <h1 className={css.name}>名字</h1>
                <Link>
                  <a>返回我的主页 ></a>
                </Link>
              </div>
            
              <EditPageForm field='1' hint={() => (<div>1</div>)} editCom={() => (<div>1</div>)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Edit;
