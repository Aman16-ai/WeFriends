import React from 'react'
import NavBar from '../components/NavBar'
import style from "./Home.module.css"
import { useEffect } from 'react'
import { userThunk } from '../slices/userslice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUserProfile } from '../services/userService'
export default function Home() {

  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userThunk())
  },[])

  
  return (
    <div style={{width:"100vw",height:"100vh",backgroundColor:"#F0F2F5"}}>
      <NavBar/>
    </div>
  )
}
