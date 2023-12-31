import Highcharts from 'highcharts'

export const renderChartOnElement = (element, options) => {
    const composedOptions = {
        ...options,
        chart: {
            ...options.chart,
            renderTo: element
        }
    }
    Highcharts.chart(composedOptions)
}
