import Grid from '@mui/material/Grid';

import RecipeReviewCard from '../components/card';
const MyCard = RecipeReviewCard;

export default function Home() {
  return <>
  <Grid container spacing={2}>
  <Grid item xs={6}>
    <MyCard description="dsqsfsd" />
    </Grid>
    <Grid item xs={6}>
      <MyCard description="dsqsfsd" />
  </Grid>
  </Grid>
  </> ; // <h1>Home</h1>
}
m