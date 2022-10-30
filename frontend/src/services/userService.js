const BASE_URL = "http://localhost:5000/api/account/"

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
        const url = `${BASE_URL}/register`;
        const response = await fetch(url,{
            method:"POST",
            body : JSON.stringify(credentials)
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