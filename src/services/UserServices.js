import axios from 'axios';

const BASE_API_URL = "http://localhost:8012/api/v1/user"

export const getUsers = async () => {
	const response = await axios.get(BASE_API_URL)
	return response.data
}

export const getUser = async (id) => {
	const response = await axios.get(BASE_API_URL + "/" + id)
	return response.data
}

export const createUser = async (user) => {
	const response = await axios.post(BASE_API_URL, user)
	return response.data
}

export const updateUser = async (user) => {
	const response = await axios.put(BASE_API_URL, user)
	return response.data
}

export const deleteUser = async (id) => {
	const response = await axios.delete(BASE_API_URL + "/" + id + "/delete")
	return response.data
}
