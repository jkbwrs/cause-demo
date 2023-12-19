<script lang="ts">
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { fly } from 'svelte/transition';

    export let delay: number = 400;

    let chartContainer: HTMLDivElement;
    let ApexCharts;
    let chartInstance;
  
    export let data: { values: number[], labels: string[] };

    var options = {
        series: [
            {
                data: [
                    {
                        x: 'Vitamin A',
                        y: 13
                    },
                    {
                        x: 'Vitamin D3',
                        y: 20
                    },
                    {
                        x: 'Vitamin E',
                        y: 10
                    },
                    {
                        x: 'Vitamin B2',
                        y: 7
                    },
                    {
                        x: 'Vitamin B6',
                        y: 8
                    },
                    {
                        x: 'Vitamin B12',
                        y: 12
                    },
                    {
                        x: 'Vitamin C',
                        y: 22
                    },
                    {
                        x: 'Vitamin B9',
                        y: 11
                    }
                ]
            }
        ],
        chart: {
            height: '100%',
            width: '100%',
            type: 'treemap',
            toolbar: {
                show: false
            },
            animations: {
                enabled: false
            }
        },
        colors: [
            '#164773', '#0B2B40', '#1E5959', '#3B8C6E', '#89D99D',
            '#5A7D7C', '#306752', '#6FA8DC', '#B4A7D6', '#E06666',
            '#F6B26B', '#FFD966', '#93C47D', '#76A5AF', '#8E7CC3'
        ],
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '10px',
            },
            offsetY: -4
        },
        plotOptions: {
            treemap: {
                distributed: true
            }
        },
        states: {
            hover: {
                filter: {
                    type: 'darken',
                    value: 0.4
                }
            }
        },
        stroke: {
            show: false,
            width: 0,
            colors: ['var(--lightgrey)']
        },
        legend: {
            show: false
        },
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    chart: {
                        width: '100%',
                        height: '100%'
                    }
                }
            }
        ]
    };

    onMount(async () => {
        if (browser) {
            try {
                ApexCharts = (await import('apexcharts')).default;
                chartInstance = new ApexCharts(chartContainer, options);
                chartInstance.render();
            } catch (error) {
                console.error('Error loading ApexCharts:', error);
            }
        }
    });
</script>

<div class="chart-wrapper" in:fly|global={{y: 80, duration: 400, delay: delay}}>
  <div class="chart" bind:this={chartContainer} />
</div>

<style>
  .chart-wrapper {
      width: 1220px;
      max-width: 90vw;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-radius: 20px;
      margin-bottom: 20px;
  }

  .chart {
      width: 100%;
      height: 100%;
      transform: scale(1.08);
      margin-top: -20px;
  }
</style>
