import React, { useRef, useLayoutEffect } from 'react'

import defaultOptions from './options/defaultOptions'
import buildTooltipOptions from './options/tooltipOptions'
import buildLegendOptions from './options/legendOptions'
import { renderChartOnElement } from '../allCharts'

const Piechart = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        renderChartOnElement(containerRef.current, {
            defaultOptions,
            tooltipOptions: buildTooltipOptions(),
            legendOptions: buildLegendOptions()
        })
    })

    return <div ref={containerRef}></div>
}

export default Piechart
