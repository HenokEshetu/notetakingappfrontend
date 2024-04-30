import axios from 'axios';
import Cookies from 'js-cookie';

const BASE_API_URL = "http://localhost:8012/api/v1/user"

export const getUsers = async () => {
	const response = await axios.get(BASE_API_URL, {headers: headers})
	return response.data
}

export const getUser = async (id) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.get(BASE_API_URL + "/" + id, {headers: headers})
	return response.data
}

export const getUserByEmail = async (email) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.get(BASE_API_URL + "/email/" + email, {headers: headers})
	return response.data
}

export const createUser = async (user) => {
	let data = JSON.stringify({
		"fullName": user.fullName,
		"email": user.email,
		"password": user.password,
		"role": "USER"
	});

	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: BASE_API_URL + '/auth/register',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};
	const response = await axios.request(config)
	return response.data
}

export const updateUser = async (user) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`,
	};
	const response = await axios.put(BASE_API_URL, user, {headers: headers})
	return response.data
}

export const deleteUser = async (id) => {
	const headers = {
		Authorization: `Bearer ${Cookies.get("accessToken")}`
	};
	const response = await axios.delete(BASE_API_URL + "/" + id + "/delete", {headers: headers})
	return response.data
}

export const login = async (email, password) => {
	let data = JSON.stringify({
		"email": email,
		"password": password
	});

	let config = {
		method: 'post',
		maxBodyLength: Infinity,
		url: BASE_API_URL + '/auth/authenticate',
		headers: {
			'Content-Type': 'application/json'
		},
		data : data
	};

	const response = await axios.request(config);
  return response.data.access_token
}
