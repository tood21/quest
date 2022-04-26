import React, { useState } from 'react'
import { authService } from '../fbData';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

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
      setError(error.message);
    }
  }
  const toggleAccount = () => {
    setNewAccount((prev) => !prev);
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='email'
          placeholder='이메일'
          required
          value={email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='비밀번호'
          required
          autoComplete='false'
          value={password}
          onChange={handleChange}
        />
        <button type="submit">{newAccount ? '계정 생성' : '로그인'}</button>
        {error}
      </form>
      <button type='button' onClick={toggleAccount}>{newAccount ? '로그인하기' : '계정 생성하기'}</button>
      <div>
        <button>구글 이메일로 로그인</button>
      </div>
    </main>
  )
}
