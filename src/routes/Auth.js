import React, { useState } from 'react'
import { authService } from '../fbData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import styled from 'styled-components';
import '../assets/font/font.css';

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const handleChange = (e) => {
    const {target: {name, value}} = e;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(authService, email, password);
        console.log(data);
      } else {
        const data = await signInWithEmailAndPassword(authService, email, password);
        console.log(data);
      }
    } catch (error) {
      setError('이메일 혹은 비밀번호가 잘못되었습니다.');
    }
  }
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  }

  return (
    <SecMain>
      <WrapMain>
        {newAccount ?
          <TxtTitle>Quest 회원가입</TxtTitle>
          : <TxtTitle>Quest 로그인</TxtTitle>
        }
        <form onSubmit={handleSubmit}>
          <InpEmail
            type='text'
            name='email'
            placeholder='이메일'
            required
            value={email}
            onChange={handleChange}
          />
          <InpEmail
            type='password'
            name='password'
            placeholder='비밀번호'
            required
            autoComplete='false'
            value={password}
            onChange={handleChange}
          />
          <TxtError>{error && error}</TxtError>
          <BtnLogin type="submit">{newAccount ? '계정 생성' : '로그인'}</BtnLogin>
        </form>
        <WrapBtn>
          <BtnChange type='button' onClick={toggleAccount}>{newAccount ? '로그인하기' : '계정 생성하기'}</BtnChange>
          <BtnGoogle type='button'>구글 이메일로 로그인</BtnGoogle>
        </WrapBtn>
      </WrapMain>
    </SecMain>
  )
}

const SecMain = styled.main`
  width: 100vw;
  height: 100vh;
  font-family: 'appleGothic';
  background-color: #202540;
`
const WrapMain = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 2px #00000070;
  padding: 20px 10px;
  background-color: #3c4574;
`
const TxtTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 1.6rem;
  text-align: center;
`
const InpEmail = styled.input`
  display: block;
  width: 300px;
  margin-bottom: 5px;
  padding: 10px 5px;
  font-family: 'appleGothic';
  font-size: 1rem;
`
const TxtError = styled.strong`
  font-size: .8rem;
  font-weight: 400;
  color: #c88888;
`
const BtnLogin = styled.button`
  display: block;
  box-shadow: 0 2px 5px 1px #00000050;
  border: none;
  border-radius: 40px;
  width: 300px;
  margin-top: 20px;
  padding: 10px 0;
  font-family: 'appleGothic';
  font-size: 1rem;
  font-weight: 700;
`
const WrapBtn = styled.div`
  margin-top: 10px;
  text-align: center;
`
const BtnChange = styled.button`
  border: none;
  border-bottom: 1px solid #000;
  margin-right: 5px;
  font-family: 'appleGothic';
  background-color: transparent;
`
const BtnGoogle = styled.button`
  border: none;
  border-bottom: 1px solid #000;
  font-family: 'appleGothic';
  background-color: transparent;
`