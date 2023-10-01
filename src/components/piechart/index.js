import React, { useRef, useLayoutEffect } from 'react'
import Highcharts from 'highcharts'

import options from './options'
import buildTooltipOptions from './options/tooltipOptions'
import buildLegendOptions from './options/legendOptions'

const renderHighChartRef = (element) => {
    Highcharts.chart({
        ...options,
        chart: {
            ...options.chart,
            renderTo: element
        },
        tooltip: buildTooltipOptions(),
        legend: buildLegendOptions()
    })
}

const Piechart = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        renderHighChartRef(containerRef.current)
    })

    return <div ref={containerRef}></div>
}

export default Piechart
