import { Badge, Card, Col, Image, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import userAvatar from '../../assets/images/user-avatar.png';

const QuestionCard = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="g-3">
          <Col md={3}>
            <Stack className="h-100 text-center" direction="horizontal" gap={3}>
              <div className="w-100">
                <div>১২৩</div>
                <div>ভোট</div>
              </div>
              <div className="vr" />
              <div className="w-100 mx-auto">
                <div>১২৩</div>
                <div>উত্তর</div>
              </div>
              <div className="vr" />
              <div className="w-100">
                <div>১২৩</div>
                <div>দেখেছেন</div>
              </div>
            </Stack>
          </Col>
          <Col md={9}>
            <Stack gap={1}>
              <Card.Title as={Link} to="/" className="h5 text-decoration-none">
                আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ল্যাঙ্গুয়েজ দিয়ে শুরু করা
                উচিত?
              </Card.Title>
              <Stack direction="horizontal" gap={1}>
                <Badge bg="secondary">beginner</Badge>
                <Badge bg="secondary">intermediate</Badge>
              </Stack>
              <div className="d-flex align-items-center justify-content-end">
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
              </div>
            </Stack>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default QuestionCard;

{
  /* <Card className='question'>
<Row>
  <Col md={3} className='d-flex'>
    <div>১২৩টি ভোট</div>
    <div>১২টি উত্তর</div>
    <div>১২৩৪জন দেখেছেন</div>
  </Col>
  <Col md={9}>
    <div>
      <Link to='/'>আমি প্রোগ্রামিং শিখতে চাই। প্রথমে কোন ল্যাঙ্গুয়েজ দিয়ে শুরু করা উচিত?</Link>
      <ul>
        <li>beginner</li>
        <li>intermediate</li>
        <li>advanced</li>
      </ul>
    </div>
    <div>
      <div className='question__user'>
        <Link to='/' className='question__user__name'>
          Mustaque Nadim
        </Link>
        <p className='question__user__askingTime'>23</p>
      </div>
      <Link to='/'>
        <img src='' alt='user_profile_img' className='question__user__img' />
      </Link>
    </div>
  </Col>
</Row>
</Card> */
}
