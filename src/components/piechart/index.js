import Highcharts from 'highcharts'
import options from './options'
import buildTooltipOptions from './options/tooltipOptions'
import buildLegendOptions from './options/legendOptions'

const renderHighChart = () => {
    Highcharts.chart('container', {
        ...options,
        tooltip: buildTooltipOptions(),
        legend: buildLegendOptions()
    })
}

export default renderHighChart
