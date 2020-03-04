import React from 'react';

const Form = props => {
  const {
    isNewUser,
    setIsNewUser,
    form,
    handleChange,
    handleSubmit,
    error
  } = props;

  return (
    <>
      <h1>{isNewUser ? 'Register' : 'Login'}</h1>
      <form onSubmit={e => handleSubmit(e, isNewUser)}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            onChange={handleChange}
            name="username"
            value={form.username}
            required
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            onChange={handleChange}
            name="password"
            value={form.password}
            required
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
              required
            />
          </label>
        ) : null}
        <button type="submit">{isNewUser ? 'Register' : 'Login'}</button>
        <p>{error}</p>
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

export default Form;
