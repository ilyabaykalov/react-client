import axios from 'axios';

const host = '';

export default axios.create({
  baseURL: `http://${ host }/api/`,
  responseType: 'json',
  credentials: 'include',
  headers: {
    common: {
      'Content-Type': 'multipart/form-data',
    },
  },
});
