import React, { useState } from 'react'
import styled from 'styled-components'
import './login.css'

const Styled = {
    Body: styled.div`
      display : flex;
      width : 100%;
      background-color : #5E53C7;
      flex-direction : column;
    `,
    Container: styled.div`
      display : flex;
      width : 1000px;
      height : 969px;
      margin : auto;
      flex-direction : column;
      background-color : #5E53C7;
      text-align: center;
    `,
    Wrapper: styled.div`
      display : flex;
      width : 100%;
    `,
    Input: styled.div`
      display : flex;
      align-items: center;
      justify-content: center;
      width : 100%;
      border : 2px solid #ffffff;
      padding : 24px;
      flex-direction : column;
      font-weight: bold;
      color: #ffffff;
      margin-top: 300px;
      height: 300px;
  `,
}

const LoginPage = ({history}) => {

    const [loginInfos, setLoginInfos] = useState(
        {
            id: '',
            pw: ''
        }
    )

    const changeLogin = (e) => {
        setLoginInfos((prevState) => {
            return {
                ...prevState,
                [e.target.id] : e.target.value
            }
        })
    }

    const handleLoginButton = () => {
        if (`${loginInfos.id}` === '') {
            alert('아이디를 입력해 주십시요!')
        } else if (`${loginInfos.pw}` === '') {
            alert('비밀번호를 입력해 주십시요!')
        } else {
            localStorage.setItem('id', `${loginInfos.id}`)            
            localStorage.setItem('pw', `${loginInfos.pw}`)           
            alert('로그인에 성공하였습니다!')
            history.push('/')
            window.location.reload()
        }
    }

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Input>
                        <input
                            value={loginInfos.id}
                            className="Input"
                            type="id"
                            id="id"
                            placeholder='아이디를 입력해 주세요.'
                            onChange={changeLogin}
                        />
                        <input
                            value={loginInfos.pw}
                            className="Input"
                            type="password"
                            id="pw"
                            placeholder='비밀번호를 입력해 주세요.'
                            onChange={changeLogin}
                        />
                        <button
                            className="submitBtn"
                            onClick={handleLoginButton}
                        >로그인</button>
                    </Styled.Input>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Body>
    )

}

export default LoginPage