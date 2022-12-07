const BASE_URL = "http://localhost:5000/api/account/"


export const getUserProfile = async() => {
    try {
        const url = `${BASE_URL}/getUserProfile`;
        const response = await fetch(url,{
            method:"GET",
            headers : {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data
    }
    catch(err) {
        console.log(err)
        return err
    }
}
export const loginUserService = async(credentials) => {
    try {
        const url = `${BASE_URL}/login`;
        const response = await fetch(url,{
            method:"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(credentials)
        })
        const data = await response.json();
        console.log("response data ",data)
        return data;
    }
    catch(err) {
        console.log(err)
        return {success:false}
    }
}

export const registerUserService = async(credentials) => {
    try {
        const {image,firstname,lastname,username,email,password} = credentials
        console.log(credentials)
        const formData = new FormData();
        formData.append('image',image)
        formData.append('firstname',firstname)
        formData.append('lastname',lastname)
        formData.append('email',email)
        formData.append('username',username)
        formData.append('password',password)
        

        console.log(formData)
        const url = `${BASE_URL}/register`;
        const response = await fetch(url,{
            method:"POST",
            body : JSON.stringify(formData)
        })
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(err) {
        console.log(err)
        return {success:false}
    }
}