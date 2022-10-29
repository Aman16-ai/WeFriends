import React from 'react'
import {Navigate} from "react-router-dom"
export default function PrivateRoute({children}) {
    let token = localStorage.getItem("token")
    console.log(token)
    if(token === null || token === undefined) {
        return <Navigate to={"/login"} />
    }
    return children

}
