import { Avatar, Menu, MenuItem } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { signOut } from '../../actions/accountActions';

function Account() {
  const account = useSelector((state) => state.account);
  const [isOpen, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = !!account.user;

  const ref = useRef();

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(!isOpen);
  };

  const handleSignOut = () => {
    handleClose();

    dispatch(signOut());
    navigate('/');
  };

  return (
    <>
      <Avatar
        ref={ref}
        onClick={handleOpen}
        alt="Remy Sharp"
        src={account.user && account.user.avatar}
      />

      {isAuthenticated ? (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Meus Favoritos</MenuItem>
          <MenuItem>Meus Posts</MenuItem>
          <MenuItem>Minhas Conexões</MenuItem>
          <MenuItem onClick={handleSignOut}>Sair</MenuItem>
        </Menu>
      ) : (
        <Menu
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          open={isOpen}
          onClose={handleClose}
          getContentAnchorEl={null}
        >
          <MenuItem>Registrar Grátis</MenuItem>
          <MenuItem>Entrar</MenuItem>
        </Menu>
      )}
    </>
  );
}

export default Account;
