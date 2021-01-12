import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/notifications').reply(200, {
  notifications: [
    {
      id: '5498498de48984d954ec0',
      title: 'Novas avaliações recebidas',
      description: 'Você recebeu 1 nova avaliação',
      type: 'reviews',
      createdAt: moment().subtract(2, 'hours').toDate().getTime(),
    },
    {
      id: '549849eewe158de48984d954ec0',
      title: 'Novos comentários recebidos',
      description: 'Você recebeu 1 nova comentário',
      type: 'new_comment',
      createdAt: moment().subtract(2, 'day').toDate().getTime(),
    },

    {
      id: '5498498de4898ss45d954ec0',
      title: 'Novos likes recebidos',
      description: 'Você recebeu 1 novo like',
      type: 'like',
      createdAt: moment().subtract(3, 'day').toDate().getTime(),
    },
    {
      id: '156598ewfwef849849f8ewcd',
      title: 'Novos seguidores',
      description: 'Você recebeu 1 novo seguidor',
      type: 'connection',
      createdAt: moment().subtract(5, 'day').toDate().getTime(),
    },
  ],
});
