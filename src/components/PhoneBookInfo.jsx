import React from 'react'
import styled from 'styled-components'

const Styled = {
    Body: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : 100%;
        border : 2px solid #ffffff;
        padding : 24px;
        flex-direction : column;
        font-weight: bold;
        color: #ffffff;
    `,
    Row: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width : 100%;
        margin-bottom : ${props => props.bottom}px;
        margin-top: 30px;
    `,
    Col: styled.div`
        display : flex;
        align-items: center;
        justify-content: center;
        width : ${props => props.width}%;
    `
}

const PhoneBookInfo = (props) => {

    const { onChange, info, onClickEditButton, remove, impo } = props

    const addData = (e) => {
        onChange(e, info.id)
    }

    const onRemove = () => {
        remove(info.id)
    }

    const onInfo = () => {
        impo(info.id)
    }

    return (
        <Styled.Body>
            {info.isEditing ? (
                <>
                    <input
                        className="EditInput"
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={addData}
                    />
                    <input
                        className="EditInput"
                        type="number"
                        name="phoneNumber"
                        value={info.phoneNumber}
                        onChange={addData}
                    />
                </>
            ) : (
                    <>
                        <b>이름 : {info.name}</b>
                        <b>전화번호 : {info.phoneNumber}</b>
                        <b>입력날짜 : {info.isDate}</b>
                    </>
                )}

            <Styled.Row>
                <button
                        className="loginBtn"
                        onClick={e => {
                        e.preventDefault()
                        onClickEditButton(info.id)
                    }}
                >
                    {info.isEditing ? '저장' : '수정'}
                </button>
                <button
                    className="loginBtn"
                    onClick={onRemove}
                >삭제하기</button>
                <button
                    className="loginBtn"
                    onClick={onInfo}
                >정보관리</button>
            </Styled.Row>

        </Styled.Body>
    )

}

export default PhoneBookInfo