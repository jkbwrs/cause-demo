

import type { Actions } from './$types';


export const actions: Actions = {

	signup: async ({request}) => {
        const data = await request.formData();
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const email = data.get('email');
        const emailConfirmed = data.get('emailConfirmed');
        const password = data.get('password');
        const passwordConfirmed = data.get('passwordConfirmed');


		console.log(email, password, "Login runs")
	},

}