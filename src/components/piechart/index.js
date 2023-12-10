import React, { useRef, useLayoutEffect } from 'react'

import baseOptions from './options/baseOptions'
import { selectThemeTooltipOptions } from './options/tooltipOptions'
import { selectThemeLegendOptions } from './options/legendOptions'
import { renderChartOnElement } from '../allCharts'

const Piechart = () => {
    const containerRef = useRef(null)
    useLayoutEffect(() => {
        renderChartOnElement(containerRef.current, {
            ...baseOptions,
            tooltip: selectThemeTooltipOptions('default'),
            legend: selectThemeLegendOptions('default')
        })
    })

    return <div ref={containerRef}></div>
}

export default Piechart
