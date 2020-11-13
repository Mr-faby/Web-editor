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

export const compList = [
    {
        comp_id: 1,
        comp_name: '线段',
        comp_type: 'line',
        icon: 'iconline',
        type: 'basic',
        component: LineComponent,
        style: {

        },
        data_source: {

        }
    },
    {
        comp_id: 2,
        comp_name: '文本',
        comp_type: 'text',
        icon: 'iconwenben',
        type: 'basic',
        component: TextComponent,
        style: {

        },
        data_source: {

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

        },
        data_source: {

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

        },
        data_source: {

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

        },
        data_source: {

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
