<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { fly } from 'svelte/transition';
  
    export let title: string = "Headline";
    export let data: { values: number[], labels: string[] };
    export let delay: number = 500
  
    let chart: HTMLDivElement;
    let ApexCharts;
  
    const options = {
        chart: {
            type: 'pie',
            width: '100%',
            height: '600px'
        },
        stroke: {
            width: 0 
        },
        series: data.values,
        labels: data.labels,
        dataLabels: {
            style: {
                fontSize: '14px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 'normal',
                cssClass: 'labels'
            }
        },
        colors: [
            '#164773', '#0B2B40', '#1E5959', '#3B8C6E', '#89D99D',
            '#5A7D7C', '#306752', '#6FA8DC', '#B4A7D6', '#E06666',
            '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#8E7CC3'
        ],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            floating: false,
            offsetY: 5,
            itemMargin: {
                horizontal: 5,
                vertical: 0
            },
        },
        responsive: [{
            breakpoint: 1300,
            options: {
                chart: {
                    width: '100%',
                    height: 'auto'
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };
  
    onMount(async () => {
        if (browser) {
            ApexCharts = (await import('apexcharts')).default;
            const chartElement = new ApexCharts(chart, options);
            await chartElement.render();

            setTimeout(() => {
                if (chartElement.paper && chartElement.paper.svg) {
                    chartElement.paper.svg.setAttribute('viewBox', '0 0 600 600');
                }
            }, 300);
        }
    });
  </script>
  
  <div class="chart-wrapper" in:fly|global={{y: 40, duration: 400, delay: delay}}>
    <div class="title">{title}</div>
    <div bind:this={chart} class="chart" />
  </div>
  
  
  <style>
    .chart-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 40px 6px 6px 6px;
        position: relative;
        background-color: var(--lightgrey);
        border-radius: 12px;
        width: 600px;
        max-width: calc(45vw - 10px);
        box-sizing: border-box;
    }
  
    .chart {
        width: 100%;
        height: 100%;
    }
  
    .title {
        position: absolute;
        inset: 10px auto auto 10px;
        z-index: 10;
        font-size: 12px;
        color: var(--accent);
    }

    :global(.apexcharts-legend) {
        max-width: 400px;
        margin: 0 auto;
    }

    @media screen and (max-width: 1100px) {
        .chart-wrapper {
            min-width: 90vw;
        }
    }

  </style>
  