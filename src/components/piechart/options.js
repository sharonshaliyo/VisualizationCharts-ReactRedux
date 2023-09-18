const options = {

    chart: {
        styledMode: true
    },

    title: {
        text: 'Pie point CSS'
    },
    series: [{
        type: 'pie',
        allowPointSelect: true,
        keys: ['name', 'y', 'selected', 'sliced'],
        data: [
            // ['BASIC'	2456, false]
            // ['COBOL', 616, false],
            ['Ruby', 3217, false],
            // ['Rust', 518, false],
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
    credits: false
}

export default options;
