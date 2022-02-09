import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children, title = 'Bookings app for your convenience' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer position="bottom-right" />

      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
