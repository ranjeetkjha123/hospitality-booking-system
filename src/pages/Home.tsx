import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Grid, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';

// Sample room data
const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    image: 'https://via.placeholder.com/300x200',
    description: 'A luxurious room with a view.',
    price: '$200/night',
  },
  {
    id: 2,
    name: 'Standard Room',
    image: 'https://via.placeholder.com/300x200',
    description: 'A comfortable room for your stay.',
    price: '$150/night',
  },
  {
    id: 3,
    name: 'Suite',
    image: 'https://via.placeholder.com/300x200',
    description: 'An elegant suite with extra amenities.',
    price: '$300/night',
  },
  // Add more room objects as needed
];

const Home: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Available Rooms
      </Typography>
      <Grid container spacing={2}>
        {rooms.map((room) => (
          <Grid item key={room.id} xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={room.image}
                  alt={room.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {room.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {room.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {room.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button component={Link} to="/booking" variant="contained" color="primary">
        Book Now
      </Button>
    </div>
  );
};

export default Home;
