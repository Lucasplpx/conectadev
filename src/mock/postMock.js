import moment from 'moment';
import mock from '../utils/mock';

mock.onGet('/api/post/como-criar-um-app').reply(200, {
  id: 1,
  title: 'Criando um App do zero utilizando React.js',
  slug: 'como-criar-um-app',
  date: moment().subtract(1, 'day').toDate().getTime(),
  author: {
    id: 1,
    name: 'Lucas Passos',
    username: 'lucaspassos',
    avatar: '/images/avatars/avatar_1.jpg',
  },
  markdownText: `
      _Compact style:_

      Term 1
        ~ Definition 1

      Term 2
        ~ Definition 2a
        ~ Definition 2b
    `,
  tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
  image: '/images/posts/post1.png',
  likes: 10,
  comments: 30,
});

mock.onGet('/api/feed').reply(200, {
  posts: [
    {
      id: 1,
      author: {
        id: 1,
        name: 'Lucas Passos',
        username: 'lucaspassos',
        avatar: '/images/avatars/avatar_1.jpg',
      },
      title: 'Criando um App do zero utilizando React.js',
      slug: 'como-criar-um-app',
      date: moment().subtract(1, 'day').toDate().getTime(),
      description: 'Fala pessoal! Qual o framework favorito de vcs?',
      hashtags: '#dotnet, #javascript, #reactjs, #developer',
      image: '/images/posts/post1.png',
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
      slug: 'como-criar-um-app-com-reactjs',
      date: moment().subtract(3, 'day').toDate().getTime(),
      description: 'Fala pessoal! Qual o framework favorito de vcs?',
      hashtags: '#dotnet, #javascript, #reactjs, #developer',
      image: '/images/posts/post2.png',
    },
  ],
});

mock.onGet('/api/posts/user/lucaspassos').reply(200, {
  posts: [
    {
      id: 1,
      title:
        'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
      slug: 'como-melhorar-seu-codigo-javascript',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Lucas Nhimi',
        avatar: '/images/avatars/avatar_1.jpeg',
      },
      tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
      image: '/images/posts/post1.png',
      likes: 10,
      comments: 30,
    },
    {
      id: 2,
      title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
      slug: 'como-migrar-para-react-hooks',
      date: moment().subtract(1, 'day').toDate().getTime(),
      author: {
        id: 1,
        name: 'Lucas Nhimi',
        avatar: '/images/avatars/avatar_1.jpeg',
      },
      tags: ['reactjs', 'javascript'],
      image: '/images/posts/post2.png',
      likes: 5,
      comments: 1,
    },
  ],
});