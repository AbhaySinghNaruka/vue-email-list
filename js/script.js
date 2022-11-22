new Vue({
	el: '#app',
	data: {
		email: 0,
		arrEmail: [],
	},
	methods: {
		getEmail() {
			axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => {
					this.email = axiosResponse.data.response;
				})
		},
		getEmails() {
			this.arrEmail = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then(axiosResponse => {
					this.arrEmail.push(axiosResponse.data.response);
				})
			}
		},
	},
});