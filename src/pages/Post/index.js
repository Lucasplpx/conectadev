import React, { useCallback, useEffect, useState } from 'react';
import axios from '../../utils/axios';
import PostView from '../../components/PostView';
import { useParams } from 'react-router';

function Post() {
  const [post, setPost] = useState([]);
  const { slug } = useParams();

  const getPost = useCallback(async () => {
    const feed = await axios.get(`/api/post/${slug}`);
    setPost(feed.data);
  }, [setPost, slug]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  return <PostView post={post} />;
}

export default Post;
