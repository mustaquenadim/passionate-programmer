import { useState } from 'react';
import { Button, Card, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Question from '../common/Question';

const Questions = () => {
  const [key, setKey] = useState('trending');
  return (
    <section className='questions'>
      <Card>
        <Card.Header className='d-flex justify-content-between border-0'>
          <h2>Questions</h2>
          <Button as={Link} to='/'>
            Ask Question
          </Button>
        </Card.Header>
        <Card.Body>
          <Tabs variant='pills' activeKey={key} onSelect={(k) => setKey(k)} className='mb-3'>
            <Tab eventKey='trending' title='Trending'>
              <Question />
            </Tab>
            <Tab eventKey='most-recent' title='Most Recent'>
              Most Recent
            </Tab>
            <Tab eventKey='unanswered' title='Unanswered'>
              Unanswered
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Questions;
