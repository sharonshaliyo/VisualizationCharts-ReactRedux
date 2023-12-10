import defaultLegend, { buildLegendOptions, createFormatterTemplate, selectThemeLegendOptions } from '../options/legendOptions'

describe('Test Suite - piechart legend', () => {
    beforeAll(() => {})

    test('piechart defaultLegend labelFormatter gives proper HTML', () => {
        const legendDetails = { name: "IE" }
        const legendHtml = defaultLegend.labelFormatter.apply(legendDetails)
        expect(legendHtml).toBe('<span style="">IE</span>')
    })

    test('piechart defaultLegend labelFormatter apply style to HTML', () => {
        const legendDetails = { name: "IE" }
        buildLabelFormatter = createFormatterTemplate({
            'text-decoration': 'underline'
        })
        const customLegend = buildLegendOptions(buildLabelFormatter)
        const legendHtml = customLegend.labelFormatter.apply(legendDetails)

        expect(legendHtml).toContain('text-decoration: underline')
    })

    test('piechart selectThemeLegendOptions should return defaultLegend for "default"', () => {
        const legendOptions = selectThemeLegendOptions('default')
        expect(legendOptions).toBe(defaultLegend)
    })

    // test('piechart legend alignment')
})
