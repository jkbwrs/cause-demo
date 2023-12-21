

import type { PageLoad } from './$types';
import type { Actions } from './$types';


export const load: PageLoad = () => {

    // Api Call Data on Page Load
    console.log("Page Load runs")


	return {
		profil: {
			firstname: "Peter",
            lastname: "Müller",
            email: "peter@müller.de",
            invoices: [
                {
                    date: "2024-02-01T00:00:00.000Z",
                    link: "https://www.example.com/invoice1"
                },
                {
                    date: "2024-02-15T00:00:00.000Z",
                    link: "https://www.example.com/invoice2"
                },
                {
                    date: "2024-03-01T00:00:00.000Z",
                    link: "https://www.example.com/invoice3"
                },
                {
                    date: "2024-03-15T00:00:00.000Z",
                    link: "https://www.example.com/invoice4"
                }
            ]
		}
	}
};



export const actions = {

	changeName: async ({request}) => {
        const data = await request.formData();
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');

        

		console.log(firstname, lastname, "changeName runs")
	},

    changeEmail: async ({request}) => {
        const data = await request.formData();
        const newMail = data.get('newMail');
        const newMailConfirmed = data.get('newMailConfirmed');

		console.log(newMail, newMailConfirmed, "changeEmail runs")
    },

    changePassword: async ({request}) => {
        const data = await request.formData();
        const newPassword = data.get('newPassword');
        const newPasswordConfirmed = data.get('newPasswordConfirmed');

		console.log(newPassword, newPasswordConfirmed, "changePassword runs")
    },

    changePayment: async (event) => {
        console.log("changePayment runs")
    },

    deleteAccount: async (event) => {
        console.log("deleteAccount runs")
    }


} satisfies Actions;