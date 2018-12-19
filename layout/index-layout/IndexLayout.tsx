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
              <MdDescription />
              <MdEdit />
              <MdRecordVoiceOver />
            </Card>
          </div>
        </main>
      </div>
    )
  }
}

export default IndexLayout;