// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ZeroLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ZeroLink/i);
    expect(titleElement).toBeInTheDocument();
});
