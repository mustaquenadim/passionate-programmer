import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const LoginForm = ({ loginType = 'signup', onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginType === 'signup' && (
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="firstNameInput">
              <FloatingLabel controlId="firstNameInput" label="First Name">
                <Form.Control
                  className="border-0 border-bottom rounded-0 shadow-none"
                  type="text"
                  placeholder="Enter First Name"
                  {...register('firstName', { required: true, maxLength: 20 })}
                />
              </FloatingLabel>
              {errors.firstName && (
                <Form.Text className="text-danger">
                  First Name field is required
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastNameInput">
              <FloatingLabel controlId="lastNameInput" label="Last Name">
                <Form.Control
                  className="border-0 border-bottom rounded-0 shadow-none"
                  type="text"
                  placeholder="Enter Last Name"
                  {...register('lastName', { required: true, maxLength: 20 })}
                />
              </FloatingLabel>
              {errors.lastName && (
                <Form.Text className="text-danger">
                  Last Name field is required
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
      )}

      {loginType === 'signup' && (
        <Form.Group className="mb-3" controlId="usernameInput">
          <FloatingLabel controlId="usernameInput" label="Username">
            <Form.Control
              className="border-0 border-bottom rounded-0 shadow-none"
              type="text"
              placeholder="Enter Username"
              {...register('username', {
                required: true,
                pattern: /^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,
              })}
            />
          </FloatingLabel>
          {errors.username && (
            <Form.Text className="text-danger">Username is invalid</Form.Text>
          )}
        </Form.Group>
      )}

      <Form.Group className="mb-3" controlId="emailInput">
        <FloatingLabel controlId="emailInput" label="Email address">
          <Form.Control
            className="border-0 border-bottom rounded-0 shadow-none"
            type="email"
            placeholder="Enter Email"
            {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          />
        </FloatingLabel>
        {errors.email && (
          <Form.Text className="text-danger">Email is invalid</Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="passwordInput">
        <FloatingLabel controlId="passwordInput" label="Password">
          <Form.Control
            className="border-0 border-bottom rounded-0 shadow-none"
            type="password"
            placeholder="Enter Password"
            {...register('password', {
              required: true,
              pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
            })}
          />
        </FloatingLabel>
        {errors.password && (
          <Form.Text className="text-danger">Password is invalid</Form.Text>
        )}
      </Form.Group>

      {loginType === 'signup' && (
        <Form.Group className="mb-3" controlId="confirmPasswordInput">
          <FloatingLabel
            controlId="confirmPasswordInput"
            label="Confirm Password"
          >
            <Form.Control
              className="border-0 border-bottom rounded-0 shadow-none"
              type="password"
              placeholder="Enter Confirm Password"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => {
                  if (value !== watch('password'))
                    return 'Passwords do no match';
                },
              })}
            />
          </FloatingLabel>
          {errors.confirmPassword && (
            <Form.Text className="text-danger">
              Confirm Password is invalid
            </Form.Text>
          )}
        </Form.Group>
      )}

      {loginType === 'signin' && (
        <Form.Group className="mb-3" controlId="rememberCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
      )}

      <Button variant="primary" type="submit" className="w-100">
        {loginType === 'signup' ? 'Sign Up' : 'Sign In'}
      </Button>
    </Form>
  );
};

export default LoginForm;
