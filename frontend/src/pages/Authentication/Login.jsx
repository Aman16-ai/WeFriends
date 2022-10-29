import React from 'react'
import img from "../../static/userimg.png"
import { Input, InputLabel, Step, TextField, Typography,Button } from "@mui/material"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  
  return (
    <>
      <div style={{ backgroundColor:"#F0F2F5",width:"100vw",height:"100vh", display: "flex", justifyContent: "center", alignItems: "center" }} className="container">
        <div style={{
          width: "28rem",
          height: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius:"1rem",
          backgroundColor:"white",
          boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13)"
        }} className="login-container">

          <h3 style={{
            fontSize: "1.9rem",
            alignSelf: "flex-start",
            marginLeft: "3.3vw",
            marginBottom: "10px"
          }}>Login</h3>

          <TextField style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Username"/>
          <TextField style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Password" type={"password"}/>
        <Button variant="contained" style={{
          marginTop:"5vh",
          marginBottom:"2vh",
          alignSelf:"flex-start",
          marginLeft:"3.6vw",
          borderRadius:"1.5rem",
          width:"10vw",
          height:"7vh"
          }}>Login</Button>
          <Typography style={{marginBottom:"20px",alignSelf:"flex-start",marginLeft:"3.7vw"}} variant='p'>
            Don't have an account ? <Link style={{color:"blue"}} to="/Register">Register</Link>
          </Typography>
        </div>

      </div>
    </>
  )
}
