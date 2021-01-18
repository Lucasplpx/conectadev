import { Box, AppBar, makeStyles, Toolbar, Button } from '@material-ui/core';

import { PostProvider } from '../../../context/PostContext';

import Editor from './Editor';
import Preview from './Preview';

const useStyles = makeStyles((theme) => ({
  root: {},
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
  },
  image: {
    height: 100,
  },
  imagePreview: {
    width: '100%',
  },
  textArea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15,
  },
  button: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function NewPost() {
  const classes = useStyles();

  return (
    <PostProvider>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
          <Editor />
        </Box>
        <Box width="50%" height="100%" padding={2}>
          <Preview />
        </Box>
      </Box>
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
    </PostProvider>
  );
}

export default NewPost;
