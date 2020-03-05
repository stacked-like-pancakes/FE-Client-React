import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.7rem;
`;

const Input = styled.input`
  border-radius: 2px;
  background: none;
  border: 1px solid #333333;
  font-family: sans-serif;
  padding: 2%;
`;

const TrickSpan = styled.span`
  border-bottom: 2px solid transparent;
  font-size: 0.8rem;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #333;
  }
`;

const Error = styled.p`
  color: #ed4337;
  font-size: 0.8rem;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 auto;
  width: 80%;
  background: #333;
  color: white;
  border: 1px solid #333;
  margin-bottom: 10px;
  border-radius: 2px;
  text-transform: uppercase;
  padding: 2%;

  &:hover {
    color: #333;
    background: white;
    cursor: pointer;
  }
`;

const Sub = styled.p`
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;

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
    <Container>
      <h1>{isNewUser ? 'Register' : 'Login'}</h1>
      <FormWrapper
        autocomplete="off"
        onSubmit={e => handleSubmit(e, isNewUser)}
      >
        <Field htmlFor="username">
          <Sub>Username</Sub>
          <Input
            type="text"
            onChange={handleChange}
            name="username"
            value={form.username}
            required
            autocomplete="off"
          />
        </Field>
        <Field htmlFor="password">
          <Sub>Password</Sub>
          <Input
            type="password"
            onChange={handleChange}
            name="password"
            value={form.password}
            required
            autocomplete="off"
          />
        </Field>

        {isNewUser ? (
          <Field htmlFor="confirm">
            <Sub>Confirm Password</Sub>
            <Input
              type="password"
              onChange={handleChange}
              name="confirm"
              value={form.confirm}
              required
            />
          </Field>
        ) : null}
        <Button type="submit">{isNewUser ? 'Register' : 'Login'}</Button>
        {error.length ? error.map(err => <Error>{err}</Error>) : null}
      </FormWrapper>
      {isNewUser ? (
        <Sub>
          Already have an account?{' '}
          <TrickSpan
            onKeyPress={() => setIsNewUser(false)}
            tabIndex={0}
            role="button"
            onClick={() => setIsNewUser(false)}
          >
            Login
          </TrickSpan>
        </Sub>
      ) : (
        <Sub>
          New user? Sign up{' '}
          <TrickSpan
            onKeyPress={() => setIsNewUser(true)}
            tabIndex={0}
            role="button"
            onClick={() => setIsNewUser(true)}
          >
            here
          </TrickSpan>
        </Sub>
      )}
    </Container>
  );
};

export default Form;
