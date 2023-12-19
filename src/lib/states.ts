import { writable } from 'svelte/store';

export let user = writable("")

interface PersonalProfile {
  gender: 'male' | 'female' | 'diverse';
  height: number;
  weight: number;
  age: number;
  bodyFatPercentage: number;
}

interface DietaryProfile {
  dietType: 'Mixed' | 'Vegan' | 'Vegetarian' | 'Carnivore' | 'Low Carb' | 'Pescetarian' | 'Paleo';
  fishPerWeek: number;
  meatPerWeek: number;
  eggsPerWeek: number;
  dairyPerWeek: number;
  vegetableServingsPerDay: number;
  fruitServingsPerDay: number;
  cupsOfCoffeePerDay: number;
}

interface LifestyleProfile {
  hoursOfSleepPerNight: number;
  sleepQuality: number;
  cigarettesPerDay: number;
  hoursOfExercisePerWeek: number;
  hoursOfStrengthTrainingPerWeek: number;
  hoursOfCardioPerWeek: number;
  stressLevel: number;
}

interface LifePhaseProfile {
  pregnant: boolean;
  breastfeeding: boolean;
}

export interface CompleteProfile {
  personalProfile: PersonalProfile;
  dietaryProfile: DietaryProfile;
  lifestyleProfile: LifestyleProfile;
  lifePhaseProfile: LifePhaseProfile;
}





/*

const initialProfile: CompleteProfile = {
  personalProfile: {
    gender: 'diverse',
    height: 0,
    weight: 0,
    age: 0,
    bodyFatPercentage: 0,
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
  },
  lifestyleProfile: {
    hoursOfSleepPerNight: 0,
    sleepQuality: 0,
    cigarettesPerDay: 0,
    hoursOfExercisePerWeek: 0,
    hoursOfStrengthTrainingPerWeek: 0,
    hoursOfCardioPerWeek: 0,
    stressLevel: 0,
  },
  lifePhaseProfile: {
    pregnant: false,
    breastfeeding: false,
  },
};


export const questions = writable<CompleteProfile>(initialProfile);

*/