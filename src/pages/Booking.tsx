import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useBookingContext } from '../context/BookingContext';

interface BookingFormValues {
  checkIn: string;
  checkOut: string;
  guests: number;
}

const validationSchema = Yup.object({
  checkIn: Yup.date().required('Check-in date is required'),
  checkOut: Yup.date().min(Yup.ref('checkIn'), 'Check-out date must be after check-in date').required('Check-out date is required'),
  guests: Yup.number().min(1, 'At least one guest required').required('Number of guests is required'),
});

const Booking: React.FC = () => {
  const { addBooking } = useBookingContext();

  const initialValues: BookingFormValues = { checkIn: '', checkOut: '', guests: 1 };

  const handleSubmit = (values: BookingFormValues) => {
    addBooking(values);
    console.log('Booking Submitted:', values);
    alert('Booking submitted successfully!');
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Booking Form
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, values }) => (
          <Form>
            <Field as={TextField} name="checkIn" label="Check-In Date" type="date" value={values.checkIn} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="checkIn" component="div" />
            </div>

            <Field as={TextField} name="checkOut" label="Check-Out Date" type="date" value={values.checkOut} onChange={handleChange} InputLabelProps={{ shrink: true }} fullWidth margin="normal" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="checkOut" component="div" />
            </div>

            <Field as={TextField} name="guests" label="Number of Guests" type="number" value={values.guests} onChange={handleChange} fullWidth margin="normal" />
            <div style={{ color: 'red' }}>
              <ErrorMessage name="guests" component="div" />
            </div>

            <Button type="submit" variant="contained" color="primary">Book Now</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Booking;
