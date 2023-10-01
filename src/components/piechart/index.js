import React, { useRef, useLayoutEffect } from 'react'

import options from './options'
import buildTooltipOptions from './options/tooltipOptions'
import buildLegendOptions from './options/legendOptions'
import { renderChartOnElement } from '../allCharts'

const Piechart = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        renderChartOnElement(containerRef.current, {
            defaultOptions: options,
            tooltipOptions: buildTooltipOptions(),
            legendOptions: buildLegendOptions()
        })
    })

    return <div ref={containerRef}></div>
}

export default Piechart
