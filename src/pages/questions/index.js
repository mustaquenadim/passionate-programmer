import React from 'react';
import { Container, Stack } from 'react-bootstrap';
import QuestionCard from '../../components/common/Question';

const Questions = () => {
  return (
    <Container>
      <h2>All Questions</h2>
      <Stack gap={4}>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </Stack>
    </Container>
  );
};

export default Questions;