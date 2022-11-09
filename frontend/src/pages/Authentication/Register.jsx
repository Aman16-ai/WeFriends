import React from 'react'
import img from "../../static/userimg.png"
import { Input, InputLabel, Step, TextField, Typography,Button } from "@mui/material"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { registerThunk,setCredentials } from '../../slices/registerSlice'

export default function Register() {
  const [files, setFiles] = useState(img)
  const [filePreview, setFilesPreview] = useState(img)
  const navigate = useNavigate()
  // const credentials = useSelector((state)=> state.register.credentials)
  // const token = useSelector((state)=> state.register.token)
  const [credentials,setCredentials] = useState({
    image : {},
    firstname: "",
    lastname : "",
    email : "",
    password : "",
})
  const [token,setToken] = useState("")
  const dispatch = useDispatch()
  const handleOnChange = (e) => {
    const name = e.target.name;
    let value = null;
    if(e.target.name === 'image') {
      // value = e.target.files[0]
      setFiles(e.target.files[0]) 
      setFilesPreview(URL.createObjectURL(e.target.files[0]))
    }
    else value = e.target.value;
    // dispatch(setCredentials({name,value}))
    setCredentials({...credentials,[name]:value})
    
  }

  const handleBtn = async()=> {
    // console.log(credentials)
    // dispatch(registerThunk(credentials))
    console.log(files)
    console.log(credentials)
    const formData = new FormData()
    formData.append('image',files)
    formData.append('firstname',credentials.firstname)
    formData.append('lastname',credentials.lastname)
    formData.append('username',credentials.username)
    formData.append('email',credentials.email)
    formData.append('password',credentials.password)
    console.log(formData.get("firstname"))
    let url = "http://localhost:5000/api/account/register"
    const response = await fetch(url,{
      //mode:'no-cors',
      method:'POST',
      headers : {
        'Accept': 'application/json',
        
    },
      body : formData
    })
    const data = await response.json()
    if(data.success === true) {
      let authtoken = data.authtoken
      setToken(authtoken)
    }
    console.log(data)
  }
  useEffect(()=> {
    console.log(token)
    if(token !== null && token !== undefined && token !== "" && token !== " ") {
      localStorage.setItem("token",token)
      navigate("/")
      window.location.reload(true)
    }
  },[token])
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
              name="image"
              type="file"
              onChange={handleOnChange}
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
            <TextField name='firstname' value={credentials.firstname} onChange={handleOnChange} style={{ width: "13vw", marginRight: "0.3vw" }} variant='outlined' label="Firstname" />
            <TextField name='lastname' onChange={handleOnChange} style={{ width: "13vw" ,marginLeft:"0.3vw" }} variant='outlined' label="Lastname" />
          </div>
          <TextField name='username' onChange={handleOnChange} style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Username"/>
          <TextField name='email' onChange={handleOnChange} style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Email" type={"email"}/>
          <TextField name='password' onChange={handleOnChange} style={{marginTop:"10px",width:"26vw"}} variant='outlined' label="Password" type={"password"}/>
        <Button variant="contained" style={{
          marginTop:"5vh",
          marginBottom:"2vh",
          alignSelf:"flex-start",
          marginLeft:"3.6vw",
          borderRadius:"1.5rem",
          width:"10vw",
          height:"7vh"
          }} onClick={handleBtn} >Register</Button>
          <Typography style={{marginBottom:"20px",alignSelf:"flex-start",marginLeft:"3.7vw"}} variant='p'>
            Already have an account ? <Link style={{color:"blue"}} to="/login">Login</Link>
          </Typography>
        </div>

      </div>
    </>
  )
}
