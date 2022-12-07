import { TextField } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../static/logo.png"
import userimg from "../static/userimg.png"
import { useSelector } from 'react-redux'
export default function NavBar() {

    const user = useSelector((state)=>state.user.user)
  return (
    <header style={{
        width:"100vw",
        height:"5vh",
        backgroundColor:"white",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13)",
        display : "flex",
        alignItems:"center",
        padding:'15px'
        }}>
        <img style={{width:"10vw",height:"5vh"}} src={logo}alt="" />
        <nav style={{marginLeft:"3vw"}}>
            <NavLink style={{textDecoration:"none",color:"black",fontSize:"larger"}} >Home</NavLink>
            <NavLink style={{marginLeft:"30px",marginRight:"30px",textDecoration:"none",color:"black",fontSize:"larger"}}>Post</NavLink>
            <NavLink style={{textDecoration:"none",color:"black",fontSize:"larger"}}>Requests</NavLink>
            <NavLink style={{marginLeft:"30px",textDecoration:"none",color:"black",fontSize:"larger"}}>Notifications</NavLink>
        </nav>
        <div style={{marginLeft:"5vw"}} className="search-bar">
            <input style={{
                width:"25vw",
                height:"6vh",
                backgroundColor:"#F0F2F5",
                borderRadius:"1rem",
                border:"none",
                fontSize:"larger",
                paddingLeft:"20px"
                }} type="text" name="search" id="" placeholder='search wefriends' />
        </div>

        <div style={{marginLeft:"8vw",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <h3 style={{fontSize:'larger'}}>Hi! {user?.profile?.username}</h3>
            <img style={{marginLeft:"19px",borderRadius:"15rem",width:"5vw",height:"60px"}} src={`http://localhost:5000/${user?.profile?.profileImg}`} alt="" />
        </div>
    </header>
  )
}
