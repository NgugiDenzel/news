import axios from 'axios';

const API_KEY = '1dbc7886501b4641a9a51b30ddd21c6d';
const BASE_URL = 'https://newsapi.org/v2/';

const getNews = async (category = 'general') => {
  try {
    const response = await axios.get(`${BASE_URL}top-headlines`, {
      params: {
        apiKey: API_KEY,
        category,
        country: 'us', // or any other country code
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export default getNews;
