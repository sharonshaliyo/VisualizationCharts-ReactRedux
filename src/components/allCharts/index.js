import Highcharts from 'highcharts'

export const renderChartOnElement = (element, options) => {
    const { baseOptions, tooltipOptions, legendOptions } = options
    const composedOptions = {
        ...baseOptions,
        chart: {
            ...baseOptions.chart,
            renderTo: element
        },
    }
    if (tooltipOptions) {
        composedOptions.tooltip = tooltipOptions
    }
    if (legendOptions) {
        composedOptions.legend = legendOptions
    }
    Highcharts.chart(composedOptions)
}
