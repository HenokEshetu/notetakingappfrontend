import axios from 'axios';

const BASE_API_URL = "http://localhost:8012/api/v1/"

export const getUsers = async () => {
    const response = await axios.get(BASE_API_URL + "user")
    return response.data
}

export const getUser = async (id) => {
    const response = await axios.get(BASE_API_URL + `user/${id}`)
    return response.data
}

export const getNotes = async () =>{
	const response = await axios.get(BASE_API_URL + "note")
	return response.data
}
