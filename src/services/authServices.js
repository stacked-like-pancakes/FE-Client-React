import axios from 'axios';

const baseURL = `https://dudescape.herokuapp.com`;

export const submitLogin = async body => {
  const { username, password } = body;
  const send = {
    username,
    password
  };

  const { data } = await axios.post(
    `https://dudescape.herokuapp.com/api/login/`,
    send
  );

  return data;
};

export const submitRegister = async body => {
  const send = {
    username: body.username,
    password1: body.password,
    password2: body.confirm
  };

  const result = await axios.post(
    `https://dudescape.herokuapp.com/api/registration/`,
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
