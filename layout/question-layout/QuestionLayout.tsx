import * as React from 'react';
import QuestionDetails from './QuestionDetails';
import * as css from './styles.less';

interface IQuestionLayoutProps {
  answers: React.ReactNode;
  about: React.ReactNode;
}

class QuestionLayout extends React.Component<IQuestionLayoutProps, {}> {
  render() {
    return(
      <>
        <QuestionDetails />
        <div className={css.answerArea}>
          <div className={css.answers}></div>
          <div className={css.about}></div>
        </div>
      </>
    )
  }
}

export default QuestionLayout;
