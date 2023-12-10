// import { theme } from "highcharts"

const buildTooltipOptions = () => {
    return {
        backgroundColor: {
            linearGradient: [0, 0, 0, 60],
            stops: [
                [0, '#FFFFFF'],
                [1, '#E0E0E0']
            ],
            borderWidth: 1,
            borderColor: '#AAA'
        }
    }
}

const defaultTooltipOptions = buildTooltipOptions()

export const selectThemeTooltipOptions = themeName => {
    const optionSelector = {
        light: themeDetails => { },
        dark: themeDetails => { },
        default: () => {
            return defaultTooltipOptions
        }
    }
    return optionSelector[themeName]()
}

export default defaultTooltipOptions
