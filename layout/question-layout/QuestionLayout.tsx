import * as React from 'react';
// import NoSsr from '@material-ui/core/NoSsr';
// import "/node_modules/braft-editor/dist/index.css";
import 'braft-editor/dist/index.css';
import QuestionDetails from './QuestionDetails';
import { Editor } from '../../containers';
import * as css from './styles.less';

interface IQuestionLayoutProps {
  answers?: React.ReactNode;
  about?: React.ReactNode;
}

class QuestionLayout extends React.Component<IQuestionLayoutProps, {}> {
  render() {
    const { answers,about } = this.props;

    return(
      <>
        <QuestionDetails />
        <div className={css.answerArea}>
          <div className={css.answers}>
            <div className={css.editAnswer}>
              <Editor />
            </div>
            {answers}
          </div>
          <div className={css.about}>
            {about}
          </div>
        </div>
      </>
    )
  }
}

export default QuestionLayout;
