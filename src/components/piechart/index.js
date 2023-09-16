import Highcharts from 'highcharts'
import options from './options'

const renderHighChart = () => {
    Highcharts.chart('container', options)
}

export default renderHighChart