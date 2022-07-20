import { Outlet } from 'react-router-dom';
import Footer from '../partials/Footer';
import Header from '../partials/Header';

const DefaultLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
