import axios from 'axios';

const BASE_API_URL = "http://localhost:8012/api/v1/note"

export const getNotes = async () => {
	const response = await axios.get(BASE_API_URL)
	return response.data
}

export const getNote = async (id) => {
	const response = await axios.get(BASE_API_URL + "/" + id)
	return response.data
}

export const createNote = async (note) => {
	const response = await axios.post(BASE_API_URL, note)
	return response.data
}

export const updateNote = async (note) => {
	const response = await axios.put(BASE_API_URL, note)
	return response.data
}

export const deleteNote = async (id) => {
	const response = await axios.delete(BASE_API_URL + "/" + id + "/delete")
	return response.data
}

