import * as React from 'react';
import { MdFiberManualRecord, MdKeyboardArrowDown } from 'react-icons/md';
import { Avatar } from '../../components';
import ActionBar from './ActionBar';
import * as css from './styles.less';

class Answer extends React.Component {
  render() {
    return (
      <div className={css.answerShell}>
        <div className={css.feedSource}>
          <span className={css.whoFeed}>vczh</span>
          <span className={css.action}>关注了</span>
          <MdFiberManualRecord size={5} />
          <span>16 小时前</span>
        </div>

        <div className={css.titleWrapper}>
          <h2 className={css.h2}>如果在上海陆家嘴地底发现世界上储量最大的油田，并且可以提供至少一百年全国的使用需求。政府部门怎么办？</h2>
        </div>

        <div className={css.authorWrapper}>
          <Avatar size={30} radius={3} />
          <span className={css.author}>真狗熊</span>
          <span className={css.authorDescription}>石油工人、非资深铲屎官</span>
        </div>

        <div className={css.contentWrapper}>
          <div className={css.miniContent}>
            因为谷歌在作恶。2010年前，谷歌或许曾是那个屠龙少年，
            现在嘛，Embrace Extend Extinguish玩得比谁都溜。
            仅举最近爆出的例子 谷…
            <button className={css.seeAll}>
              阅读全文
              <MdKeyboardArrowDown size={18} />
            </button>
          </div>

          <div className={css.content}>
          作者：dhchen
          链接：https://www.zhihu.com/question/290749687/answer/555533554
          来源：知乎
          著作权归作者所有，转载请联系作者获得授权。

          看着题主的清纯样，我得说这样一句话：

          你最该提防的人是那些看上去正确无比，但是实际上烂透的人。

          看看题主引用的老罗语录

          当你实力不够的时候去做高难度动作，这个出丑的概率是很高的。但是我呢，今天想借这个机会想跟你们说，你不要怕因为会出丑不去做高难度动作。只有那些挑战高难度动作的过程中出了丑还能咬牙坚持下来的才是改变这个世界的中坚力量
          这就是典型的话术，是一种老罗式的鸡贼。

          在我看来，做高难度动作其实和勇气没啥关系。老老实实去做也需要「勇气」：诚实的勇气。

          为什么这样说呢？这里举个例子，在我做研究生的时候会有考研的本科生过来和我聊天，我发现有些平时成绩不好的本科生定的目标起码都是北大和中科院，而平时成绩不错的学生往往反而定的目标没那么高。我的导师说：那些把目标定到北大的学生大概会天天睡懒觉，不好好学习。他们定这个目标有两个原因：

          第一，这些人有非常严重的投机心理，他们本质上看不起考研，甚至看不起数学本身。他们觉得靠着狗屎运他们有可能会「成功」。

          第二，万一失败了，他们也能给自己找个方便的借口：我失败了，但是我定的北大啊！失败也是一种勇气（滑稽）。

          和这些人一比，定下「合理目标」的那些考研学生知道一件事：如果他们失败，他们是没有任何遮羞布的。所以，这些人往往是最早起贪黑地学习的人。

          老罗是一个投机分子，他本质也看不起「手机行业」，对任何比他更商业的手机同行都大放厥词，把每个人都得罪一遍，甚至还说「我们都是方案整合商在那装什么孙子呢？」。

          如何评价“罗永浩谈国产手机黑科技:我们都是方案整合商在那装什么孙子呢”？
          这就是对他自己所在行业的蔑视，本质上反映的也是他的投机心理：他觉得靠着自己的鸡贼和小聪明，自己是有可能成功。所以你会发现他非常努力搞一些「创新」，但是对产品的质量和品控完全不上心。反正有理想主义的遮羞布，他就是失败了又如何？反正他个人捞到钱了，可以顺利上岸。

          我的意思不是说不能制定「高目标」，我也不认为制定高目标的都是骗子。我只是觉得高目标本身不值得夸耀和称赞，重点其实还得看他怎么做的。

          那么宣告要改变世界的老罗是怎么创业的呢？他给每个员工配备一万块的椅子，配备健身房，为了感动吴德州租了一家私人飞机。 按照他的逻辑，这是因为「谷歌」也这样干的。这就因果倒置：人家是谷歌因为公司成功，于是拿自己的利润给员工奢侈；并不因为给员工奢侈了，所以公司才获得成功。

          这种道理老罗不懂吗？我觉得他懂，他只是像一个没有明天的人一样拼命享受罢了。拿着投资人的钱，在公司草创之际随意挥霍。因为他大概心里也知道：这公司成不了，今朝有酒今朝醉吧。就好像那些知道自己会考研失败的人非要考北大一样，老罗嘴里天天喊着要改变世界，非要推出一个个颠覆世界的「创新」。

          本质上是这个人在投机罢了。

          而嘴巴上的理想主义就是老罗的一个遮羞布罢了。

          当然了，这个千疮百孔的世界也是老罗爱用的背锅侠，还有一个就是「中国国情」。

          老罗的粉丝很多也是这样的人，喜欢拿理想、世界和国情为他们的失败背锅，所以才能心心相惜吧。看着和自己一样鸡贼的老罗成功，他们能激发出巨大的希望。
          题主，千万别成为这样的大人。你要脚踏实地，以后你不管做什么，千万别拿伟大理想/世界/国情给自己遮羞。
          <p className={css.releaseTime}>发布于昨天 12:18</p>
          </div>
        </div>
     
        <ActionBar />
      </div>
    );
  }
}

export default Answer;