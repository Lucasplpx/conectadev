import mock from '../utils/mock';

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
    avatar: 'images/avatars/avatar_1.jpg'
  };

  return [200, { user }];
});
