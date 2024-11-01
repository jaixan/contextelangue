import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import LanguesProvider from './contexts/langues.context.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguesProvider>
      <App />
    </LanguesProvider>
  </StrictMode>
);
