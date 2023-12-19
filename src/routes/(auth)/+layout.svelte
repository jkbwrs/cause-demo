<script lang="ts">
    import { onMount } from 'svelte'

    const images = [
        '../images/i1.webp',
        '../images/i2.webp',
        '../images/i3.webp',
        '../images/i4.webp',
        '../images/i5.webp',
        '../images/i6.webp'
    ];

    let currentImage: string;
    let animationKey = 0;
    let showImage = true;

    onMount(() => {
        currentImage = images[Math.floor(Math.random() * images.length)];
        startSlideshow();
    });

    function startSlideshow() {
        setInterval(() => {
            let currentIndex = images.indexOf(currentImage);
            currentImage = images[(currentIndex + 1) % images.length];
            showImage = false;
            setTimeout(() => {
                animationKey++;
                showImage = true;
            }, 100);
        }, 9000);
    }
</script>

<div class="auth">
    <div class="slider">
        {#if showImage}
            <img src={currentImage} alt="Slideshow Image" key={animationKey}>
        {/if}
    </div>
    <div class="content">
        <slot></slot>
    </div>
</div>


<style>

    .auth {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow-x: hidden;
    }

    .content {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .slider {
        position: relative;
        overflow: hidden;
        height: 100%;
        width: 50%;
        background-color: var(--lightgrey);
    }

    .slider img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        animation: kenBurns 9s ease-in-out 1, fade 9s ease-in-out infinite;
    }

    :global(.auth input) {
        text-align: center;
    }

    @keyframes kenBurns {
        from { transform: scale(1.2); }
        to { transform: scale(1); }
    }

    @keyframes fade {
        0%, 100% { opacity: 0; }
        12.5%, 87.5% { opacity: 1; }
    }

    @media screen and (max-width: 840px) {
        .auth {
            flex-direction: column;
            justify-content: flex-start;
        }

        .slider {
            height: 50vh;
            width: 100%;
        }

        .content {
            justify-content: flex-start;
            padding: 60px 0;
        }
    }

</style>