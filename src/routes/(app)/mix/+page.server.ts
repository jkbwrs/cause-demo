

import type { PageLoad } from './$types';

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
                bodyFatPercentage: "10 - 15",
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
            },
        }
	}
};
