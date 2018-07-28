import axios from 'axios';

export default url => axios.create({
  baseURL: url,
});
