

import type { PageLoad } from './$types';
import type { Actions } from './$types';


export const load: PageLoad = () => {

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
                cupsOfCoffeePerDay: 0,
                cupsOfWaterPerDay: 0,
                milkPerWeek: 0,
                foodQualität: "low",
                nutrion: ""
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
                pregnant: false,
                breastfeeding: false,
                contraception: false,
                menopause: false,
            },
        }
	}
};



export const actions = {

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


} satisfies Actions;