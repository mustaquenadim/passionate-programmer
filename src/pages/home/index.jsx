import { Card, Container } from 'react-bootstrap';
import QuestionCard from '../../components/common/Question';
import Banner from '../../components/home/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <Container className="my-5">
        <Card>
          <QuestionCard />
        </Card>
      </Container>
    </>
  );
};

export default Home;
