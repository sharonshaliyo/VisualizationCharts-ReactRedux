import React, { useRef, useLayoutEffect } from 'react'

import baseOptions from './options/baseOptions'
import { renderChartOnElement } from '../allCharts'

const ColumnChart = () => {
  const containerRef = useRef(null)
  useLayoutEffect(() => {
    renderChartOnElement(containerRef.current, {
      ...baseOptions
    })
  })

  return <div ref={containerRef}></div>
}

export default ColumnChart
