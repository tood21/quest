import React, { useState } from "react";
import { authService } from "../fbase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import styled from "styled-components";

const AuthTemplete = styled.div`
  width: 400px;
  height: 300px;
  margin: 0 auto;
  margin-top: 6rem;
  border-radius: 30px;
  padding: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 10px 25px;
`;

const AuthInput = styled.input`
  display: block;
  border-radius: 16px;
  border: 2px solid #000;
  margin-bottom: 20px;
  padding: 15px;
  background: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AuthDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const AuthButton = styled.button`
  display: block;
  border-radius: 16px;
  border: 2px solid #000;
  margin-bottom: 20px;
  padding: 15px;
  background: ${(props) => props.color};
  cursor: ${(props) => props.cursor};
`;

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    console.log(event.target.name);
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      // setError(error.message);
    }
  };

  const onClickSocialLogin = async () => {
    let provider = new GoogleAuthProvider();
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <AuthTemplete>
      <AuthForm onSubmit={onSubmit}>
        <AuthInput
          name='email'
          type='text'
          placeholder='Email'
          required
          value={email}
          onChange={onChange}
        />
        <AuthInput
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={onChange}
        />
        <AuthInput
          color='rgb(6, 214, 160)'
          cursor='pointer'
          type='submit'
          value={newAccount ? "Create Account" : "Sign In"}
        />
      </AuthForm>
      <div>or</div>
      <AuthDiv>
        <AuthButton cursor='pointer' onClick={onClickSocialLogin}>
          Sign in with Google
        </AuthButton>
      </AuthDiv>
    </AuthTemplete>
  );
}

export default Auth;
