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
    let nextImage: string;
    let currentKey = 0;
    let nextKey = 1;
    let showCurrentImage = true;
    let showNextImage = false;

    onMount(() => {
        currentImage = images[Math.floor(Math.random() * images.length)];
        nextImage = getNextImage();
        startSlideshow();
    });

    function getNextImage() {
        let currentIndex = images.indexOf(currentImage);
        return images[(currentIndex + 1) % images.length];
    }

    function startSlideshow() {
        setInterval(() => {
            currentImage = nextImage;
            nextImage = getNextImage();
            showCurrentImage = false;
            setTimeout(() => {
                currentKey++;
                showCurrentImage = true;
                showNextImage = false;
            }, 100);
            showNextImage = true;
            nextKey++;
        }, 9000);
    }
</script>

<div class="auth">
    <div class="slider">
        {#if showCurrentImage}
            <img src={currentImage} alt="Slideshow Image" key={currentKey} class="current">
        {/if}
        {#if showNextImage}
            <img src={nextImage} alt="Slideshow Image" key={nextKey} class="next">
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

    .slider img.current {
        z-index: 2;
    }

    .slider img.next {
        z-index: 1;
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
            min-height: 35vh;
            max-height: 35vh;
            width: 100%;
        }

        .content {
            justify-content: flex-start;
            padding: 60px 0;
        }
    }

</style>