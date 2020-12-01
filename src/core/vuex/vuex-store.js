import Vue from 'vue';
import Vuex from 'vuex';
// import { basicComp, chartsComp } from '../js/comp-config.js';

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
        currentProjectObj: null,
        currentPageObj: null,
        editState: false

    },
    mutations: {
        setCurrProObj(state, data) {
            state.currentProjectObj = data;
        },
        setCurrPageObj(state, data) {
            state.currentPageObj = data;
        },
        setEditState(state, bol) {
            state.editState = bol;
        }
    },
    getters: {
        // currentProject: (state) => () => {
        //     return state.appProject.find(pro => pro.project_id === state.currProId);
        // },
    }
})