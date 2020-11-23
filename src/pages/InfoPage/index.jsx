import React, { useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

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
      min-height : 946px;
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
      margin-top: 20px;
      height: 500px;
  `,
    Row: styled.div`
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width : 100%;
      margin-bottom : ${props => props.bottom}px;
  `,
    But: styled.div`
     display: flex;
     margin-top: 80px;
     justify-content: space-evenly;
     width: 100%;
    `,
}

const InfoPage = ({ match }, props) => {

    const { onChange } = props

    const [bookInfos, setBookInfos] = useState({
        isEditing: false,
        name: '',
        phoneNumber: ''
    }
)

    const isDate = moment().format('YYYY-MM-DD HH:mm:ss')

    const handleEditButton = () => {
        setBookInfos((prevState) => {
            return {
                ...prevState,
                isEditing: !prevState.isEditing
            }
        })
    }

    return (
        <Styled.Body>
            <Styled.Container>
                <Styled.Wrapper>
                    <Styled.Input>
                        {bookInfos.isEditing ? (
                            <>
                                <input
                                    className="InfoEdit"
                                    type="text"
                                    name="name"
                                    value={match.params.name}
                                    onChange={onChange}
                                />
                                <input
                                    className="InfoEdit"
                                    type="number"
                                    name="phoneNumber"
                                    value={match.params.phoneNumber}
                                    onChange={onChange}
                                />
                            </>
                        ) : (
                                <>
                                    <Styled.Row>
                                        <h2>이름 : {match.params.name}</h2>
                                    </Styled.Row>
                                    <Styled.Row>
                                        <h2>전화번호 : {match.params.phoneNumber}</h2>
                                    </Styled.Row>
                                    <Styled.Row>
                                        {isDate}
                                    </Styled.Row>
                                </>
                            )}
                        <Styled.But>
                            <button
                                className="loginBtns"
                                onClick={handleEditButton}
                            >
                                {bookInfos.isEditing ? '저장하기' : '수정하기'}
                            </button>
                            <button
                                className="loginBtns"
                            >삭제하기</button>
                        </Styled.But>
                    </Styled.Input>
                </Styled.Wrapper>
            </Styled.Container>
        </Styled.Body>
    )
}

export default InfoPage