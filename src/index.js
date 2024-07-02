import React from 'react';
import ReactDOM from 'react-dom';
import { PrimeReactProvider } from 'primereact/api';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import DailyUpdateForm from './components/DailyUpdateForm';
import DailyUpdateTable from './components/DailyUpdatesTable';
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';  // your custom styles if any

const options = {
    ripple: true,
    inputStyle: 'filled'
};

const renderMicroFrontend = (containerId) => {
  const root = ReactDOM.createRoot(document.getElementById(containerId));
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <PrimeReactProvider value={options}>
          <App />
        </PrimeReactProvider>
      </Provider>
    </React.StrictMode>
  );
};

export { renderMicroFrontend, DailyUpdateForm, DailyUpdateTable };
