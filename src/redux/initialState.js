const initialState = {

  posts: [
    {
      id: '1',
      title: 'Witcher Article',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-03-2023'),
      author: 'John Doe',
      category: 'News'
    },
    {
      id: '2',
      title: 'Star Wars Article',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('01-03-2023'),
      author: 'Amanda Doe',
      category: 'Movies'
    },
    {
      id: '3',
      title: 'Harry Potter Article',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('04-01-2022'),
      author: 'Jacob Doe',
      category: 'Sport'
    },
    {
      id: '4',
      title: 'The Elder Scrolls Article',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: new Date('02-02-2022'),
      author: 'Jean Doe',
      category: 'Games'
    }
  ],

  categories: ['Sport','Movies','News', 'Games'],
};

export default initialState;