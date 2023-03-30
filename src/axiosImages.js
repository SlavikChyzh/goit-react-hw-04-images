import axios from 'axios';

const key = `33344589-afa1c8c0d7150dc22fd06ea0f`;
const parameters = `?key=${key}&image_type=photo&orientation=horizontal&per_page=12`;
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = (searchValue, page = 1) => {
  const response = axios
    .get(`${parameters}&q=${searchValue}&page=${page}`)
    .then(({ data }) => {
      return data.hits;
    });
  return response;
};

export { getImages };
