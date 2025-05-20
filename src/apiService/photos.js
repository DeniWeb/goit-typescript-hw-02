import axios from 'axios';

const API_KEY = 'nNJ1lYLR3QPSdY4YKLdgQVEs5n5LeFwqeI0q6WBmVNQ';

axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  orientation: 'landscape',
};

export const getPhotos = async (query, page, per_page) => {
  const { data } = await axios.get('search/photos', {
    params: { query, page, per_page },
  });
  return data;
};
