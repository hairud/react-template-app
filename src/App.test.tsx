import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

it('Creates app', async () => {
  render(<App />);
  screen.getByText('React-template-app');
});
