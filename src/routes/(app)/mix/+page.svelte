<script lang="ts">
    import Button from "$lib/components/button.svelte";
    import MultiNumbers from "$lib/components/multiNumbers.svelte";
    import Range from "$lib/components/range.svelte";
    import Upload from "$lib/components/upload.svelte";
    import Step from "$lib/components/step.svelte";
    import Item from "$lib/components/item.svelte";
    import Kapitel from "$lib/components/kapitel.svelte";
    import Indikator from "$lib/components/indikator.svelte";
    import Modal from "$lib/components/modal.svelte";
    import Month from "$lib/components/month.svelte";
    import type { PageData } from "./$types";
    import { fly } from "svelte/transition";
    import { goto } from "$app/navigation";
    import {user} from "$lib/states"

    export let data: PageData;

    let step: number = 0;
    let showMenu: boolean = false;

    let firstname: string = "";
    let lastname: string = "";
    let mail: string = "";
    let confirmMail: string = "";
    let password: string = "";
    let passwordConfirm: string = "";

    function updateCardio(value: number) {
        data.mix.lifestyleProfile.hoursOfCardioPerWeek = value;
        data.mix.lifestyleProfile.hoursOfStrengthTrainingPerWeek = 100 - value;
    }

    function updateStrengthTraining(value: number) {
        data.mix.lifestyleProfile.hoursOfStrengthTrainingPerWeek = value;
        data.mix.lifestyleProfile.hoursOfCardioPerWeek = 100 - value;
    }

    function signupStep() {
        // Signup Funktion
        step += 1;
    }

    $: {
        if (data.mix.dietaryProfile.dietType === "vegetarisch") {
            if (step === 9) step = 10
            if (step === 10) step = 11
        }

        if (data.mix.dietaryProfile.dietType === "vegan") {
            if (step === 9) step = 10
            if (step === 10) step = 11
            if (step === 11) step = 12
            if (step === 12) step = 13
        }

        if (data.mix.personalProfile.gender === "female") {

        }

        if (data.mix.personalProfile.gender === "male") {
            if (step === 28) step = 31
        }

        if ($user != null) {
            if (step === 34) step = 35
        }
    }
</script>

<svelte:head>
    <title>Nutrition Mix</title>
    <meta
        name="description"
        content="Erstelle deinen Personaliserten Nutrition Mix"
    />
</svelte:head>

