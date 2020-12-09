import LineComponent from '../../app/work/dev/custom-comp/basic/line.vue';
import TextComponent from '../../app/work/dev/custom-comp/basic/text.vue';
import SignalInputComponent from '../../app/work/dev/custom-comp/basic/signal-input.vue';
import MultiInputComponent from '../../app/work/dev/custom-comp/basic/multi-input.vue';
import ButtonComponent from '../../app/work/dev/custom-comp/basic/button.vue';
import ImgComponent from '../../app/work/dev/custom-comp/basic/img.vue';
import VideoComponent from '../../app/work/dev/custom-comp/basic/video.vue';
import PieComponent from '../../app/work/dev/custom-comp/charts/pie.vue';
import RadarComponent from '../../app/work/dev/custom-comp/charts/radar.vue';
import PolyLineComponent from '../../app/work/dev/custom-comp/charts/poly-line.vue';
import DashboardComponent from '../../app/work/dev/custom-comp/charts/dashboard.vue';

import LineConfigComponent from '../../app/work/dev/custom-config/basic/line-config.vue';
import TextConfigComponent from '../../app/work/dev/custom-config/basic/text-config.vue';
import SignalInputConfigComponent from '../../app/work/dev/custom-config/basic/signal-input-config.vue';
import MultiInputConfigComponent from '../../app/work/dev/custom-config/basic/multi-input-config.vue';
import ButtonConfigComponent from '../../app/work/dev/custom-config/basic/button-config.vue';
import ImgConfigComponent from '../../app/work/dev/custom-config/basic/img-config.vue';
import VideoConfigComponent from '../../app/work/dev/custom-config/basic/video-config.vue';
import PieConfigComponent from '../../app/work/dev/custom-config/charts/pie-config.vue';
import RadarConfigComponent from '../../app/work/dev/custom-config/charts/radar-config.vue';
import PolyLineConfigComponent from '../../app/work/dev/custom-config/charts/poly-line-config.vue';
import DashboardConfigComponent from '../../app/work/dev/custom-config/charts/dashboard-config.vue';

export const compList = [
    // {
    //     comp_id: 1,
    //     comp_name: '线段',
    //     comp_type: 'line',
    //     icon: 'iconline',
    //     type: 'basic',
    //     component: LineComponent,
    //     style: {
    //         width: 200,
    //         height: 30,
    //         top: 0,
    //         left: 0,
    //         borderColor: '#ff0000',
    //         borderRadius: 0,
    //         opacity: 1,
    //         fontSize: 14,
    //         zIndex: 1,
    //         backgroundColor: '#fff',
    //         fontColor: '#000'
    //     },
    //     data_source: {

    //     }
    // },
    {
        comp_id: 2,
        comp_name: '文本',
        comp_type: 'text',
        icon: 'iconwenben',
        type: 'basic',
        component: TextComponent,
        style: {
            width: 120,
            height: 30,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {
            text: '右侧绑定文本'
        }
    },
    {
        comp_id: 3,
        comp_name: '单行输入',
        comp_type: 'signal-input',
        icon: 'icondanhangshurukuang',
        type: 'basic',
        component: SignalInputComponent,
        style: {
            width: 120,
            height: 30,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {
            textValue: ''
        }
    },
    {
        comp_id: 4,
        comp_name: '多行输入',
        comp_type: 'multi-input',
        icon: 'iconicon_duohangshurukuang',
        type: 'basic',
        component: MultiInputComponent,
        style: {
            width: 220,
            height: 60,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {
            textValue: ''
        }
    },
    {
        comp_id: 5,
        comp_name: '按钮',
        comp_type: 'button',
        icon: 'iconanniu',
        type: 'basic',
        component: ButtonComponent,
        style: {
            width: 80,
            height: 32,
            top: 0,
            left: 0,
            borderColor: '#fff',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#1890ff',
            fontColor: '#fff'
        },
        data_source: {
            btnName: '确定'
        }
    },
    {
        comp_id: 6,
        comp_name: '图片',
        comp_type: 'img',
        icon: 'icontupian',
        type: 'basic',
        component: ImgComponent,
        style: {
            width: 425,
            height: 317,
            top: 0,
            left: 0,
            borderColor: '#fff',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#1890ff',
            fontColor: '#000'
        },
        data_source: {

        }
    },
    {
        comp_id: 7,
        comp_name: '视频',
        comp_type: 'video',
        icon: 'iconshipin',
        type: 'basic',
        component: VideoComponent,
        style: {
            width: 320,
            height: 240,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {

        }
    },
    {
        comp_id: 8,
        comp_name: '饼图',
        comp_type: 'pie',
        icon: 'iconbingtu',
        type: 'charts',
        component: PieComponent,
        style: {
            width: 302,
            height: 302,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {

        }
    },
    {
        comp_id: 9,
        comp_name: '雷达图',
        comp_type: 'radar',
        icon: 'iconleidatu',
        type: 'charts',
        component: RadarComponent,
        style: {
            width: 302,
            height: 302,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {

        }
    },
    {
        comp_id: 10,
        comp_name: '折线',
        comp_type: 'poly-line',
        icon: 'iconicon-test',
        type: 'charts',
        component: PolyLineComponent,
        style: {
            width: 302,
            height: 302,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {

        }
    },
    {
        comp_id: 11,
        comp_name: '仪表盘',
        comp_type: 'dashboard',
        icon: 'iconyibiaopan',
        type: 'charts',
        component: DashboardComponent,
        style: {
            width: 302,
            height: 302,
            top: 0,
            left: 0,
            borderColor: '#ff0000',
            borderRadius: 0,
            opacity: 1,
            fontSize: 14,
            zIndex: 1,
            backgroundColor: '#fff',
            fontColor: '#000'
        },
        data_source: {

        }
    }
];

export const basicComp = compList.filter(comp => comp['type'] === 'basic');
export const chartsComp = compList.filter(comp => comp['type'] === 'charts');

export const editorComps = {
    LineComponent,
    TextComponent,
    SignalInputComponent,
    MultiInputComponent,
    ButtonComponent,
    ImgComponent,
    VideoComponent,
    PieComponent,
    RadarComponent,
    PolyLineComponent,
    DashboardComponent
};

export const editorConfigComps = {
    LineConfigComponent,
    TextConfigComponent,
    SignalInputConfigComponent,
    MultiInputConfigComponent,
    ButtonConfigComponent,
    ImgConfigComponent,
    VideoConfigComponent,
    PieConfigComponent,
    RadarConfigComponent,
    PolyLineConfigComponent,
    DashboardConfigComponent
};

export const findConfigComp = (type) => {
    let configComp = null;
    switch (type) {
        case 'line':
            configComp = LineConfigComponent;
            break;
        case 'text':
            configComp = TextConfigComponent;
            break;
        case 'signal-input':
            configComp = SignalInputConfigComponent;
            break;
        case 'multi-input':
            configComp = MultiInputConfigComponent;
            break;
        case 'button':
            configComp = ButtonConfigComponent;
            break;
        case 'img':
            configComp = ImgConfigComponent;
            break;
        case 'video':
            configComp = VideoConfigComponent;
            break;
        case 'pie':
            configComp = PieConfigComponent;
            break;
        case 'radar':
            configComp = RadarConfigComponent;
            break;
        case 'poly-line':
            configComp = PolyLineConfigComponent;
            break;
        case 'dashboard':
            configComp = DashboardConfigComponent;
            break;
    }
    return configComp;
}
