import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Header';

const Main = ({ children }) => {
  return (
    <main>
      <Header />
      <section>{children}</section>
      <Footer />
    </main>
  );
};

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
