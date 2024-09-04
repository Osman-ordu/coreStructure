import PropTypes from 'prop-types';
import { useLayoutEffect, useState } from 'react';
import { Router } from 'react-router-dom';

export const HistoryRouter = ({ basename, children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router basename={basename} location={state.location} navigationType={state.action} navigator={history}>
      {children}
    </Router>
  );
};

HistoryRouter.propTypes = {
  basename: PropTypes.string,
  children: PropTypes.node,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    location: PropTypes.object.isRequired,
    listen: PropTypes.func.isRequired,
  }).isRequired,
};
