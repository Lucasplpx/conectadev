import {
  Box,
  AppBar,
  makeStyles,
  Toolbar,
  Button,
  TextField,
  Typography,
  Divider,
  Avatar,
} from '@material-ui/core';
import Markdown from 'react-markdown';
import { Autocomplete } from '@material-ui/lab';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useSelector } from 'react-redux';

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

const arrayTags = [
  { title: 'react.js' },
  { title: 'node.js' },
  { title: 'dotnetcore' },
  { title: 'webdev' },
];

function NewPost() {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState([arrayTags[0]]);
  const [markdownText, setMarkdownText] = useState('');

  console.log('adsfas', account);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setImage(base64data);
    };
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  });

  const handleTagsChange = (event, values) => {
    setTags(values);
  };

  const handleChangeMarkdown = (event) => {
    setMarkdownText(event.target.value);
  };

  return (
    <>
      <Box display="flex" height="calc(100% - 70px)" overflow="scroll">
        <Box width="50%" height="100%" padding={2} borderRight="1px solid #ddd">
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button>Carregar imagem</Button>
          </div>
          {image && (
            <img className={classes.image} src={image} alt="background" />
          )}

          <TextField
            id="title"
            placeholder="Título"
            fullWidth
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
          />

          <Autocomplete
            multiple
            id="tags-standard"
            options={arrayTags}
            getOptionLabel={(option) => option.title}
            value={tags}
            onChange={handleTagsChange}
            renderInput={(params) => (
              <TextField {...params} variant="standard" placeholder="tags" />
            )}
          />

          <textarea
            onChange={handleChangeMarkdown}
            className={classes.textArea}
          ></textarea>
        </Box>
        <Box width="50%" height="100%" padding={2}>
          {image && (
            <img
              className={classes.imagePreview}
              src={image}
              alt="background"
            />
          )}

          <Typography variant="h2">{title}</Typography>
          <Box display="flex" alignItems="center">
            <Box>
              <Avatar className={classes.avatar} src={account.user?.avatar} />
            </Box>
            <Box>
              <Typography variant="body1">{account.user?.name}</Typography>
              <Typography variant="body2" color="textSecondary">
                10 meses atrás
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1">
            {tags.map((item) => item.title).join(',')}
          </Typography>
          <Divider />
          <Markdown source={markdownText} />
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
    </>
  );
}

export default NewPost;
