import { Badge, Card, Col, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard';

const QuestionCard = () => {
  return (
    <Card>
      <Card.Body>
        <Row className="g-3">
          <Col md={3}>
            <Stack className="h-100" direction="horizontal" gap={3}>
              <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light rounded">
                <div>১২৩</div>
                <div>ভোট</div>
              </div>
              <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light rounded">
                <div>১২৩</div>
                <div>উত্তর</div>
              </div>
              <div className="w-100 h-100 d-flex flex-column align-items-center justify-content-center bg-light rounded">
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
                <UserCard />
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
