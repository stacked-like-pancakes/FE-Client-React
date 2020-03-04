import React from 'react';
import { useHistory } from 'react-router-dom';
import { submitLogin, submitRegister } from '../../services/authServices';

import Form from './Form';

const Login = () => {
  const initialState = { username: '', password: '', confirm: '' };

  const [isNewUser, setIsNewUser] = React.useState(false);
  const [form, setForm] = React.useState(initialState);
  const [error, setError] = React.useState('');

  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e, state) => {
    e.preventDefault();
    if (state === true) {
      const { password, confirm } = form;
      if (confirm === password) {
        const ok = password.match(/^(?=.*\d).{8,15}$/);

        if (!ok) {
          setError('Your password is not strong enough.');
        }

        if (ok && ok[0] === password) {
          try {
            const result = await submitRegister(form);
            localStorage.setItem('token', result.data.key);
            history.push('/game');
          } catch (why) {
            setError(why.response.data.password1[0]);
          }
        }
      }

      if (confirm !== password) {
        setError('Passwords do not match.');
      }
    } else {
      try {
        const result = await submitLogin(form);
        localStorage.setItem('token', result.key);
        history.push('/game');
      } catch (why) {
        setError(why.response.data.non_field_errors[0]);
      }
    }
  };

  return (
    <Form
      isNewUser={isNewUser}
      setIsNewUser={setIsNewUser}
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default Login;
