import { Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function WritePost() {
  const navigate = useNavigate();
  const account = useSelector((state) => state.account);

  const isAuthenticated = !!account.user;

  const handleClick = () => {
    if (isAuthenticated) {
      navigate('/post/new');
    } else {
      navigate('/sign-in');
    }
  };

  return (
    <Button color="primary" variant="contained" onClick={handleClick}>
      Novo Post
    </Button>
  );
}

export default WritePost;
