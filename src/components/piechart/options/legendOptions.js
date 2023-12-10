export function createFormatterTemplate(styles) {
    const styleStr = Object.keys(styles)
                        .map(function(k) {
                            return `${k}: ${styles[k]}`
                        }).join(",");
    return function () {
        return `<span style="${styleStr}">${this.name}</span>`
    }
}

export const buildLegendOptions = formatter => {
    const l = {
        enabled: true,
        floating: false,
        itemMarginTop: 10,
        maxHeight: 80,
        width: 600,
        navigation: {
            activeColor: '#a9a9a9'
        },
        useHTML: true,
        // symbolPadding: 0,
        // symbolRadius: 0,
        // symbolWidth: 0,
        // symbolHeight: 0,
        labelFormatter() {
            return formatter.apply(this)
        }
    }
    return l
}

const buildLabelFormatter = createFormatterTemplate({
    // 'text-decoration': 'underline',
    // 'color': '#efefef'
})
const defaultLegendOptions = buildLegendOptions(buildLabelFormatter)

export const selectThemeLegendOptions = themeName => {
    const optionSelector = {
        light: themeDetails => {
            return {}
        },
        dark: themeDetails => {
            return {}
        },
        default: () => {
            return defaultLegendOptions
        }
    }
    return optionSelector[themeName]()
}

export default defaultLegendOptions
