import * as Yup from 'yup'
import axios from 'axios'


export const sendMessage = values => {
	return axios
		.post('/api/user_feedback', {
			first_name: values.firstname,
			last_name: values.lastname,
			email: values.email,
			message: values.message
		})
		.then(response => {
			return response.data
		})
}

export const validation = Yup.object({
	firstname: Yup.string()
		.required('Required'),
	lastname: Yup.string()
		.required('Required'),
	email: Yup.string()
		.required('Required')
		.email('Invalid email address'),
	message: Yup.string()
		.required('Required')
})


