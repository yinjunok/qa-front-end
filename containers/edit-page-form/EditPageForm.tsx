import * as React from 'react';
import * as css from './styles.less';

interface IEditPageForm {
  field: string;
  hint: React.ReactNode;
  editCom: (hiddenEdit: () => void) => JSX.Element;
}

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
    const { field, hint, editCom } = this.props;

    return (
      <div className={css.wrapper}>
        <p className={css.field}>
          {field}
        </p>
        <div className={css.editArea}>
          {
            showEdit
            ? editCom(this.hiddenEdit)
            : <p className={css.hint} onClick={this.showEdit}>
                {hint}
              </p>
          }
        </div>
      </div>
    );
  }
}

export default EditPageForm;
