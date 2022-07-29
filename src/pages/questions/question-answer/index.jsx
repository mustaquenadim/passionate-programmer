import { Col, Container, Row, Stack } from 'react-bootstrap';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import AnswerCard from '../../../components/UI/AnswerCard';
import UserCard from '../../../components/UI/UserCard';
import AnswerForm from '../../../forms/AnswerForm';

const QuestionAnswer = () => {
  return (
    <Container>
      <h1 className="h3">
        Error related to The argument type 'Object' can't be assigned to the
        parameter type 'ImageProvider Object'
      </h1>
      <hr />
      <Row>
        <Col xs={1} className="d-flex flex-column">
          <MdArrowForwardIos className="upvote__icon" />
          <div className="vote-count--state">88</div>
          <MdArrowBackIos className="downvote__icon" />
        </Col>
        <Col xs={11}>
          <p>
            আপনি যেকোন প্রোগ্রামিং ল্যাঙ্গুয়েজ দিয়েই প্রোগ্রামিং শেখা শুরু করতে
            পারেন। তবে প্রথমে যে ভাষাটি দিয়ে শেখা শুরু করবেন। সেই ভাষা যেন আপনার
            কাছে সহজবোধ্য হয়। নতুবা আপনি শিখতে গিয়ে হোঁচট খেতে পারেন। এক্ষেত্রে
            আপনি পাইথন প্রোগ্রামিং ল্যাঙ্গুয়েজ দিয়ে শুরু করতে পারেন।
          </p>
          <div className="d-flex align-items-center justify-content-end">
            <UserCard />
          </div>
        </Col>
      </Row>
      <div className="h5">উত্তর(৪)</div>
      <Stack gap={4}>
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
        <AnswerCard />
      </Stack>
      <AnswerForm />
    </Container>
  );
};

export default QuestionAnswer;
