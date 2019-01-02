import * as React from 'react';
import Link from 'next/link';
import { withRouter, WithRouterProps, SingletonRouter } from 'next/router';
import * as css from './styles.less';

interface ITabLinkProps extends WithRouterProps {
  links: ILink[];
}

interface ILink {
  href: string;
  name: string;
}

class TabLink extends React.Component<ITabLinkProps> {
  static defaultProps = {
    links: [],
  }

  render() {
    const { router } = this.props;
    const { links } = this.props;
    
    return (
      <ul className={css.tab}>
        {
          (links as ILink[]).map((l: ILink) => (
            <li key={l.href} className={css.link}>
              <Link href={l.href}>
                <a className={`${(router as SingletonRouter).pathname === l.href ? css.active : '' }`}>{l.name}</a>
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default withRouter(TabLink)