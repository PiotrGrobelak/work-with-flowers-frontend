const development = 'http://localhost:2000';
const production = 'https://work-with-dev.herokuapp.com';

export const API =
  process.env.NODE_ENV === 'development' ? development : production;
