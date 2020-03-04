import axios from 'axios';

const baseURL = `http://localhost:8000`;

export const submitLogin = async body => {
  const { username, password } = body;
  const send = {
    username,
    password
  };

  const { data } = await axios.post(`http://localhost:8000/api/login/`, send);

  return data;
};

export const submitRegister = async body => {
  const send = {
    username: body.username,
    password1: body.password,
    password2: body.confirm
  };

  const result = await axios.post(
    `http://localhost:8000/api/registration/`,
    send
  );

  return result;
};

export const axiosWithAuth = (url = baseURL) => {
  const token = localStorage.getItem('token');
  return axios.create({
    baseURL: url,
    headers: {
      Authorization: `Token ${token}`
    }
  });
};
