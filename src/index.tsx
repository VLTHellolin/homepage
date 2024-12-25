import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/styles/index.css';
import 'core-js/actual';

import { NextUIProvider } from '@nextui-org/react';
import App from './App.tsx';

ReactDOM.createRoot(document.body).render(
  <React.StrictMode>
    <NextUIProvider id='root'>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);
