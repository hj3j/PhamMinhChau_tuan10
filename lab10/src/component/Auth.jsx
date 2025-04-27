import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {login, logout, setUserInfo} from './redux/AuthSlice'

function Auth() {
    const user = useSelector ((state)=> state.auth.user)
    const isLoggedIn = useSelector((state)=> state.auth.isLoggedIn)
    const dispatch = useDispatch()


    const [userName, setUserName] = useState('')
    const [error, setError] = useState(false)


    const handleLogin = () => {
        if (userName.trim() && userName != ''){
            dispatch(login())
            dispatch(setUserInfo(userName))
            setUserName('')
        }else{
            setError(true)
        }
       
    }

    const handleLogout = () => {
        dispatch(logout())
        setError(false)
    }

    



  return (
    <div className='auth'>
            <h1 style={{backgroundColor:"yellow"}}>AUTH</h1>
            {
                !isLoggedIn ? (
                    <>
                        <h2>Vui lòng đăng nhập</h2>
                        <input type="text" placeholder='Nhập tên đăng nhập....' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
                        <button className='loginButton' onClick={()=>handleLogin()}>Đăng nhập</button> <br />
                        {(error) ? <div className='error'>*Vui lòng nhập tên đăng nhập!</div>   : <div></div>}

                    </>
                ) : (
                    <>
                        <h2>Chào mừng đăng nhập, {user} 🎉🎉</h2>
                        <button className='logoutButton' onClick={()=>handleLogout()}>Đăng xuất</button>
                    </>

                )
            }
    </div>
  )
}

export default Auth
