import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import { NodeStoreProvider } from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <NodeStoreProvider>
        <App />
      </NodeStoreProvider>
    </ChakraProvider>
  </React.StrictMode>
);
