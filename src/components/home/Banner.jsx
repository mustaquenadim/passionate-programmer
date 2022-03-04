import { Col, Container, Image, Row } from 'react-bootstrap';
import '../../styles/components/home/Banner.scss';
import banner from '../../assets/images/code_thinking.svg';

const Banner = () => {
  return (
    <section className='home__banner'>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className='mb-4'>
              হ্যালো প্রোগ্রামার, <br /> Passionate Programmer প্রশ্ন-উত্তর সাইটে তোমাকে স্বাগতম
            </h1>
            <p>তুমি যদি প্রোগ্রামিং-এ নতুন হয়ে থাকো কিংবা শুরু করার কথা ভাবছো কিংবা প্রোগ্রামিং করতে গিয়ে কোন সমস্যায় পড়ে মাথার চুল ছিঁড়ে ফেলার মতো অবস্থা হয় তাহলে এখনই আমাদের এই সাইটে প্রশ্ন করে ফেলো। হয়তো তোমারই কোন সহপাঠী, বন্ধু কিংবা বড় ভাই তোমার প্রশ্নের উত্তর দেয়ার জন্য প্রস্তুত হয়ে বসে আছে।</p>
          </Col>
          <Col md={6}>
            <Image src={banner} alt='banner' fluid />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
