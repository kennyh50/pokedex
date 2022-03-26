import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box'

import { red, blue } from '@mui/material/colors';
const swiggle = red[500];
const lightBlue = blue[100];

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


const PokeCard = ({ pokemon }) => {

  return (
    <Card
      sx={{
        maxWidth: "100%",
        border: 1,
        mt: 2
      }}>
      <div>
        <CardMedia
          component="img"
          maxHeight="100px"
          width="50%"
          image={pokemon.front}
          alt=""
          sx={{ bgcolor: lightBlue }}
        />
      </div>

      <CardContent>
        <Typography variant="h5" component="div">
          {capitalizeFirst(pokemon.name)}
        </Typography>
        <Typography
          sx={{
            mb: 1.5,
            display: 'flex',
            flexDirection: 'column',
          }}
          color="text.secondary">
          <div>
            Base Attack: {pokemon.attack},
          </div>
          <div>
            Base Defense: {pokemon.defense}
          </div>
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div sx={{ display: 'flex', justifyContent: 'flex-end' }} >Name: {pokemon.moves.map((m, index) => (<li key={index}>{m.move.name} </li>))}</div>
          <div>
            Level move is learned: {pokemon.moves.map((m, index) => (<li key={index}>{m.version_group_details[0].level_learned_at} </li>))}
          </div>
          <br />
        </Box>
      </CardContent>
    </Card>
  )
}

export default PokeCard