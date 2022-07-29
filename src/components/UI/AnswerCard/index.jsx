import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import UserCard from '../UserCard';

const AnswerCard = () => {
  return (
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
  );
};

export default AnswerCard;
