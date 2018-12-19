import * as React from 'react';
import { MdEdit, MdDescription, MdRecordVoiceOver } from "react-icons/md";
import { Card } from '../../components';
import { TopNav } from '../../containers';
import SecondNav from './SecondNav';
import * as css from './styles.less';

class IndexLayout extends React.Component {
  render() {
    return (
      <div>
        <TopNav secondNav={<SecondNav />} />
        <main className={css.main}>
          <div className={css.content}></div>
          <div className={css.sidebar}>
            <Card>
              <div className={css.iconPanel}>
                <a className={css.iconBlock}>
                  <MdDescription size={16} className={css.icon} />
                  <span>写回答</span>
                </a>
                <a className={css.iconBlock}>
                  <MdEdit size={16} className={css.icon} />
                  <span>写文章</span>
                </a>
                <a className={css.iconBlock}>
                  <MdRecordVoiceOver size={16} className={css.icon} />
                  <span>写想法</span>
                </a>
              </div>
            </Card>

            <Card>
              <div className={css.iconPanel}>
                <a className={css.iconBlock}>
                  <MdDescription size={16} className={css.icon} />
                  <span>写回答</span>
                </a>
                <a className={css.iconBlock}>
                  <MdEdit size={16} className={css.icon} />
                  <span>写文章</span>
                </a>
                <a className={css.iconBlock}>
                  <MdRecordVoiceOver size={16} className={css.icon} />
                  <span>写想法</span>
                </a>
              </div>
            </Card>
          </div>
        </main>
      </div>
    )
  }
}

export default IndexLayout;