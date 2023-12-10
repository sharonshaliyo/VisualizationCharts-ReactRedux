const options = {
    // chart: { // to be used with highcharts.css
    //     styledMode: true
    // },
    accessibility: {
        enabled: false
    },
    title: {
        text: 'Pie Chart',
        align: 'left'
    },
    subtitle: {
        text: 'Usage statistics',
        align: 'left'
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            // ['BASIC'	2456, false]
            // ['COBOL', 616, false],
            ['Ruby', 3217, false],
            ['Rust', 518, false],
            ['R', 12020, false],
            ['Objective-C', 813, false],
            // ['Nim', 260, false],
            ['C#', 21268, false],
            ['Python', 11352, false],
            ['JavaScript', 11450, true, true],
            ['Java', 17355, false],
            // ['Julia', 260, false],
            ['Go', 1276, false],
        ],
        showInLegend: true
    }],
    tooltip: {
        backgroundColor: '#ffffff'
    },
    credits: false
}

export default options;
