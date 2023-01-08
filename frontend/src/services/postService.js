const BASE_URL = 'http://localhost:5000/api/post'

export const uploadPost = async(formData) => {
    try {
        const url = `${BASE_URL}/upload`;
        const response = await fetch(url,{
            method:'POST',
            headers:{
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body : formData
        })
        if(response.status === 200) {
            const data = await response.json()
            return {...data,success:true}
        }
        return {success:false}
    }
    catch(err) {
        return {success:false}
    }
}