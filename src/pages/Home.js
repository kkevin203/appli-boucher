import Grid from '@mui/material/Grid';
import img1 from '../Ressources/Image/img-1.jpg';
import img2 from '../Ressources/Image/img2.webp';
import boeuf1 from '../Ressources/Image/le-boeuf-1.jpg';
import Button_Inscription from '../components/bouton-inscription';
import React from 'react'

import RecipeReviewCard from '../components/card';
const MyCard = RecipeReviewCard;

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Grid container spacing={0}>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <MyCard
            avatar="P"
            title=" Producteur"
            img="static/media/img-1.33f688d4.jpg"
            description="En choisissant de vous logger en tant que producteur vous aurez accés
            aux boucher de votre régions."
            description2="Ici vous pourrez mettre en vente vos bêtes au prix que vous voulez pour que les boucher vois vos bêtes avec les critère demandé. "
            Button="Pas encore inscrit? Crée ton compte"
            lien="./inscription-producteur"
          />
        </Grid>
        <Grid item xs={3}>
          <MyCard
            avatar="V"
            title=" Visiteur"
            img="https://picsum.photos/200/300?grayscale"
            description="visitez,explorez en toute liberté. Connectez vous plus tard "
            description2="Ici vous pourrez mettre en vente vos bêtes en vente ou achetez vos bêtes. "
            Button="Pas encore inscrit? Crée ton compte"
            lien="./boutique"
          />
        </Grid>
        <Grid item xs={3}>
          <MyCard
            avatar="B"
            title=" boucher"
            img="static/media/img2.74c64e1b.webp"
            description="En choisissant de vous logger en tant que boucher vous aurez accés
            aux producteur de votre régions."
            description2="Ici vous pourrez voir vos éleveurs et leurs bêtes au prix qu'ils auront décidé de les vendre et choisir vos critère"
            lien="./inscription-boucher"
            Button="Pas encore inscrit? Crée ton compte"
          />
        </Grid>
      </Grid>
    </>
  );
}
