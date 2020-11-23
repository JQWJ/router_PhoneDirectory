import React, { useState } from 'react'
import styled from 'styled-components'
import PhoneBookList from '../../components/PhoneBookList'
import AddUser from '../../components/AddUser'
import SearchUser from '../../components/SearchUser'
import moment from 'moment'
import 'moment/locale/ko'

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
    min-height : 1000px;
    margin : auto;
    flex-direction : column;
    background-color : #5E53C7;
	  text-align: center;
  `,
  Wrapper: styled.div`
    display : flex;
    width : 100%;
  `,
  Add: styled.div`
	display: flex;
	width: 35%;
	height: 50px;
	align-items: center;
	justify-content: center;
	border: 2px solid #ffffff;
	margin : auto;
  margin-top: 10px;
  `,
  Col: styled.div`
  display : flex;
  width : ${props => props.width}%;
`,
}

function MainPage({ history }) {

  const [searchKeyword, setSearchKeyword] = useState('')

  const [phoneBookInfos, setPhoneBookInfos] = useState([
    {
      id: 0,
      name: '장정재',
      phoneNumber: '01030800514',
      isEditing: false,
      isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    {
      id: 1,
      name: '',
      phoneNumber: '',
      isEditing: false,
      isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
  ])

  /* const handleChange = (e) => {
    setPhoneBookInfos({
      ...phoneBookInfos,
      [e.target.name] : e.target.value
    })
  } */

  const handleInfo = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          if (res.isEditing === false) {
            // window.location.href = '/info/안녕/하세요'
            history.push(`/info/${res.name}/${res.phoneNumber}`)
          }
        }
        return res
      })
    })
  }

  const handleSearch = (e) => {
    setSearchKeyword(e.target.value)
  }

  const handleCreate = () => {
    setPhoneBookInfos((prevState) => {
      return prevState.concat(
        {
          id: prevState.length + 1,
          name: '',
          phoneNumber: '',
          isEditing: false,
          isDate: moment().format('YYYY-MM-DD HH:mm:ss'),
        },
      )
    })
  }

  const handleEditButton = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (id === res.id) {
          return {
            ...res,
            isEditing: !res.isEditing
          }
        }
        return res
      })
    })
  }

  const handleRemove = (id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.filter(res => res.id !== id)
    })
  }

  const handleChange = (e, id) => {
    setPhoneBookInfos((prevState) => {
      return prevState.map((res) => {
        if (res.id === id) {
          return {
            ...res,
            [e.target.name]: e.target.value
          }
        }
        return res
      })
    })
  }

  // const handleLoginButton = (e) => {
  //     history.push('/login')
  // }

  // const handleLogoutButton = () => {
  //   localStorage.clear()
  //   window.location.reload()
  // } 

  return (
    <Styled.Body>
      <Styled.Add>
        <SearchUser
          onChange={handleSearch}
          infos={searchKeyword}
        />
      </Styled.Add>
      <Styled.Add>
        <AddUser
          onClick={handleCreate}
        />
      </Styled.Add>
      <Styled.Container>
        <Styled.Wrapper>
          <PhoneBookList
            onChange={handleChange}
            infos={phoneBookInfos.filter((res) => {
              return res.name.indexOf(searchKeyword) > -1
            })}
            onClickEditButton={handleEditButton}
            remove={handleRemove}
            impo={handleInfo}
          />
        </Styled.Wrapper>
      </Styled.Container>
    </Styled.Body>
  );
}

export default MainPage;
