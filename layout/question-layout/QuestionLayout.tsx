import * as React from 'react';
import { Tag } from '../../components';
import { TopNav } from '../../containers';
import * as css from './styles.less';

class QuestionLayout extends React.Component {
  render() {
    return(
      <>
        <TopNav />
        <div className={css.descWrapper}>
          <div className={css.desc}>
            <div className={css.main}>
              <div className={css.topics}>
                <Tag className={css.tag}>农业</Tag>
                <Tag className={css.tag}>粮食危机</Tag>
              </div>
              <h1 className={css.questionTitle}>
                为什么中国要启动土豆主粮化战略？
              </h1>
              <div className={css.details}>
                问题中的销毁指的不是一个农民销毁，而是一群。
                假设某地区土豆由该地区中某土豆种植地区提供，
                自给自足，该地区交通不便，从外面进土豆成本较高，
                今天土豆丰收后，土豆价格下降，农民收入随之下降。
                请用相关理论解释该现象;假设农民知道谷贱伤农，
                那么他为什么不销毁部分土豆，从而降低土豆产量，
                保证自己的收入？在历史上有没有过类似的事件呢？
              </div>
            </div>
            <div className={css.quesData}>
              <div className={css.data}>
                <p className={css.filed}>关注者</p>
                <p className={css.number}>9,999</p>
              </div>
              <div className={css.data}>
                <p className={css.filed}>被浏览</p>
                <p className={css.number}>4,430,370</p>
              </div>
            </div>
          
            
          </div>
        </div>
      </>
    )
  }
}

export default QuestionLayout;
