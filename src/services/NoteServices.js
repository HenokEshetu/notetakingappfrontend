import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_API_URL = "http://localhost:8012/api/v1/note"

export const getNotes = async () => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.get(BASE_API_URL, {headers: headers})
	return response.data
}

export const getNotesByUserId = async (userId) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.get(BASE_API_URL + "/user-id/" + userId, {headers: headers})
	return response.data
}

export const getNote = async (id) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.get(BASE_API_URL + "/" + id, {headers: headers})
	return response.data
}

export const createNote = async (note) => {
	let data = JSON.stringify({
		"title": note.title,
		"body": note.body,
		"userId": note.userId
	});

	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: BASE_API_URL,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${Cookies.get("accessToken")}`
		},
		data : data
	};
	const response = await axios.request(config);
	return response.data
}

export const updateNote = async (note) => {
	let data = JSON.stringify({
		"noteId": note.noteId,
		"title": note.title,
		"body": note.body,
		"userId": note.userId
	});

	let config = {
		method: 'put',
		maxBodyLength: Infinity,
		url: BASE_API_URL,
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${Cookies.get("accessToken")}`
		},
		data : data
	};
	const response = await axios.request(config);
	return response.data
}

export const deleteNote = async (id) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.delete(BASE_API_URL + "/" + id + "/delete", {headers: headers})
	return response.data
}

