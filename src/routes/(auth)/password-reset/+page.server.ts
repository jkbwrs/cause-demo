

import type { Actions } from './$types';


export const actions: Actions = {

	sendMail: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email');


		console.log(email, "Send Mail runs")
	},

}