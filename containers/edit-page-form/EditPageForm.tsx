import * as React from 'react';
import * as css from './styles.less';

interface IEditPageForm {
  field: string;
  // hint: React.ComponentType<{ showEdit: Function }>;
  hint:  React.SFC<{ showEdit: Function }>;
  editCom: React.ComponentType<{ hiddenEdit: Function }>; // (hiddenEdit: Function) => JSX.Element;
}

// 切换显隐状态的方法

class EditPageForm extends React.Component<IEditPageForm, {}> {
  state = {
    showEdit: false,
  }

  showEdit = () => {
    this.setState({
      showEdit: true,
    })
  }

  hiddenEdit = () => {
    this.setState({
      showEdit: false,
    });
  }

  render() {
    const { showEdit } = this.state;
    const { field, hint: Hint, editCom: Edit } = this.props;

    return (
      <div className={css.wrapper}>
        <p className={css.field}>
          {field}
        </p>
        <div>
          {
            showEdit
            ? <Edit hiddenEdit={this.hiddenEdit} />
            : <div onClick={this.showEdit}>{Hint}</div>
          }
        </div>
      </div>
    );
  }
}

export default EditPageForm;
