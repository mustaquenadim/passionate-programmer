import { Col, Container, Image, Row } from 'react-bootstrap';
import signInImage from '../../assets/illustrations/signin-image.png';
import LoginForm from '../../forms/LoginForm';

const SignUp = () => {
  const handleSignIn = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={7} className="d-flex justify-content-center">
          <Image src={signInImage} alt="Sign In Illustration" fluid />
        </Col>
        <Col md={5}>
          <LoginForm loginType={'signin'} onSubmit={handleSignIn} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
