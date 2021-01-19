import { Box, Container, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../utils/axios';
import { useCallback, useEffect, useState } from 'react';

import PostCard from '../../components/PostCard';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function Feed() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  const getPosts = useCallback(async () => {
    const feed = await axios.get('/api/feed');
    setPosts(feed.data.posts);
  }, [setPosts]);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Hidden smDown>
          <Navbar />
        </Hidden>
        <div className={classes.root}>
          {posts?.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

export default Feed;
