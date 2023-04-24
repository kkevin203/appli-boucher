import boeuf1 from '../Ressources/Image/le-boeuf-1.jpg';
import { Grid } from '@mui/material';
import React from 'react'

import RecipeReviewCard from '../components/card';
const MyCard = RecipeReviewCard;

export default function Boutique() {
  return (
    <>
      <h1>Boutique</h1>
      <Grid container spacing={0}>
        <MyCard
          title="animal 1"
          img="/static/media/le-boeuf-1.e4d27b5b45c899151a33.jpg"
          description=" voici un boeuf"
          description2="c'est de la top qualité"
        />
       
      </Grid>
    </>
  );
}
