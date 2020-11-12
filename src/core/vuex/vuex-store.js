import Vue from 'vue';
import Vuex from 'vuex';
import { basicComp, chartsComp } from '../js/comp-config.js';

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
        basicComp,
        chartsComp
    },
    mutations: {
        setPage(state, val) {
            state.appProject[0].pageList[0].page_name = val;
        }
    },
    getters: {

    }
})