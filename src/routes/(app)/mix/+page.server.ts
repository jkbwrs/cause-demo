

import type { PageServerLoad } from './$types';
import type { Actions } from './$types';


export const load: PageServerLoad = () => {

    // Api Call Data
    console.log("Page Load runs")

    

	return {
		mix: {
            personalProfile: {
                gender: 'diverse',
                height: 150,
                weight: 40,
                age: 0,
                bodyFatPercentage: "20 - 22",
                goal: "lose weight",
            },
            dietaryProfile: {
                dietType: 'Mixed',
                fishPerWeek: 0,
                meatPerWeek: 0,
                eggsPerWeek: 0,
                dairyPerWeek: 0,
                vegetableServingsPerDay: 0,
                fruitServingsPerDay: 0,
                cupsOfCoffeePerDay: 1,
                cupsOfWaterPerDay: 1,
                milkPerWeek: 0,
                foodQuality: "low",
                nutrion: "",
                extraNutrion: ""
            },
            lifestyleProfile: {
                hoursOfSleepPerNight: 0,
                sleepQuality: "",
                sleepPerDay: "",
                cigarettes: "no",
                cigarettesPerDay: 0,
                hoursOfExercisePerWeek: 0,
                hoursOfStrengthTrainingPerWeek: 50,
                hoursOfCardioPerWeek: 50,
                stressLevel: "",
            },
            lifePhaseProfile: {
                pregnant: "",
                breastfeeding: "",
                contraception: "",
                menopause: "",
            },
        },

        info: {
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
	}
};



export const actions: Actions = {

	signup: async ({request}) => {
        const data = await request.formData();
        const firstname = data.get('firstname');
        const lastname = data.get('lastname');
        const mail = data.get('mail');
        const mailConfirmed = data.get('mailConfirmed');
        const password = data.get('password');
        const passwordConfirmed = data.get('passwordConfirmed');

        console.log("Signup runs")

        return {

        }
	},

}
