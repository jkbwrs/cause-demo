import type { PageServerLoad } from './$types';


export const load: PageServerLoad = () => {

    // Api Call Data
    console.log('Page Load runs')


	return {
        // Return Data
        info: {
            bloodTestDate: {

            },
            vitamines: {

            },
            minerals: {
                Kalzium: 50,
                Magnesium: 60,
                Kupfer: 40,
                Eisen: 70,
                Mangan: 30,
                Selen: 50,
                Zink: 80
            },
            other: {
                CoQ10: 60,
                Hyaluronsäure: 70,
                Omega3: 80,
                Lutein: 50,
                ALA: 40,
                Kollagen: 60,
                MSM: 30,
                Phytosterol: 70
            }
        }
	};
};