import axios from '../utils/axios';

export const GET_NOTIFICATIONS = '@NOTIFICATIONS/GET_NOTIFICATIONS';

const getNotifications = () => {
  return async (dispatch) => {
    const resp = await axios.get('/api/notifications');
    dispatch({
      type: GET_NOTIFICATIONS,
      payload: {
        notifications: resp.data.notifications,
      },
    });
  };
};

export { getNotifications };
