import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsSearch, BsFillQuestionCircleFill, BsPencilSquare } from 'react-icons/bs';
import '../../styles/components/home/Options.scss';

const Options = () => {
  return (
    <section className='options'>
      <Container>
        <Row xs={1} md={3} className='g-4'>
          <Col>
            <Card as={Link} to='/'>
              <Card.Title as='h1'>
                সমাধান <br /> খুঁজুন
              </Card.Title>
              <BsSearch className='card__icon' />
            </Card>
          </Col>
          <Col>
            <Card as={Link} to='/'>
              <Card.Title as='h1'>
                প্রশ্ন <br /> করুন
              </Card.Title>
              <BsFillQuestionCircleFill className='card__icon' />
            </Card>
          </Col>
          <Col>
            <Card as={Link} to='/'>
              <Card.Title as='h1'>
                আর্টিকেল <br /> লিখুন
              </Card.Title>
              <BsPencilSquare className='card__icon' />
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Options;
