import Grid from '@mui/material/Grid';

import RecipeReviewCard from '../components/card';
const MyCard = RecipeReviewCard;

export default function Home() {
   return (
     <>
       <h1>Home</h1>
       <Grid container spacing={2}>
         <Grid item xs={3}></Grid>
         <Grid item xs={3}>
           <MyCard
             description="En choisissant de vous logger en tant que éleveur vous aurez accés
            aux boucher de votre régions."
             title=" éleveur"
           />
         </Grid>
         <Grid item xs={3}>
           <MyCard description="dsqsfsd" />
         </Grid>
       </Grid>
     </>
   );
}
