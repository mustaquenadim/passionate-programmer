import { Container, Stack } from 'react-bootstrap';
import Banner from '../../components/home/Banner';
import QuestionCard from '../../components/UI/QuestionCard';

const Home = () => {
  return (
    <>
      <Banner />
      <Container className="my-5">
        <Stack gap={4}>
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </Stack>
      </Container>
    </>
  );
};

export default Home;
