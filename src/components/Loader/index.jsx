import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Loader = ({ type }) => {
  return (
    <div className={`${styles['c-loader']} ${styles[type ?? 'default']}`}>
      <div className={styles['c-loader__spin']}></div>
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  type: PropTypes.string,
};
