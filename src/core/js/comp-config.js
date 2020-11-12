const compList = [
    {
        comp_name: '线段',
        comp_type: 'line',
        icon: 'iconline',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '文本',
        comp_type: 'text',
        icon: 'iconwenben',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '单行输入',
        comp_type: 'signal-input',
        icon: 'icondanhangshurukuang',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '多行输入',
        comp_type: 'multi-input',
        icon: 'iconicon_duohangshurukuang',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '按钮',
        comp_type: 'button',
        icon: 'iconanniu',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '图片',
        comp_type: 'img',
        icon: 'icontupian',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '视频',
        comp_type: 'video',
        icon: 'iconshipin',
        type: 'basic',
        data_source: [

        ]
    },
    {
        comp_name: '饼图',
        comp_type: 'pie',
        icon: 'iconbingtu',
        type: 'charts',
        data_source: [

        ]
    },
    {
        comp_name: '雷达图',
        comp_type: 'radar',
        icon: 'iconleidatu',
        type: 'charts',
        data_source: [

        ]
    },
    {
        comp_name: '折线',
        comp_type: 'poly-line',
        icon: 'iconicon-test',
        type: 'charts',
        data_source: [

        ]
    },
    {
        comp_name: '仪表盘',
        comp_type: 'dashboard',
        icon: 'iconyibiaopan',
        type: 'charts',
        data_source: [

        ]
    }
];

const basicComp = compList.filter(comp => comp['type'] === 'basic'),
    chartsComp = compList.filter(comp => comp['type'] === 'charts');

module.exports = {
    compList,
    basicComp,
    chartsComp
}