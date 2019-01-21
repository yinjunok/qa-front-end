import * as React from 'react';
import { Card, Avatar } from '../../components';

const { CardHeader, CardSection } = Card;

class AuthorCard extends React.Component {
  render() {
    return (
      <Card>
        <CardHeader>关于作者</CardHeader>
        <CardSection>
          <Avatar />
          <p>龙牙</p>
          <p>请叫我小学生</p>
        </CardSection>
        <CardSection>
          <div>
            回答
          </div>
          <div>
            关注者
          </div>
        </CardSection>
      </Card>
    );
  }
}

export default AuthorCard;
