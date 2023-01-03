import { Button, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Post() {
  const user = useSelector(state=> state.user.user)
  return (
    <div style={{width:"68%",height:"60%",backgroundColor:"white",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13)",borderRadius:"1rem"}}>
      <div style={{display:"flex"}}>
      <img style={{marginLeft:"19px",marginTop:"10px",borderRadius:"15rem",width:"5vw",height:"65px"}} src={`http://localhost:5000/${user?.profile?.profileImg}`} alt="" />
      <input style={{
                width:"25vw",
                height:"8vh",
                backgroundColor:"#F0F2F5",
                borderRadius:"1rem",
                border:"none",
                fontSize:"larger",
                paddingLeft:"20px",
                alignSelf:"center",
                marginLeft:"10px"
                }} type="text" name="search" id="" placeholder={`What's on your mind ${user?.profile?.username}`} />
      </div>
      <hr style={{marginLeft:"10px",marginRight:"10px"}} />
      <div style={{display:"flex", marginLeft:"20px"}}>
        <Button variant={'contained'} style={{textTransform:"none"}}>Photo</Button>
        <Button variant='contained' style={{marginLeft:"10px",textTransform:"none"}}>Battle</Button>
      </div>
    </div>
  )
}
