import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AnswerForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <Form>
      <Form.Group className="mb-3" controlId="answerInput">
        <Form.Label>উত্তর প্রদান করুন</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="উত্তর প্রদান করুন" />
      </Form.Group>
      <Button type="submit" variant="primary">Post your Answer</Button>
    </Form>
  );
};

export default AnswerForm;