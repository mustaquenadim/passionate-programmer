import { Col, Container, Image, Row } from 'react-bootstrap';
import signUpImage from '../../assets/illustrations/signup-image.png';
import LoginForm from '../../forms/LoginForm';

const SignUp = () => {
  const handleSignUp = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col md={7} className="d-flex justify-content-center">
          <Image src={signUpImage} alt="Sign In Illustration" fluid />
        </Col>
        <Col md={5}>
          <LoginForm loginType={'signup'} onSubmit={handleSignUp} />
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