<div class="wrapper">
    {#if step === 0}
        <Step
            title="Erstelle deinen Personaliserten Nutrition Mix"
            description="Lass uns gemeinsam loslegen! Beantworte ein paar Fragen über dich und deinen Alltag. Wir nutzen deine Antworten, um einen Nutrition Mix zu mixen, der so einzigartig ist wie du."
            progress={false}
        >
            <Button
                text="Los geht's"
                on:click={() => (step += 1)}
                delay={400}
            />
        </Step>
    {:else if step === 1}
        <Step title="Alter" description="Wie alt bist du?" step={6} current={0}>
            <MultiNumbers
                bind:times={data.mix.personalProfile.age}
                next={() => (step = 2)}
            />
        </Step>
    {:else if step === 2}
        <Step
            title="Biologisches Geschlecht"
            description="Welchem Geschlecht fühlst du dich angehörig?"
            step={6}
            current={1}
        >
            <div class="four-item-wrapper">
                <Item
                    title="Weiblich"
                    value="female"
                    current={data.mix.personalProfile.gender}
                    icon="female"
                    delay={300}
                    on:click={() => {
                        (step += 1),
                            (data.mix.personalProfile.gender = "female");
                    }}
                />
                <Item
                    title="Männlich"
                    value="male"
                    current={data.mix.personalProfile.gender}
                    icon="male"
                    delay={400}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.gender = "male");
                    }}
                />
                <Item
                    title="Eher Weiblich"
                    value="moreFemale"
                    current={data.mix.personalProfile.gender}
                    icon="more-female"
                    delay={500}
                    on:click={() => {
                        (step += 1),
                            (data.mix.personalProfile.gender = "moreFemale");
                    }}
                />
                <Item
                    title="Eher Männlich"
                    value="moreMale"
                    current={data.mix.personalProfile.gender}
                    icon="more-male"
                    delay={600}
                    on:click={() => {
                        (step += 1),
                            (data.mix.personalProfile.gender = "moreMale");
                    }}
                />
            </div>
        </Step>
    {:else if step === 3}
        <Step
            title="Gewicht"
            description="Wie viel wiegst du morgens, ohne Kleidung?"
            step={6}
            current={2}
        >
            <Range
                bind:value={data.mix.personalProfile.weight}
                min={40}
                max={150}
                delay={400}
                suffix="kg"
            />
            <Button text="Weiter" on:click={() => (step += 1)} delay={500} />
        </Step>
    {:else if step === 4}
        <Step
            title="KörperfettAnteil"
            description="Wie hoch ist dein Körperfettanteil?"
            step={6}
            current={3}>
                {#if data.mix.personalProfile.gender === "female" || data.mix.personalProfile.gender === "moreFemale" }
                    <div class="three-item-wrapper">
                        <Item
                            title="Unter 20%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={300}
                            value="0-10"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "0-10");
                            }}
                        />
                        <Item
                            title="21% - 26%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={400}
                            value="10-15"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "10-15");
                            }}
                        />
                        <Item
                            title="27% - 32%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={500}
                            value="15-20"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "15-20");
                            }}
                        />
                        <Item
                            title="33% - 40%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={600}
                            value="20-30"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "20-30");
                            }}
                        />
                        <Item
                            title="Über 40%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={600}
                            value="30-40"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "30-40");
                            }}
                        />
                    </div>
                {:else}
                    <div class="three-item-wrapper">
                        <Item
                            title="Unter 12%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={300}
                            value="0-10"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "0-10");
                            }}
                        />
                        <Item
                            title="13% - 18%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={400}
                            value="10-15"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "10-15");
                            }}
                        />
                        <Item
                            title="19% - 25%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={500}
                            value="15-20"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "15-20");
                            }}
                        />
                        <Item
                            title="26% - 30%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={600}
                            value="20-30"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "20-30");
                            }}
                        />
                        <Item
                            title="Über 30%"
                            current={data.mix.personalProfile.bodyFatPercentage}
                            icon="profil"
                            delay={600}
                            value="30-40"
                            on:click={() => {
                                (step += 1),
                                    (data.mix.personalProfile.bodyFatPercentage =
                                        "30-40");
                            }}
                        />
                    </div>
                {/if}
        </Step>
    {:else if step === 5}
        <Step
            title="Körpergröße"
            description="Wie groß bist du morgens nach dem Aufstehen?"
            step={6}
            current={4}
        >
            <Range
                bind:value={data.mix.personalProfile.height}
                min={100}
                max={220}
                suffix="cm"
                delay={400}
            />
            <Button text="Weiter" on:click={() => (step += 1)} delay={500} />
        </Step>
    {:else if step === 6}
        <Step
            title="Ziele"
            description="Welches Ziel trifft am ehesten zu?"
            step={6}
            current={5}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Ziel 1"
                    value="Ziel1"
                    current={data.mix.personalProfile.goal}
                    icon="target"
                    delay={300}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.goal = "Ziel1");
                    }}
                />
                <Item
                    title="Ziel 2"
                    value="Ziel2"
                    current={data.mix.personalProfile.goal}
                    icon="target"
                    delay={400}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.goal = "Ziel2");
                    }}
                />
                <Item
                    title="Ziel 3"
                    value="Ziel3"
                    current={data.mix.personalProfile.goal}
                    icon="target"
                    delay={500}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.goal = "Ziel3");
                    }}
                />
                <Item
                    title="Ziel 4"
                    value="Ziel4"
                    current={data.mix.personalProfile.goal}
                    icon="target"
                    delay={600}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.goal = "Ziel4");
                    }}
                />
                <Item
                    title="Ziel 5"
                    value="Ziel5"
                    current={data.mix.personalProfile.goal}
                    icon="target"
                    delay={600}
                    on:click={() => {
                        (step += 1), (data.mix.personalProfile.goal = "Ziel5");
                    }}
                />
            </div>
        </Step>
    {:else if step === 7}
        <Step title="Kapitel 2" description="" progress={false}>
            <Kapitel
                title="Über Dich"
                icon="about"
                isChecked={true}
                delay={200}
            />
            <Kapitel
                title="Ernährung"
                icon="food"
                isChecked={false}
                delay={300}
            />
            <Kapitel
                title="Lifestyle"
                icon="lifestyle"
                isChecked={false}
                delay={400}
            />
            {#if data.mix.personalProfile.gender === "female"}
                <Kapitel
                    title="Lebensphase"
                    icon="pregnant"
                    isChecked={false}
                    delay={500}
                />
            {/if}
            <Button text="Weiter" on:click={() => (step += 1)} delay={600} />
        </Step>
    {:else if step === 8}
        <Step
            title="Ernährungstyp"
            description="Wie ernährst du dich im Alltag?"
            step={11}
            current={1}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Mischkost"
                    current={data.mix.dietaryProfile.dietType}
                    icon="mischkost"
                    value="mischkost"
                    delay={300}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "mischkost");
                    }}
                />
                <Item
                    title="Vegetarisch"
                    current={data.mix.dietaryProfile.dietType}
                    icon="vegetarisch"
                    value="vegetarisch"
                    delay={400}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "vegetarisch");
                    }}
                />
                <Item
                    title="Vegan"
                    current={data.mix.dietaryProfile.dietType}
                    icon="vegan"
                    value="vegan"
                    delay={500}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "vegan");
                    }}
                />
                <Item
                    title="Canivor"
                    current={data.mix.dietaryProfile.dietType}
                    icon="canivor"
                    value="canivor"
                    delay={600}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "canivor");
                    }}
                />
                <Item
                    title="Low Carb"
                    current={data.mix.dietaryProfile.dietType}
                    icon="low-carb"
                    value="low-carb"
                    delay={700}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "low-carb");
                    }}
                />
                <Item
                    title="Pesketarisch"
                    current={data.mix.dietaryProfile.dietType}
                    icon="pesketarisch"
                    value="pesketarisch"
                    delay={800}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "pesketarisch");
                    }}
                />
                <Item
                    title="Paleo"
                    current={data.mix.dietaryProfile.dietType}
                    icon="paleo"
                    value="paleo"
                    delay={900}
                    on:click={() => {
                        (step += 1),
                            (data.mix.dietaryProfile.dietType = "paleo");
                    }}
                />
            </div>
        </Step>
    {:else if step === 9}
        <Step
            title="Fleisch"
            description="Wie oft isst du Fleisch in der Woche?"
            step={11}
            current={2}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.dietaryProfile.meatPerWeek}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 10}
        <Step
            title="Fisch"
            description="Wie oft isst du Fisch in der Woche?"
            step={11}
            current={3}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.dietaryProfile.fishPerWeek}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 11}
        <Step
            title="Eier"
            description="Wie viele Eier isst du in der Woche?"
            step={11}
            current={4}
        >
            <MultiNumbers
                length={15}
                start={0}
                bind:times={data.mix.dietaryProfile.eggsPerWeek}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 12}
        <Step
            title="Milchprodukte"
            description="Wie oft isst du Milchprodukte in der Woche?"
            step={11}
            current={5}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.dietaryProfile.milkPerWeek}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 13}
        <Step
            title="Gemüse"
            description="Wie viel Portionen Gemüse isst Du pro Woche? Eine Portion entspricht ca. 120g"
            step={11}
            current={6}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.dietaryProfile.vegetableServingsPerDay}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 14}
        <Step
            title="Obst"
            description="Wie viel Portionen Obst isst Du pro Woche? Eine Portion entspricht ca. 120g"
            step={11}
            current={7}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.dietaryProfile.fruitServingsPerDay}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 15}
        <Step
            title="Lebensmittelqualität"
            description="Wie oft isst du stark verarbeitete Lebensmittel?"
            step={11}
            current={8}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Nie"
                    current={data.mix.dietaryProfile.foodQualität}
                    icon="star"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Manchmal"
                    current={data.mix.dietaryProfile.foodQualität}
                    icon="half-star"
                    delay={400}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Meistens"
                    current={data.mix.dietaryProfile.foodQualität}
                    icon="empty-star"
                    delay={500}
                    on:click={() => (step += 1)}
                />
            </div>
        </Step>
    {:else if step === 16}
        <Step
            title="Wasser"
            description="Wie viel Wasser trinkst du am Tag? Ein Glas entspricht ca 250ml."
            step={11}
            current={9}
        >
            <MultiNumbers
                length={20}
                start={1}
                bind:times={data.mix.dietaryProfile.cupsOfWaterPerDay}
                next={() => (step += 1)}
                delay={20}
            />
        </Step>
    {:else if step === 17}
        <Step
            title="Kaffee"
            description="Wie viel Tassen Kaffee trinkst Du pro Tag?"
            step={11}
            current={10}
        >
            <MultiNumbers
                length={8}
                start={0}
                bind:times={data.mix.personalProfile.age}
                next={() => (step += 1)}
                delay={50}
            />
        </Step>
    {:else if step === 18}
        <Step
            title="Nahrungsergänzung"
            description="Nutzt du eine der folgenden Nahrungsergänzungspräperate?"
            step={11}
            current={11}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Cause SWEET"
                    icon="sweet"
                    delay={300}
                    on:click={() => data.mix.dietaryProfile.nutrion = "sweet"}
                />
                <Item
                    title="Cause SLEEP"
                    icon="sleep-cause"
                    delay={400}
                    on:click={() => data.mix.dietaryProfile.nutrion = "sleep"}
                />
                <Item
                    title="Beide"
                    icon="both"
                    delay={500}
                    on:click={() => data.mix.dietaryProfile.nutrion = "both"}
                />
            </div>
            <div class="input-item" in:fly|global={{ y: 20, delay: 600 }}>
                <p style="color: var(--accent)">Du nutzt andere Produkte?</p>
                <input
                    type="text"
                    name=""
                    placeholder="Produkt eintragen"
                    style="text-align: center"
                />
            </div>
            <Button text="Weiter" on:click={() => (step += 1)} delay={700} style="margin-top: 20px" />
        </Step>
    {:else if step === 19}
        <Step title="Kapitel 3" progress={false}>
            <Kapitel
                title="Über Dich"
                icon="about"
                isChecked={true}
                delay={200}
            />
            <Kapitel
                title="Ernährung"
                icon="food"
                isChecked={true}
                delay={300}
            />
            <Kapitel
                title="Lifestyle"
                icon="lifestyle"
                isChecked={false}
                delay={400}
            />
            {#if data.mix.personalProfile.gender === "female"}
                <Kapitel
                    title="Lebensphase"
                    icon="pregnant"
                    isChecked={false}
                    delay={500}
                />
            {/if}
            <Button text="Weiter" on:click={() => (step += 1)} delay={600} />
        </Step>
    {:else if step === 20}
        <Step
            title="Schlaf"
            description="Wie lange schläfst du am Tag?"
            step={6}
            current={0}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Weniger als 5 Stunden"
                    current={data.mix.lifestyleProfile.sleepPerDay}
                    icon="sleep"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="5 - 6 Stunden"
                    current={data.mix.lifestyleProfile.sleepPerDay}
                    icon="sleep"
                    delay={400}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="7 - 8 Stunden"
                    current={data.mix.lifestyleProfile.sleepPerDay}
                    icon="sleep"
                    delay={500}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="9 - 10 Stunden"
                    current={data.mix.lifestyleProfile.sleepPerDay}
                    icon="sleep"
                    delay={600}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Mehr als 10 Stunden"
                    current={data.mix.lifestyleProfile.sleepPerDay}
                    icon="sleep"
                    delay={700}
                    on:click={() => (step += 1)}
                />
            </div>
        </Step>
    {:else if step === 21}
        <Step
            title="SchlafQualität"
            description="Wie würdest du deine Schlafqualität auf einer Skala von 1 bis 10 bewerten?"
            step={6}
            current={1}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Sehr gut"
                    current={data.mix.lifestyleProfile.sleepQuality}
                    icon="sleep-quality"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Gut"
                    current={data.mix.lifestyleProfile.sleepQuality}
                    icon="sleep-quality"
                    delay={400}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Zufriedenstellend"
                    current={data.mix.lifestyleProfile.sleepQuality}
                    icon="sleep-quality"
                    delay={500}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Verbesserungswürdig"
                    current={data.mix.lifestyleProfile.sleepQuality}
                    icon="sleep-quality"
                    delay={600}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Schlecht"
                    icon="sleep-quality"
                    current={data.mix.lifestyleProfile.sleepQuality}
                    delay={700}
                    on:click={() => (step += 1)}
                />
            </div>
        </Step>
    {:else if step === 22}
        <Step
            title="Stress"
            description="Wie würdest du dein Stresslevel im Alltag bewerten?"
            step={6}
            current={2}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Viel Stress"
                    current={data.mix.lifestyleProfile.stressLevel}
                    icon="stress"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Mittlerer Stress"
                    current={data.mix.lifestyleProfile.stressLevel}
                    icon="stress"
                    delay={400}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Normaler Stress"
                    current={data.mix.lifestyleProfile.stressLevel}
                    icon="stress"
                    delay={500}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Wenig Stress"
                    current={data.mix.lifestyleProfile.stressLevel}
                    icon="stress"
                    delay={600}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Kein Stress"
                    current={data.mix.lifestyleProfile.stressLevel}
                    icon="stress"
                    delay={700}
                    on:click={() => (step += 1)}
                />
            </div>
        </Step>
    {:else if step === 23}
        <Step title="Rauchen" description="Rauchst du?" step={6} current={3}>
            <div class="three-item-wrapper">
                <Item
                    title="Ja"
                    current={data.mix.lifestyleProfile.cigarettes}
                    icon="smoke"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Nein"
                    current={data.mix.lifestyleProfile.cigarettes}
                    icon="smoke"
                    delay={400}
                    on:click={() => (step += 2)}
                />
            </div>
        </Step>
    {:else if step === 24}
        <Step
            title="Rauchen"
            description="Wie viele Zigaretten rauchst du am Tag?"
            step={6}
            current={4}
        >
            <MultiNumbers
                length={36}
                start={1}
                bind:times={data.mix.lifestyleProfile.cigarettesPerDay}
                next={() => (step += 1)}
                delay={20}
            />
        </Step>
    {:else if step === 25}
        <Step
            title="Sport"
            description="Wie viel Sport machst du in der Woche?"
            step={6}
            current={5}>

            <Range
                bind:value={data.mix.lifestyleProfile.hoursOfExercisePerWeek}
                min={0}
                max={420}
                delay={400}
                suffix=" min"
            />

            <Button
                text="Weiter"
                on:click={() => step += 1}
                delay={500}
            />
        </Step>
    {:else if step === 26}
        <Step
            title="Sport"
            description="Wie viel Prozent deines gesamten Sports ist Kraftsport und wie viel Prozent sind Ausdauersport?"
            step={6}
            current={6}
        >
            <p
                class="sport-title"
                in:fly|global={{ y: 20, duration: 400, delay: 300 }}
            >
                Ausdauer Training: {data.mix.lifestyleProfile
                    .hoursOfCardioPerWeek}%
            </p>
            <Range
                bind:value={data.mix.lifestyleProfile.hoursOfCardioPerWeek}
                min={0}
                max={100}
                on:input={() =>
                    updateCardio(
                        data.mix.lifestyleProfile.hoursOfCardioPerWeek,
                    )}
                delay={400}
                suffix="%"
            />

            <p
                class="sport-title"
                in:fly|global={{ y: 20, duration: 400, delay: 500 }}
            >
                Kraft Training: {data.mix.lifestyleProfile
                    .hoursOfStrengthTrainingPerWeek}%
            </p>
            <Range
                bind:value={data.mix.lifestyleProfile
                    .hoursOfStrengthTrainingPerWeek}
                min={0}
                max={100}
                on:input={() =>
                    updateStrengthTraining(
                        data.mix.lifestyleProfile
                            .hoursOfStrengthTrainingPerWeek,
                    )}
                delay={600}
                suffix="%"
            />

            <Button
                text="Weiter"
                on:click={() =>
                    data.mix.personalProfile.gender === "female"
                        ? (step += 1)
                        : (step = 30)}
                delay={500}
            />
        </Step>
    {:else if step === 27}
        <Step title="Kapitel 4" progress={false}>
            <Kapitel
                title="Über Dich"
                icon="about"
                isChecked={true}
                delay={200}
            />
            <Kapitel
                title="Ernährung"
                icon="food"
                isChecked={true}
                delay={300}
            />
            <Kapitel
                title="Lifestyle"
                icon="lifestyle"
                isChecked={true}
                delay={400}
            />
            {#if data.mix.personalProfile.gender === "female"}
                <Kapitel
                    title="Lebensphase"
                    icon="pregnant"
                    isChecked={false}
                    delay={500}
                />
            {/if}
            <Button text="Weiter" on:click={() => step += 1} delay={600} />
        </Step>
    {:else if step === 28}
        <Step
            title="Schwangerschaft"
            description="Bist du Schwanger?"
            step={7}
            current={0}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Ja"
                    icon="pregnant"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="In naher Zukunft"
                    icon="pregnant"
                    delay={400}
                    on:click={() => (step += 2)}
                />
                <Item
                    title="Nein"
                    icon="pregnant"
                    delay={500}
                    on:click={() => (step += 2)}
                />
            </div>
        </Step>
    {:else if step === 29}
        <Step
            title="Stillen"
            description="Stillst du grade ein Kind?"
            step={7}
            current={1}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Ja"
                    icon="yes"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Nein"
                    icon="no"
                    delay={400}
                    on:click={() => (step += 1)}
                />
            </div>
        </Step>
    {:else if step === 30}
        <Step
            title="Verhütung"
            description="Nimmst du hormonelle Verhütungsmittel?"
            step={7}
            current={1}
        >
            <div class="three-item-wrapper">
                <Item
                    title="Ja"
                    icon="yes"
                    delay={300}
                    on:click={() => (step += 1)}
                />
                <Item
                    title="Nein"
                    icon="no"
                    delay={400}
                    on:click={() => (step += 2)}
                />
            </div>
        </Step>
    {:else if step === 31}
        <Step
            title="Deine Ergebnisse"
            description="Hier siehst du wo du einen Mangel an Nährstoffen hast, auf Basis deiner Angaben"
            step={7}
            current={2}>
                <Button
                    text="Weiter"
                    on:click={() => step += 1}
                    delay={300}
                />
        </Step>
    {:else if step === 32}
        <Step
            title="Bluttest"
            description="Wenn du einen Bluttest hochladen möchtest, lade diesen hier hoch. Unsere Experten analysieren deinen Test und passen deinenen Mix bei Bedarf an."
            step={7}
            current={3}
        >
            <Upload delay={300} />
            <Button text="Weiter" on:click={() => (step += 1)} delay={400} />
        </Step>
    {:else if step === 33}
        <Step
            title="Produkt kaufen"
            description="Wähle eine der folgenden Abos aus um deinen Nutrition Mix zu bestellen."
            step={7}
            current={4}>
                <Month />
                <Button
                    text="Weiter"
                    on:click={() => step += 1}
                    delay={300}
                />
        </Step>
    {:else if step === 34}
        <Step
            title="Account erstellen"
            description="Erstelle einen Account um das Produkt zu kaufen. Nur mit einem Account kannst du dein Abo verwalten"
            step={7}
            current={5}
        >
            <form class="form" action="?/signup">
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 200 }}
                    bind:value={firstname}
                    required
                    type="text"
                    name="firstname"
                    placeholder="Vorname"
                />
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 300 }}
                    bind:value={lastname}
                    required
                    type="text"
                    name="lastname"
                    placeholder="Lastname"
                />
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 400 }}
                    bind:value={mail}
                    required
                    type="email"
                    name="mail"
                    placeholder="Email"
                />
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 500 }}
                    bind:value={confirmMail}
                    required
                    type="email"
                    name="mailConfirmed"
                    placeholder="Email wiederholen"
                />
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 600 }}
                    bind:value={password}
                    required
                    type="password"
                    name="password"
                    placeholder="Passwort"
                />
                <input
                    in:fly|global={{ y: 20, duration: 400, delay: 700 }}
                    bind:value={passwordConfirm}
                    required
                    type="password"
                    name="passwordConfirmed"
                    placeholder="Passwort wiederholen"
                />
                <button
                    type="submit"
                    on:click={signupStep}
                    style="background-color: var(--accent); color: var(--white); width: 100%"
                    in:fly|gloabl={{ y: 20, duration: 400, delay: 800 }}
                    >Account erstellen</button
                >
            </form>
        </Step>
    {:else if step === 35}
        <Step
            title="Bezahl Methode"
            description="Wähle eine Zahlmethode"
            step={7}
            current={6}
        >
            <Kapitel
                on:click={() => (step += 1)}
                title="Zahle mit Paypal"
                icon="paypal"
                arrow={true}
                delay={200}
                style="width: 360px"
            />
            <Kapitel
                on:click={() => (step += 1)}
                title="Zahle mit Kreditkarte"
                icon="creditcard"
                arrow={true}
                delay={300}
                style="width: 360px"
            />
            <Kapitel
                on:click={() => (step += 1)}
                title="Zahle mit Apple Pay"
                icon="applepay"
                arrow={true}
                delay={400}
                style="width: 360px"
            />
            <Kapitel
                on:click={() => (step += 1)}
                title="Zahle mit Google Pay"
                icon="googlepay"
                arrow={true}
                delay={500}
                style="width: 360px"
            />
            <Kapitel
                on:click={() => (step += 1)}
                title="Zahle mit Klarna"
                icon="klarna"
                arrow={true}
                delay={600}
                style="width: 360px"
            />
        </Step>
    {:else if step === 36}
        <Step
            title="Du bist fertig"
            description="Vielen Dank für deine Bestellung! Du bekommst deine Bestellbestätigung per Mail zugesendet, deine Rechnung kannst du im Profil sehen. Wir benachrichten dich sobald dein Mix bereit ist und an dich versendet wird!"
            step={7}
            current={7}
        >
            <Button
                text="Zum Dashboard"
                on:click={() => goto("/")}
                delay={400}
            />
        </Step>
    {/if}
