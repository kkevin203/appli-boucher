import Grid from '@mui/material/Grid';

import RecipeReviewCard from '../components/card';
const MyCard = RecipeReviewCard;

export default function Home() {
   return (
     <>
     <h1>Home</h1>
       <Grid container spacing={0}>
         <Grid item xs={3}></Grid>
         <Grid item xs={3}>
           <MyCard
             avatar="P"
             title=" Producteur"
             description="En choisissant de vous logger en tant que producteur vous aurez accés
            aux boucher de votre régions."
             description2="Ici vous pourrez mettre en vente vos bêtes au prix que vous voulez pour que les boucher vois vos bêtes avec les critère demandé. "
           />
         </Grid>
         <Grid item xs={3}>
           <MyCard
             avatar="B"
             title=" boucher"
             description="En choisissant de vous logger en tant que boucher vous aurez accés
            aux producteur de votre régions."
             description2="Ici vous pourrez voir vos éleveurs et leurs bêtes au prix qu'ils auront décidé de les vendre et choisir vos critère"
           />
         </Grid>
       </Grid>
     </>
   );
}
