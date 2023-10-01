import Highcharts from 'highcharts'

export const renderChartOnElement = (element, options) => {
    const { defaultOptions, tooltipOptions, legendOptions } = options
    Highcharts.chart({
        ...defaultOptions,
        chart: {
            ...defaultOptions.chart,
            renderTo: element
        },
        tooltip: tooltipOptions,
        legend: legendOptions
    })
}