</div>

{#if step > 0 && step < 7}
    <Indikator
        title="Über Dich"
        icon="about"
        on:click={() => (showMenu = true)}
    />
{:else if step > 7 && step < 19}
    <Indikator
        title="Ernährung"
        icon="food"
        on:click={() => (showMenu = true)}
    />
{:else if step > 19 && step < 27}
    <Indikator
        title="Lifestyle"
        icon="lifestyle"
        on:click={() => (showMenu = true)}
    />
{:else if step > 27 && step < 31}
    <Indikator
        title="Lebensphase"
        icon="pregnant"
        on:click={() => (showMenu = true)}
    />
{/if}

{#if showMenu}
    <Modal title="Übersicht" on:click={() => (showMenu = false)} transparent>
        <Kapitel
            title="Über Dich"
            icon="about"
            arrow={step > 0 ? true : false}
            isChecked={step > 0 ? false : true}
            on:click={() => {
                (step = 1), (showMenu = false);
            }}
        />
        <Kapitel
            title="Ernährung"
            icon="food"
            arrow={step > 7 ? true : false}
            isChecked={step > 7 ? false : true}
            on:click={() => {
                (step = 7), (showMenu = false);
            }}
        />
        <Kapitel
            title="Lifestyle"
            icon="lifestyle"
            arrow={step > 20 ? true : false}
            isChecked={step > 20 ? false : true}
            on:click={() => {
                (step = 19), (showMenu = false);
            }}
        />
        {#if data.mix.personalProfile.gender === "female"}
            <Kapitel
                title="Lebensphase"
                icon="pregnant"
                arrow={step > 27 ? true : false}
                isChecked={step > 27 ? false : true}
                on:click={() => {
                    (step = 27), (showMenu = false);
                }}
            />
        {/if}
    </Modal>
{/if}

<input type="number" bind:value={step} class="demo">

<style>
    .wrapper {
        height: calc(100vh - 100px);
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 12px;
    }

    .four-item-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        max-width: 540px;
    }

    .three-item-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        max-width: 800px;
    }

    .sport-title {
        font-size: 14px;
        width: 100%;
        max-width: 400px;
        text-align: left;
        margin: 0 auto;
    }

    .demo {
        position: absolute;
        inset: auto 10px 12px auto;
        width: 60px;
    }

    .input-item {
        padding: 20px;
        border: 1px solid var(--accent);
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 12px;
        width: 100%;
        cursor: pointer;
        transition: background-color 400ms ease;
        margin-top: 20px;
    }

    .form {
        margin: 0 auto;
    }

    input {
        text-align: center;
    }
</style>
