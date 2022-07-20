import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../components/home/Banner';
import Questions from '../components/home/Questions';

const Home = () => {
  return (
    <>
      <Banner />
      {/* <Options /> */}
      <Container className="my-3">
        <Row className="g-4">
          <Col md={9}>
            <Questions />
          </Col>
          <Col md={3}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
