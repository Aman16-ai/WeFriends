import React from 'react'
import NavBar from '../components/NavBar'
import style from "./Home.module.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { userThunk } from '../slices/userslice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUserProfile } from '../services/userService'
import Post from '../components/Post'
import PostModal from '../components/PostModal'
export default function Home() {

  const user = useSelector((state)=>state.user.user)
  const dispatch = useDispatch()
  const [open,setOpen] = useState(false)

  useEffect(() => {
    dispatch(userThunk())
  },[])

  
  return (
    <div style={{width:"100vw",height:"auto",backgroundColor:"#F0F2F5"}}>
      <NavBar/>
      <div className={style['main-container']}>
        <div className={style['left-container']}>
          <div className={style['left-upper-container']}>
              <Post setOpen={setOpen}/>
              <PostModal setOpen={setOpen} open={open}/>
          </div>
          <div className={style['left-bottom-container']}>

          </div>
        </div>
        <div className={style['right-container']}>

        </div>
      </div>
    </div>
  )
}
