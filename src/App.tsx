import React, { FC } from 'react';

import { AppProvider } from './providers/AppProvider';
import { AppRouter } from './routes';

const App: FC = () => {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default App;
