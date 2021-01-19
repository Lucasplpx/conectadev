import mock from '../utils/mock';

mock.onPost('/api/home/me').reply(200, {
  user: {
    id: 1,
    name: 'Lucas Passos',
    username: 'lucaspassos',
    email: 'lucaspassos@lucaspassos.com.br',
    avatar: 'images/avatars/avatar_1.jpg',
  },
});

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'lucaspassos@lucaspassos.com.br' || password !== 'admin') {
    return [
      400,
      {
        message: 'Seu e-mail ou senha estão incorretos',
      },
    ];
  }

  const user = {
    id: 1,
    name: 'Lucas Passos',
    username: 'lucaspassos',
    email: 'lucaspassos@lucaspassos.com.br',
    avatar: 'images/avatars/avatar_1.jpg',
  };

  return [200, { user }];
});

mock.onGet('/api/home/user/lucaspassos').reply(200, {
  id: 1,
  name: 'Lucas Passos',
  username: 'lucaspassos',
  email: 'lucaspassos@lucaspassos.com.br',
  accessToken: 'kasdfoiasdfas',
  avatar: 'images/avatars/avatar_1.jpg',
  joinedIn: '06 de março, 2021',
  work: 'Arquiteto de Software',
  totalPost: '388',
});
