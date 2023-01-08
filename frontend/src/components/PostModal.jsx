import React from 'react'
import Modal from "@mui/material/Modal"
import { Alert, Snackbar, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import Button from "@mui/material/Button"
import pic from "../static/pickimg.png"
import { useState } from 'react';
import { uploadPost } from '../services/postService';
const style = {
    width: "35vw",
    height: "65vh",
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: "white",
    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.13)",
    boxShadow: 24,
    p: 4,
    display: "flex",
    borderRadius: "1rem",
    flexDirection: "column"
};

export default function PostModal(props) {
    const user = useSelector(state => state.user.user)
    const [prevImg, setPrevImg] = useState(pic)
    const [caption, setCaption] = useState("")
    const [img, setImg] = useState()

    const [openSnackBar,setOpenSnackBar] = useState(false)
    const [severity,setServerity] = useState("success")
    const [message,setMessage] = useState("")

    const onhandleChange = (e) => {
        setCaption(e.target.value)
    }

    const onImageChange = (e) => {
        setPrevImg(URL.createObjectURL(e.target.files[0]))
        setImg(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        const formData = new FormData()
        formData.append("image", img)
        formData.append("caption", caption)
        const result = await uploadPost(formData)
        console.log(result)
        setOpenSnackBar(true)
        if(result.success) {
            setMessage("Uploaded Successfully")
            setServerity("success")
        }
        else {
            setMessage("Failed to upload")
            setServerity("error")
        }
    }

    const handleClose = () => {
        props.setOpen(prev => !prev)
    }
    const handleSnackBarClose = () => {
        setOpenSnackBar(prev => !prev)
    }
    return (
        <Modal open={props.open} onClose={handleClose}>
            <div style={style}>
                <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleSnackBarClose}>
                    <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {message}
                    </Alert>
                </Snackbar>
                <div style={{
                    width: '100%',
                    display: "flex"
                }}>
                    <Typography style={{ marginLeft: "10px", marginTop: "10px" }} variant={"h4"}>
                        Create post
                    </Typography>
                    <button style={{
                        width: "50px",
                        height: "50px",
                        marginLeft: "auto",
                        marginRight: "20px",
                        marginTop: "10px",
                        borderRadius: "50%",
                        fontSize: "1.7rem",
                        color: "#606770",
                        border: "none",
                        cursor: "pointer",
                        backgroundColor: "#E4E6EB"
                    }} onClick={handleClose}>X</button>
                </div>
                <hr style={{ width: "99%" }} />
                <div style={{
                    display: "flex",
                    width: "100%",
                    alignItems: "center"
                }} className="user-info">
                    <img style={{ marginLeft: "19px", marginTop: "10px", borderRadius: "100%", width: "60px", height: "60px" }} src={`http://localhost:5000/${user?.profile?.profileImg}`} alt="" />
                    <div style={{ marginLeft: "10px" }}>
                        <Typography variant='h5'>
                            {user?.profile?.firstName + " " + user?.profile?.lastName}
                        </Typography>
                        <button style={{
                            width: "80px",
                            height: "30px",
                            border: "none",
                            borderRadius: "1rem"
                        }}>Public</button>
                    </div>
                </div>
                <input style={{
                    width: "25vw",
                    height: "8vh",
                    borderRadius: "1rem",
                    border: "none",
                    fontSize: "larger",
                    paddingLeft: "20px",
                    marginLeft: "10px",
                }} type="text" name="caption" id="" onChange={onhandleChange} placeholder={`What's on your mind ${user?.profile?.username}`} />
                <div style={{
                    width: "90%",
                    height: "20vh",
                    border: "2px solid #E4E6EB",
                    borderRadius: "0.6rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    alignSelf: "center"
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
                            width: "100%",
                            height: "18vh",
                        }} src={prevImg} alt="" />

                    </label>
                </div>

                <Button onClick={handleSubmit} variant='contained' style={{ width: "90%", height: "45px", alignSelf: "center", marginTop: "20px" }}>Upload</Button>
            </div>

        </Modal>
    )
}
