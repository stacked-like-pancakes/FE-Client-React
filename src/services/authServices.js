import axios from 'axios';

const baseURL = `http://localhost:8000`;

export const submitLogin = async body => {
  try {
    const { username, password } = body;
    const send = {
      username,
      password
    };

    const { data } = await axios.post(`http://localhost:8000/api/login/`, send);

    return data;
  } catch (why) {
    console.error(why);

    return why;
  }
};

export const submitRegister = async body => {
  try {
    const send = {
      username: body.username,
      password1: body.password,
      password2: body.confirm
    };

    const { data } = await axios.post(
      `http://localhost:8000/api/registration/`,
      send
    );

    return data;
  } catch (why) {
    console.error(why);

    return why;
  }
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
