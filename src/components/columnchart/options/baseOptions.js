const options = {
    accessibility: {
        enabled: false
    },
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: 'Browser Market Share Worldwide',
        align: 'left'
    },
    subtitle: {
        text: 'Mar - Aug 2023. Source: <a style="text-decoration: underline" href="https://gs.statcounter.com/browser-market-share#monthly-202303-202308-bar" target="_blank">Browser market share</a>',
        align: 'left'
    },
    xAxis: [
        {
            categories: ['Chrome', 'Safari', 'Edge', 'Firefox', 'Opera', 'Samsung Internet', 'UC Browser', 'Adroid', 'Yandex Browser', 'Other']
        }
    ],
    yAxis: [
        {
            labels: {
                format: '{value}%'
            },
            title: {
                text: 'Market share'
            }
        },
    ],
    series: [
        {
            name: "Browsers",
            colorByPoint: true,
            type: 'column',
            showInLegend: true,
            data: [
                {
                    name: 'Chrome',
                    y: 63.62
                }, {
                    name: 'Safari',
                    y: 20.12
                }, {
                    name: 'Edge',
                    y: 5.05
                }, {
                    name: 'Firefox',
                    y: 2.84
                }, {
                    name: 'Opera',
                    y: 2.66
                }, {
                    name: 'Samsung Internet',
                    y: 2.49
                }, {
                    name: 'UC Browser',
                    y: 0.93
                }, {
                    name: 'Adroid',
                    y: 0.65
                }, {
                    name: 'Yandex Browser',
                    y: 0.25
                }, {
                    name: 'Other',
                    y: 1.39
                }
            ]
        }
    ]
}

export default options
