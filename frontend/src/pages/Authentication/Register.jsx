import React from 'react'
import img from "../../static/userimg.png"
import { Input, InputLabel, Step, TextField, Typography,Button } from "@mui/material"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [files, setFiles] = useState(img)
  const [filePreview, setFilesPreview] = useState(img)
  const handleFileChange = (e) => {
    setFiles(e.target.files[0])
    setFilesPreview(URL.createObjectURL(e.target.files[0]))
  }
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
            marginBottom: "0px"
          }}>Register</h3>

          <label htmlFor="upload-photo">
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={handleFileChange}
            />

          <img style={{
                      width:"9vw",
                      height:"18vh",
                      border:"2px solid black",
                      borderRadius:"10rem"
                    }} src={filePreview} alt="" />
          </label>

          {/* <InputLabel >Pick Profile</InputLabel>
          <Input onChange={handleFileChange} placeholder='Pick' inputProps={{'aria-label': 'description'}} type='file'/> */}
          <div style={{ width:"26vw", marginTop: "1.5vh", display: "flex" }} className="names-container">
            <TextField style={{ width: "13vw", marginRight: "0.3vw" }} variant='outlined' label="Firstname" />
            <TextField style={{ width: "13vw" ,marginLeft:"0.3vw" }} variant='outlined' label="Lastname" />
          </div>
          <TextField style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Username"/>
          <TextField style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Email" type={"email"}/>
          <TextField style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Password" type={"password"}/>
        <Button variant="contained" style={{
          marginTop:"5vh",
          marginBottom:"2vh",
          alignSelf:"flex-start",
          marginLeft:"3.6vw",
          borderRadius:"1.5rem",
          width:"10vw",
          height:"7vh"
          }}>Register</Button>
          <Typography style={{marginBottom:"20px",alignSelf:"flex-start",marginLeft:"3.7vw"}} variant='p'>
            Already have an account ? <Link style={{color:"blue"}} to="/login">Login</Link>
          </Typography>
        </div>

      </div>
    </>
  )
}
