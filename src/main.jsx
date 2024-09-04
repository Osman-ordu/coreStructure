import * as ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import GeneralLayout from './layout/GeneralLayout';
import './App.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <GeneralLayout />
  </HelmetProvider>
);
