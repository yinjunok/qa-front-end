import * as React from 'react';
import * as css from './styles.less';


class AnswerArea extends React.Component {
  render() {
    return (
      <div className={css.answerArea}>
        <div className={css.answers}></div>
        <div className={css.about}></div>
      </div>
    );
  }
}

export default AnswerArea;