import Highcharts from 'highcharts'

export const renderChartOnElement = (element, options) => {
    const composedOptions = {
        ...options,
    }
    composedOptions.chart.renderTo = element
    Highcharts.chart(composedOptions)
}
