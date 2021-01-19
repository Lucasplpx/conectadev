import { AppBar, Button, makeStyles, Toolbar } from '@material-ui/core';
import React from 'react';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

function BottomBar() {
  const classes = useStyles();
  const ctx = usePost();

  const handleSaveDraft = () => {
    // acessar backend e salvar o rascunho
  }

  const handlePublish = () => {
    // acessar o backend e publicar este post
  }


  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <Button className={classes.button} variant="outlined">
          Salvar rascunho
        </Button>
        <Button color="secondary" variant="outlined">
          Publicar
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default BottomBar;
