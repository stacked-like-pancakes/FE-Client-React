import React from 'react';
import { useHistory } from 'react-router-dom';
import { submitLogin, submitRegister } from '../../services/authServices';

const Login = () => {
  const initialState = { username: '', password: '', confirm: '' };

  const [isNewUser, setIsNewUser] = React.useState(false);
  const [form, setForm] = React.useState(initialState);

  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e, state) => {
    e.preventDefault();
    if (state) {
      const { password, confirm } = form;
      if (confirm === password) {
        const result = await submitRegister(form);
        console.log(result);
      }
    } else {
      const result = await submitLogin(form);
      localStorage.setItem('token', result.key);
      history.push('/game');
    }
  };

  return (
    <>
      <form onSubmit={e => handleSubmit(e, isNewUser)}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={form.username}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={form.password}
          />
        </label>

        {isNewUser ? (
          <label htmlFor="confirm">
            Password
            <input
              type="password"
              onChange={handleChange}
              name="confirm"
              value={form.confirm}
            />
          </label>
        ) : null}
        <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
      </form>
      {isNewUser ? (
        <p>
          Already have an account?{' '}
          <span
            onKeyPress={() => setIsNewUser(false)}
            tabIndex={0}
            role="button"
            onClick={() => setIsNewUser(false)}
          >
            Click Here
          </span>
        </p>
      ) : (
        <p>
          New user? Sign up{' '}
          <span
            onKeyPress={() => setIsNewUser(true)}
            tabIndex={0}
            role="button"
            onClick={() => setIsNewUser(true)}
          >
            Here
          </span>
        </p>
      )}
    </>
  );
};

export default Login;
