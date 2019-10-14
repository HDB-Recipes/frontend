import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import {
    Container,
    Typography,
    CardMedia,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CircularProgress,
  } from '@material-ui/core';
  import { makeStyles } from '@material-ui/core/styles';
  import RecipeCard from '../components/RecipeCard'
  /////
  import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
   
  const useStyles = makeStyles({
    // card: {
    //   maxWidth: 275,
    //   minWidth: 220,
    //   marginTop: 20,
    //   textAlign: 'center'
    // },
    // questionCard: {
    //   maxWidth: 380,
    //   marginBottom: 35,
    //   // maxWidth: 400,
    // },
    button: {
    marginLeft: 20,
    },
  });


export default function Kitchen({ history }) {
    const classes = useStyles();
    const [recipes, setRecipes] = useState([{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10}, { title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10},{ title: 'Oreo Cookies', category: 'Dessert', sub_category: 'Cookies', cook_time: 15, prep_time: 10}])
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
  
    // const handleClose = () => {
    //   setOpen(false);
    // };

    return (
        <Layout navTitle={'Kitchen'} history={history}>
            <Container style={{ marginTop: 75 }}>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <Typography variant="h3" style={{ margin: '50px 0 20px' }}>
            Recipes
          </Typography>
          <Typography  variant="h3" style={{ margin: '50px 0 20px' }}>
            <Button size="small" color="primary" className={classes.button}>
              All
            </Button>
            <Button size="small" color="primary" className={classes.button}>
              Vegan
            </Button>
            <Button size="small" color="primary" className={classes.button}>
              Todd
            </Button>
          </Typography>
          </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'space-around'}}>
            {recipes ? recipes.map(recipe => (             
                 <RecipeCard recipe={recipe} />
            )) : null }
                </div>
            </Container>
        </Layout>
    )
}


////////////////



// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         Open form dialog
//       </Button>
//       <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To subscribe to this website, please enter your email address here. We will send updates
//             occasionally.
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button onClick={handleClose} color="primary">
//             Subscribe
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }