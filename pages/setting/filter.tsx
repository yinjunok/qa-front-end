import * as React from 'react';
import { SettingLayout } from '../../layout';
import * as css from '../../styles/setting-page.less';

const { Section, EditButton } = SettingLayout;

class Filter extends React.Component {
  render() {
    return (
      <SettingLayout>
        <Section>
          <h2 className={css.pageTitle}>屏蔽</h2>
          <span className={css.desc}>用户黑名单/话题黑名单/不看他的动态</span>
        </Section>

        <Section>
          <div className={css.editItem}>
            <div>
              <p className={css.fieldTitle}>用户黑名单</p>
              <span className={css.desc}>
                查看或撤销已屏蔽用户
              </span>
            </div>
            <EditButton />
          </div>
        </Section>

        <Section>
          <div className={css.editItem}>
            <div>
              <p className={css.fieldTitle}>话题黑名单</p>
              <span className={css.desc}>
                查看或撤销已屏蔽话题
              </span>
            </div>
            <EditButton />
          </div>
        </Section>
      </SettingLayout>
    );
  }
}

export default Filter;
