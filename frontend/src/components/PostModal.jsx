import React from 'react'
import Modal from "@mui/material/Modal"
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Button from "@mui/material/Button"
import pic from "../static/pickimg.png"
import { useState } from 'react';
const style = {
    width:"35vw",
    height:"65vh",
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor:"white",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13)",
    boxShadow: 24,
    p: 4,
    display:"flex",
    flexDirection:"column"
  };
  
export default function PostModal(props) {
    const user = useSelector(state=> state.user.user)
    const [prevImg,setPrevImg] = useState(pic)
    const onImageChange=(e)=> {
        setPrevImg(URL.createObjectURL(e.target.files[0]))
    }
    const handleClose = () => {
        props.setOpen(prev => !prev)
    }
  return (
    <Modal open={props.open} onClose={handleClose}>
        <div style={style}>
            <div style={{
                width:'100%',
                display:"flex"}}>
            <Typography style={{marginLeft:"10px",marginTop:"10px"}} variant={"h4"}>
                Create post
            </Typography>
            <button style={{
                width:"50px",
                height:"50px",
                marginLeft:"auto",
                marginRight:"20px",
                marginTop:"10px",
                borderRadius:"50%",
                fontSize:"1.7rem",
                color:"#606770",
                border:"none",
                cursor:"pointer",
                backgroundColor:"#E4E6EB"
                }} onClick={handleClose}>X</button>
            </div>
            <hr style={{width:"99%"}}/>
            <div style={{
                display:"flex",
                width:"100%",
                alignItems:"center"
            }} className="user-info">
                <img style={{marginLeft:"19px",marginTop:"10px",borderRadius:"100%",width:"60px",height:"60px"}} src={`http://localhost:5000/${user?.profile?.profileImg}`} alt="" />
                <div style={{marginLeft:"10px"}}>
                <Typography variant='h5'>
                    {user?.profile?.firstName+ " " + user?.profile?.lastName}
                </Typography>
                <button style={{
                    width:"80px",
                    height:"30px",
                    border:"none",
                    borderRadius:"1rem"
                }}>Public</button>
                </div>
            </div>
            <input style={{
                width:"25vw",
                height:"8vh",
                borderRadius:"1rem",
                border:"none",
                fontSize:"larger",
                paddingLeft:"20px",
                marginLeft:"10px",
                }} type="text" name="search" id="" placeholder={`What's on your mind ${user?.profile?.username}`} />
            <div style={{width:"90%",
                      height:"20vh",
                      border:"2px solid #E4E6EB",
                      borderRadius:"0.6rem",
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      justifyContent:"center",
                      marginTop:"10px",
                      alignSelf:"center"
                      }}>
            <label htmlFor="upload-photo">
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="image"
              type="file"
              onChange={onImageChange}
            />

          <img style={{
                      width:"100%",
                      height:"18vh",
                    }} src={prevImg} alt="" />

          </label>
            </div>

            <Button variant='contained' style={{width:"90%",height:"50px",alignSelf:"center",marginTop:"30px"}}>Upload</Button>
        </div>
        
    </Modal>
  )
}
