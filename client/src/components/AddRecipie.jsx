import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddRecipie() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Recipe
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Recipe</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="subcategory"
            label="Sub-Category"
            placeholder="ex: Vegan, Vegetarian, etc."
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="title"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="prep"
            label="Prep-Time"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="cook"
            label="Cook-Time"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="ingredients"
            label="Ingredients"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="directions"
            label="Directions"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="image"
            label="Image Url"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}