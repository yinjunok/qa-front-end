import * as React from 'react';
import { Card, Avatar } from '../../components';
import * as css from './styles.less';

const { CardHeader } = Card;

interface IEditorHeaderProps {
  anonymous: boolean;
  toggle: () => void;
} 

const EditorHeader: React.FunctionComponent<IEditorHeaderProps> = ({
  anonymous,
  toggle
}) => {
  return (
    <CardHeader className={css.header}>
      {
        anonymous
          ? <div className={css.avatar}>
              <Avatar size={38} />
              <p className={css.name}>匿名用户</p>
            </div>
          : <div className={css.avatar}>
              <Avatar size={38} />
              <p className={css.name}>碉堡的id</p>
            </div>
      }
      <button onClick={toggle} className={css.anonymous}>
        {
          anonymous
            ? '使用实名身份回答' 
            : '使用匿名身份回答'
        }
      </button>
    </CardHeader>
  );
};

export default EditorHeader;
