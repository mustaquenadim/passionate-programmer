import { Card, Col, Container, Row } from 'react-bootstrap';
import AskQuestionForm from '../../../forms/AskQuestionForm';

const Ask = () => {

  return (
    <Container>
      <h3>Ask a Question</h3>
      <Row>
        <Col md={9}>
          <AskQuestionForm />
        </Col>
        <Col md={3}>
        <Card>
          <Card.Header>প্রশ্ন করার নিয়মাবলী</Card.Header>
        </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ask;