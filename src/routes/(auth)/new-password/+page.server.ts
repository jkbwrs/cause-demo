

import type { Actions } from './$types';


export const actions: Actions = {

	newPassword: async ({request}) => {
        const data = await request.formData();
        const password = data.get('password');
        const passwordConfirmed = data.get('passwordConfirmed');


		console.log(password, passwordConfirmed, "Login runs")
	},

}