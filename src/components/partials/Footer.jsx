import { Col, Container, Row } from 'react-bootstrap';
import {
  FaFacebookF,
  FaRedditAlien,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5 pb-3">
        <Row>
          <Col md={6}>
            <h3 className="mb-3">Passionate Programmer</h3>
            <p className="pe-5 mb-3">
              Passionate Programmer একটি প্রোগ্রামিং বিষয়ক প্রশ্ন-উত্তর
              ওয়েবসাইট। প্রোগ্রামিং জগতে যারা নতুন প্রবেশ করছে এবং যারা এই জগতে
              ইতোমধ্যেই ঘুরাঘুরি করছে তারা যেন শিখতে গিয়ে কিংবা কাজ করতে গিয়ে
              সমস্যায় পড়ে হতাশ হয়ে প্রোগ্রামিং ছেড়ে না দেয়। বরং কোন এক জায়গায়
              জিজ্ঞাসা করে সমাধান পেতে পারে সেজন্যই আমরা এই মঞ্চটি তৈরি করেছি।
            </p>
            <div className="d-flex align-items-center">
              <a
                className="footer--social-icons__a"
                href="mailto"
                target="_blank"
                rel="noreferrer noopener"
              >
                <MdEmail className="footer--social-icons__icon" />
              </a>
              <a
                className="footer--social-icons__a"
                href="www.facebook.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookF className="footer--social-icons__icon" />
              </a>
              <a
                className="footer--social-icons__a"
                href="www.twitter.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaTwitter className="footer--social-icons__icon" />
              </a>
              <a
                className="footer--social-icons__a"
                href="www.reddit.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaRedditAlien className="footer--social-icons__icon" />
              </a>
              <a
                className="footer--social-icons__a"
                href="www.youtube.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaYoutube className="footer--social-icons__icon" />
              </a>
            </div>
          </Col>
          <Col md={3}></Col>
          <Col md={3}></Col>
        </Row>
        <p className="text-center m-0 py-4">
          &copy; {new Date().getFullYear()} All rights reserved by PP Community
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
