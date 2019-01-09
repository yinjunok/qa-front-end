import * as React from "react";
import dynamic from 'next/dynamic';
import { BuiltInControlType, BraftEditorProps } from 'braft-editor';
import { Card, Avatar, Button } from '../../components';
import * as css from './styles.less';

const { CardHeader } = Card;

const BraftEditor: React.ComponentType<BraftEditorProps> = dynamic(import('braft-editor') as any, {
  ssr: false
});

const controls: BuiltInControlType[] = [
  'headings',
  'bold',
  'italic',
  'list-ol',
  'list-ul',
  'hr',
  'separator',
  'blockquote',
  'code',
  'media',
  'separator',
  'link',
  'separator',
  'remove-styles',
  'fullscreen',
];

class Editor extends React.Component {
  render() {
    return (
      <Card className={css.container}>
        <CardHeader>
          <div className={css.avatar}>
            <Avatar size={38} />
            <p className={css.name}>碉堡的id</p>
          </div>
          <button className={css.anonymous}>使用匿名身份回答</button>
        </CardHeader>
        <BraftEditor controls={controls} />
        <div className={css.buttonGroup}>
          <Button type='grey'>存草稿</Button>
          <Button style={{ marginLeft: 10 }}>提交回答</Button>
        </div>
      </Card>
    );
  }
}

export default Editor;
