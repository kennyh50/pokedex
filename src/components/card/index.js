import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'

import { red, blue } from '@mui/material/colors';
const swiggle = red[500];
const lightBlue = blue[100];


const PokeCard = ({ pokemon }) => {

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <div>
        <CardMedia
          component="img"
          maxHeight="100px"
          width="50%"
          image={pokemon.image}
          alt=""
          sx={{ bgcolor: lightBlue }}
        />
      </div>

      <CardContent
        sx={{}}
      >
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {pokemon.name}
        </Typography>
        <Typography variant="h5" component="div">
          {pokemon.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Attack: {pokemon.attack}, Defense: {pokemon.defense}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div sx={{ display: 'flex', justifyContent: 'flex-end' }} >Name: {pokemon.moves.map((m, index) => (<li key={index}>{m.move.name} </li>))}</div>
          <div>
            Level move is learned: {pokemon.moves.map((m, index) => (<li key={index}>{m.version_group_details[0].level_learned_at} </li>))}
          </div>
          <br />
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default PokeCard