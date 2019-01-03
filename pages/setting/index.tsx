import * as React from 'react';
import { SettingLayout } from '../../layout';
import * as css from '../../styles/setting-page.less';

const { Section, EditButton } = SettingLayout;

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

          <div className={css.form}>
            <Section>
              <div className={css.editItem}>
                <div>
                  <p className={css.fieldTitle}>密码</p>
                  <span className={css.desc}>
                    已设置
                  </span>
                </div>
                <EditButton />
              </div>
            </Section>

            <Section>
              <div className={css.editItem}>
                <div>
                  <p className={css.fieldTitle}>绑定邮箱</p>
                  <span className={css.desc}>
                    ***@gmail.com
                  </span>
                </div>
                <EditButton />
              </div>
            </Section>
          </div>
        </Section>
      </SettingLayout>
    );
  }
}


export default Setting;
