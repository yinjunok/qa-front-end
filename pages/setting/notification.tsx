import * as React from 'react';
import { SettingLayout } from '../../layout';
import * as css from '../../styles/setting-page.less';

const { Section, EditButton } = SettingLayout;

class Notification extends React.Component {
  render() {
    return (
      <SettingLayout>
        <Section>
          <h2 className={css.pageTitle}>消息</h2>
          <span className={css.desc}>私信设置/邀请设置/赞同与赞赏/关注</span>
        </Section>

        <Section>
          <div className={css.editItem}>
            <div>
              <p className={css.fieldTitle}>邀请/评论消息设置</p>
              <span className={css.desc}>
                有人对我发出邀请时，我会收到消息通知
              </span>
            </div>
            <EditButton />
          </div>
        </Section>

        <Section>
          <div className={css.editItem}>
            <div>
              <p className={css.fieldTitle}>赞同/赞赏消息设置</p>
              <span className={css.desc}>
                有人对我赞同或赞赏时，我会收到消息通知
              </span>
            </div>
            <EditButton />
          </div>
        </Section>

        <Section>
          <div className={css.editItem}>
            <div>
              <p className={css.fieldTitle}>关注消息设置</p>
              <span className={css.desc}>
                我的关注有新动态时，我会收到消息通知
              </span>
            </div>
            <EditButton />
          </div>
        </Section>
      </SettingLayout>
    );
  }
}

export default Notification;
