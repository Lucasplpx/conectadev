import {
  Avatar,
  Box,
  IconButton,
  makeStyles,
  Popover,
  SvgIcon,
  Typography,
} from '@material-ui/core';
import { useEffect, useRef, useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {
  Bell as BellIcon,
  Star as StarIcon,
  MessageCircle as MessageIcon,
  Heart as HeartIcon,
  Users as ConnectionIcon,
} from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { getNotifications } from '../../../actions/notificationsActions';

const iconsMap = {
  reviews: StarIcon,
  new_comment: MessageIcon,
  like: HeartIcon,
  connection: ConnectionIcon,
};

const useStyles = makeStyles((theme) => ({
  icon: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
  },
}));

function Notifications() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const account = useSelector((state) => state.account);
  const isAuthenticated = !!account.user;
  const notifications = useSelector(
    (state) => state.notifications.notifications
  );
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const handleClose = () => {
    setOpen(!isOpen);
  };

  return (
    isAuthenticated && (
      <>
        <IconButton ref={ref} onClick={handleOpen}>
          <SvgIcon>
            <BellIcon />
          </SvgIcon>
        </IconButton>

        <Popover
          onClose={handleClose}
          open={isOpen}
          anchorEl={ref.current}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <Box p={2}>
            <Typography variant="h6" color="textPrimary">
              Notificações
            </Typography>
          </Box>
          <List>
            {notifications.map((notification) => {
              const Icon = iconsMap[notification.type];
              return (
                <ListItem key={notification.id}>
                  <ListItemAvatar>
                    <Avatar className={classes.icon}>
                      <SvgIcon>
                        <Icon />
                      </SvgIcon>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={notification.title}
                    primaryTypographyProps={{
                      variant: 'subtitle2',
                      color: 'textPrimary',
                    }}
                    secondary={notification.description}
                  />
                </ListItem>
              );
            })}
          </List>
        </Popover>
      </>
    )
  );
}

export default Notifications;
