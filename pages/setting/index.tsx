import * as React from 'react';
import { SettingLayout } from '../../layout';
import * as css from '../../styles/setting-page.less';

const Section: React.SFC = (props) => <section className={css.section}>{props.children}</section>

class Setting extends React.Component {
  render() {
    return (
      <SettingLayout>
        <Section>
          <h2 className={css.pageTitle}>账户与密码</h2>
          <span className={css.desc}>帐户设置</span>
        </Section>
        <Section>
          <h4 className={css.subTitle}>账户设置</h4>
          <span className={css.desc}>
            绑定手机和邮箱，并设置密码，帐号更安全 <br/>
            注意：为保证帐号安全，需进行二次验证
          </span>
        </Section>
      </SettingLayout>
    );
  }
}

export default Setting;
