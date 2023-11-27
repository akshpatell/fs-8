import React from 'react';
import { createRoot } from 'react-dom/client';
// import Todo from './Todo';
import './style.css';
import { ThemeProvider } from './context/themeContext';
import { LocaleProvider } from './context/localeContext';
import Hooks from './Todo/hooks'

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <LocaleProvider>
    <ThemeProvider>
      {/* <Todo /> */}
      <Hooks />
    </ThemeProvider>
  </LocaleProvider>,
);
