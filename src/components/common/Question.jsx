import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Question = () => {
  return (
    <Card className='question'>
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
    </Card>
  );
};

export default Question;
