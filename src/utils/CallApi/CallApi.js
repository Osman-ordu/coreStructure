import axios from 'axios';
import { customHistory } from '../../routes/History';
import { apiEnvUrl, messageFunc } from '../general'; // henüz böyle bir alan mevcut değil
import { toastError, toastSuccess } from '../../components/Toast'; // henüz böyle bir alan mevcut değil

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem('token');
      customHistory.replace('/auth/login');
    }
    return Promise.reject(error);
  }
);

export const CallApi = async ({ method, url, data }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    customHistory.replace('/auth/login');
    return;
  }

  const message = messageFunc(method, url);

  try {
    const response = await axios({
      method,
      url: `${apiEnvUrl}${url}`,
      data: data || {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (method === 'POST') {
      const accountSuccess = Number(localStorage.getItem('accountSuccess') || 0) + 1;
      localStorage.setItem('accountSuccess', accountSuccess);
    } else if (method !== 'GET') {
      toastSuccess(response?.statusText || message);
    }

    return response.data;
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error?.message || 'Connection Unsuccessful';

    if (![401, 404].includes(error?.response?.status)) {
      const accountUnSuccess = Number(localStorage.getItem('accountUnSuccess') || 0) + 1;
      localStorage.setItem('accountUnSuccess', accountUnSuccess);
    } else {
      toastError(errorMessage);
    }

    return null;
  }
};
