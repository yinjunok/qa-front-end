import * as React from 'react';
import { Avatar } from '../../components';
import ActionBar from './ActionBar';
import * as css from './styles.less';

class Answer extends React.Component {
  render() {
    return (
      <div className={css.answerShell}>

        <div className={css.titleWrapper}>
          <h2 className={css.h2}>如果在上海陆家嘴地底发现世界上储量最大的油田，并且可以提供至少一百年全国的使用需求。政府部门怎么办？</h2>
        </div>

        <div className={css.authorWrapper}>
          <Avatar size={30} radius={3} />
          <span className={css.author}>真狗熊</span>
          <span className={css.authorDescription}>石油工人、非资深铲屎官</span>
        </div>

        <div className={css.contentWrapper}>
          <div className={css.content}>
            同学，你想多了，没什么好为难的。现有的钻井技术，宝山区打口井就能采陆家嘴的油....
            另外油气储层都是联通的，十有八九你在崇明采油，就能把陆家嘴的油吸走。
            而且你描述的这么大的油田不可能局限在一个河弯里，真有这么大的油田，整个上海都是矿区。
            你要是去过油田，会发现生活区旁边立几台抽油机是很正常的事，除了打井的时候有点吵，平常不影响生活的。
            而且这种粗笨的大型机械意料之外的很受小朋友喜欢。我儿子蹲在旁边能看一个小时。

            作者：真狗熊
            链接：https://www.zhihu.com/question/306199652/answer/555093160
            来源：知乎
            著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          </div>
        </div>
     
        <ActionBar />
      </div>
    );
  }
}

export default Answer;