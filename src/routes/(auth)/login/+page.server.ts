

import type { PageServerLoad } from './$types';
import type { Actions } from './$types';


export const load: PageServerLoad = async () => {

    // Api Call Data on Page Load
    console.log("Page Load runs")


	return {
	}
};



export const actions: Actions = {

	login: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');


		console.log(email, password, "Login runs")
	},

}