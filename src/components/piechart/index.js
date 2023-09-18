import Highcharts from 'highcharts'
import options from './options'
import buildTooltipOptions from './options/tooltipOptions'

const renderHighChart = () => {
    Highcharts.chart('container', {
        ...options,
        tooltip: buildTooltipOptions()
    })
}

export default renderHighChart
