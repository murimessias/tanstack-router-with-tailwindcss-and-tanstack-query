import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Content-Type': 'application/json',
	},
})

instance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		return Promise.reject(error)
	},
)

export { instance as http }
