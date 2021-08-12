import axios from '../lib/axios';

export default {
  test () {
    return axios({
      url: '/api/test',
      method: 'GET',
    });
  }
}