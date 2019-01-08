import * as React from "react";
import BraftEditor from "braft-editor";
import "braft-editor/dist/index.css";

const isBrowser = typeof window !== 'undefined';

class Editor extends React.Component {
  state = {
    // 创建一个空的editorState作为初始值
    editorState: BraftEditor.createEditorState(null)
  };

  handleEditorChange = (editorState: any) => {
    this.setState({ editorState });
  };
  
  render() {
    const { editorState } = this.state;

    if (isBrowser) {
      return (
        <div className="my-component">
          <BraftEditor
            value={editorState}
            onChange={this.handleEditorChange}
          />
        </div>
      );
    }

    return null;
  }
}

export default Editor;
