import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router';

function WritePost() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/post/new');
  };

  return (
    <Button color="primary" variant="contained" onClick={handleClick}>
      Novo Post
    </Button>
  );
}

export default WritePost;
