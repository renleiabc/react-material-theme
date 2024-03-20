import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import ThemeContent from '@/theme/content/content';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* 引入主题色 */}
    <ThemeContent>
      <App />
    </ThemeContent>
  </React.StrictMode>
);
