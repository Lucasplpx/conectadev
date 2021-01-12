import { makeStyles } from '@material-ui/core/styles';
import { Route, Routes } from 'react-router';

import Header from './Header';
import Feed from '../Feed';
import NewPost from '../Post/new';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="*" element={<h1>Not found 404 ;(</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;
