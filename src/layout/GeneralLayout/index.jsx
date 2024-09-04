import { HistoryRouter } from '../../routes/HistoryRouter';
import AppRoutes from '../../routes';
import { customHistory } from '../../routes/history';

const GeneralLayout = () => {
  return (
    <>
      <HistoryRouter history={customHistory}>
        <AppRoutes />
      </HistoryRouter>
    </>
  );
};

export default GeneralLayout;
