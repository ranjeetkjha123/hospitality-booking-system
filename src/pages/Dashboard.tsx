import React from 'react';
import { Typography, Grid, Card, CardContent } from '@mui/material';
import { useBookingContext } from '../context/BookingContext';

const Dashboard: React.FC = () => {
  const { bookings } = useBookingContext();

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {bookings.map((booking, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  Booking {index + 1}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check-In: {booking.checkIn}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Check-Out: {booking.checkOut}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Guests: {booking.guests}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
