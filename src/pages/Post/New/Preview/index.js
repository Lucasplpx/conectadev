import {
  Avatar,
  Box,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Markdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { usePost } from '../../../../context/PostContext';

const useStyles = makeStyles((theme) => ({
  imagePreview: {
    width: '100%',
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function Preview() {
  const classes = useStyles();
  const account = useSelector((state) => state.account);
  const ctx = usePost();
  const { image, title, tags, markdownText } = ctx;

  return (
    <>
      {image && (
        <Box mb={2}>
          <img className={classes.imagePreview} src={image} alt="background" />
        </Box>
      )}
      <Box mb={2}>
        <Typography variant="h2">{title}</Typography>
      </Box>
      <Box display="flex" alignItems="center" mb={2}>
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
      <Box mb={2}>
        <Typography variant="body1">
          {tags?.map((item) => item.title).join(',')}
        </Typography>
      </Box>
      <Divider />
      <Markdown source={markdownText} />
    </>
  );
}

export default Preview;
