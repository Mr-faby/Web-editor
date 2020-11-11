import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        appProject: [
            {
                project_name: 'project1',
                project_id: 1,
                project_desc: '运营数据报表系统',
                pageList: [
                    {
                        page_name: '首页',
                        page_id: 1001,
                        page_desc: '首页综合监控',
                        comp_list: []
                    },
                    {
                        page_name: '告警管理',
                        page_id: 1002,
                        page_desc: '告警管理',
                        comp_list: []
                    }
                ]
            }
        ],
        basicComp: [
            {
                comp_name: '线段',
                comp_type: 'line',
                icon: 'iconline',
                data_source: [

                ]
            },
            {
                comp_name: '文本',
                comp_type: 'text',
                icon: 'iconwenben',
                data_source: [

                ]
            },
            {
                comp_name: '单行输入',
                comp_type: 'signal-input',
                icon: 'icondanhangshurukuang',
                data_source: [

                ]
            },
            {
                comp_name: '多行输入',
                comp_type: 'multi-input',
                icon: 'iconicon_duohangshurukuang',
                data_source: [

                ]
            },
            {
                comp_name: '按钮',
                comp_type: 'button',
                icon: 'iconanniu',
                data_source: [

                ]
            },
            {
                comp_name: '图片',
                comp_type: 'img',
                icon: 'icontupian',
                data_source: [

                ]
            },
            {
                comp_name: '视频',
                comp_type: 'video',
                icon: 'iconshipin',
                data_source: [

                ]
            }
        ],
        chartsComp: [
            {
                comp_name: '饼图',
                comp_type: 'pie',
                icon: 'iconbingtu',
                data_source: [

                ]
            },
            {
                comp_name: '雷达图',
                comp_type: 'radar',
                icon: 'iconleidatu',
                data_source: [

                ]
            },
            {
                comp_name: '折线',
                comp_type: 'poly-line',
                icon: 'iconicon-test',
                data_source: [

                ]
            },
            {
                comp_name: '仪表盘',
                comp_type: 'dashboard',
                icon: 'iconyibiaopan',
                data_source: [

                ]
            }
        ]
    },
    mutations: {
        setPage(state, val) {
            state.appProject[0].pageList[0].page_name = val;
        }
    },
    getters: {

    }
})