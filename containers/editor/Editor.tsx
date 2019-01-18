import * as React from "react";
import dynamic from 'next/dynamic';
import { BuiltInControlType, BraftEditorProps } from 'braft-editor';
import { Card, Button } from '../../components';
import EditorHeader from './EditorHeader';
import * as css from './styles.less';

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

const isBrowser = typeof window !== 'undefined';

// <link rel="stylesheet" href="/static/braft-editor/braft-editor.css" /> 
if (isBrowser) {
  const linkEle = document.createElement('link');
  linkEle.rel = 'stylesheet';
  linkEle.href = '/static/braft-editor/braft-editor.css';
  document.head.appendChild(linkEle);
}

class Editor extends React.Component {
  state = {
    anonymous: false,
  }

  render() {
    const { anonymous } = this.state;

    return (
      <Card className={css.container}>
        <EditorHeader anonymous={anonymous} toggle={this.toggleAnonymous} />
        <BraftEditor controls={controls} />
        <div className={css.buttonGroup}>
          <Button type='grey'>存草稿</Button>
          <Button style={{ marginLeft: 10 }}>提交回答</Button>
        </div>
      </Card>
    );
  }

  // 切换匿名
  private toggleAnonymous = () => {
    this.setState({
      anonymous: !this.state.anonymous,
    });
  }
}

export default Editor;
