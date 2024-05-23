import React from 'react';
import { render, screen } from '@testing-library/react';
import Booking from '../pages/Booking';
import userEvent from '@testing-library/user-event';

test('renders Booking form', () => {
  render(<Booking />);
  expect(screen.getByLabelText(/Check-In Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Check-Out Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
});
