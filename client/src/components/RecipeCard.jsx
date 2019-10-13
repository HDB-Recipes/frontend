import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 345,
    margin: '25px 0',
  },
  media: {
    height: 140,
  },
});

export default function RecipeCard({ recipe }) {
  const classes = useStyles();

  return (
    // <Grid md={6} xs={12} item style={{ padding: '10px' }}>
    <Card className={classes.card} style={{ display: 'flex' }}>
      <CardMedia
        style={{ width: '40%' }}
        image={'./static/oreocookie.jpg'}
        title="Live from space album cover"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '60%',
        }}
      >
        <CardContent style={{ flex: '1 0 auto', width: '100%' }}>
          <Typography component="h5" variant="h5" style={{ textAlign: 'center'}}>
            {recipe.title}
          </Typography>
          {/* <Typography variant="subtitle1" color="textSecondary">
            Prep Time: {recipe.prep_time} min
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Cook Time: {recipe.cook_time} min
          </Typography> */}
        </CardContent>
        <Link
          style={{ textDecoration: 'none', margin: '0 auto', width: '100%' }}
        //   to={}
        >
          <Button size="large" style={{ width: '100%' }} color="primary">
            View
          </Button>
        </Link>
      </div>
    </Card>
//   </Grid>
  );
}