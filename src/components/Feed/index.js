import { makeStyles } from '@material-ui/core/styles';

import PostCard from '../PostCard';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const posts = [
  {
    id: 1,
    author: {
      id: 1,
      name: 'Lucas Passos',
      username: 'lucaspassos',
      avatar: '/images/avatars/avatar_1.jpg',
    },
    title: 'Criando um App do zero utilizando React.js',
    date: 'April 7, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post9.jpeg',
  },

  {
    id: 2,
    author: {
      id: 2,
      name: 'Lucas Passos 2',
      username: 'lucaspassos 2',
      avatar: '/images/avatars/avatar_1.jpg',
    },
    title: 'Criando um App do zero utilizando React.js',
    date: 'April 7, 2020',
    description: 'Fala pessoal! Qual o framework favorito de vcs?',
    hashtags: '#dotnet, #javascript, #reactjs, #developer',
    image: '/images/posts/post8.png',
  },
];

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;
