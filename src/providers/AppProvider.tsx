import CircularProgress from '@mui/material/CircularProgress';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { SocketProvider } from './SocketProvider';

const ErrorFallback = () => {
  return (
    <>
      <h2>Ooops, something went wrong :( </h2>
    </>
  );
};
type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <Suspense fallback={<CircularProgress />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <SocketProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </SocketProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
