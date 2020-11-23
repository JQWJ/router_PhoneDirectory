import React from 'react'
import { withRouter } from 'react-router-dom'

const GlobalHeader = ({ location }) => {

    const handleLogoutButton = () => {
        localStorage.clear()
        window.location.href = '/login'
    }

    const handleLoginButton = () => {
        window.location.href = '/login'
    }

    const handleHomeButton = () => {
        window.location.href = '/'
    }



    console.log(location.pathname)

    return (
        <>
            {`${location.pathname}` === '/login' ? (
                '') : (
                    <div className="back">
                        <button
                            className="homeBtn"
                            onClick={handleHomeButton}
                        >Home</button>
                        {localStorage.getItem('id' && 'pw') ? (
                            <div
                                className="userId"
                            >
                                {localStorage.getItem('id')}
                            </div>
                        ) :
                            <button
                                className="loginBtn"
                                onClick={handleLoginButton}
                            >
                                login
                            </button>
                        }
                        {localStorage.getItem('id' && 'pw') ? (
                            <button
                            className="logoutBtn"
                            onClick={handleLogoutButton}
                        >logout</button> 
                        ) : (
                            ''
                        )
                    }
                        
                    </div>
                    
                )
            }
        </>
    )
}

export default withRouter(GlobalHeader)