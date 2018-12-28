import * as React from 'react';
import Link from 'next/link'
import { MdEdit, MdAddCircleOutline } from 'react-icons/md';
import { TopNav, EditAvatar, Cover, EditPageForm } from '../containers';
import * as css from '../styles/edit-page.less';

const Hint: React.SFC = ({ children }) => (
  <>
    {children}
  </>
);

const EditIcon = () => <MdEdit size={16} style={{ marginLeft: 5 }} />

const AddIcon = () => <MdAddCircleOutline size={18} style={{ marginLeft: 5 }} />

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
                <Link href='/profile'>
                  <a>返回我的主页 ></a>
                </Link>
              </div>
            
              <EditPageForm
                field='性别'
                hint={<Hint>女<EditIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />

              <EditPageForm
                field='一句话介绍'
                hint={<Hint>填写<EditIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />

              <EditPageForm
                field='居住地'
                hint={<Hint>填写居住地<AddIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />

              <EditPageForm
                field='所在行业'
                hint={<Hint>请填写行业信息<AddIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />

              <EditPageForm
                field='职业经历'
                hint={<Hint>添加职业经历<AddIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />

              <EditPageForm
                field='个人简介'
                hint={<Hint>填写<AddIcon /></Hint>}
                editCom={() => (<div>1</div>)}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Edit;
