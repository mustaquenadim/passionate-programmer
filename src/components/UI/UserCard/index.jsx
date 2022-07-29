import { Card, Col, Image, Row } from 'react-bootstrap';
import userAvatar from '../../../assets/images/user-avatar.png';

const UserCard = () => {
  return (
    <Card bg={'light'} border="light" style={{ width: '18rem' }}>
      <Row>
        <Col xs={3}>
          <Image src={userAvatar} fluid roundedCircle />
        </Col>
        <Col xs={9}>
          <div className="h6">Mustaque Nadim</div>
          <div className="text-muted">answered 5 hours ago</div>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
