<template>
  <div class="editor-page">
    <scale-component scaleType="scale-x"></scale-component>
    <scale-component scaleType="scale-y"></scale-component>
    <div class="editor" @click="editorClickEv">
      <div class="prompt" v-if="!currentPageData">选择页面以开始</div>
      <drag-comp-scale-component
        :currentComp="currentSelectedComp"
      ></drag-comp-scale-component>
      <div
        class="design-area"
        ref="compListWrap"
        :class="{ 'grid-bg': gridBgShow }"
      >
        <div class="comp-list-wrap" v-if="currentPageData">
          <template v-for="(comp, idx) in currentPageData.comp_list">
            <component
              :is="comp.component"
              :currentComp="comp"
              :key="comp.comp_name + idx"
              @dragCompEv="dragCompEv(comp, $event)"
              @selectCompEmit="emitCompClickEv($event)"
            ></component>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleComponent from "../scale/scale.vue";
import DragCompScaleComponent from "../drag-comp-scale/drag-comp-scale.vue";
import { editorComps } from "../../../../core/js/comp-config.js";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      pageSelected: false,
      marginL: 220,
      marginT: 65,
      changeX: 0,
      changeY: 0,
      bodyClientWidth: 0,
      bodyClientHeight: 0,
      designOffsetW: 0,
      designOffsetH: 0,
    };
  },
  props: ["gridBgShow", "currentPageData", "currentSelectedComp"],
  components: Object.assign(editorComps, {
    ScaleComponent,
    DragCompScaleComponent,
  }),
  computed: {
    appProject() {
      return JSON.stringify(this.$store.state.appProject);
    },
  },
  mounted() {
    this.bodyClientWidth = document.body.clientWidth;
    this.bodyClientHeight = document.body.clientHeight;
    this.designOffsetW = this.$refs.compListWrap.offsetWidth;
    this.designOffsetH = this.$refs.compListWrap.offsetHeight;
  },
  destroyed() {
  },
  methods: {
    //组件拖拽位置变化
    dragCompEv(compData, _event) {
      const type = _event.type,
        clientX = _event.clientX - this.marginL,
        clientY = _event.clientY - this.marginT;
      if (type === "dragstart") {
        this.changeX = clientX - compData["style"]["left"];
        this.changeY = clientY - compData["style"]["top"];
      }
      if (type === "drag" && _event.clientX === 0 && _event.clientY === 0)
        return;
      compData["style"]["left"] =
        clientX - this.changeX < 0
          ? 0
          : clientX - this.changeX >
            this.designOffsetW - compData["style"]["width"]
          ? this.designOffsetW - compData["style"]["width"]
          : clientX - this.changeX;
      compData["style"]["top"] =
        clientY - this.changeY < 0
          ? 0
          : clientY - this.changeY >
            this.designOffsetH - compData["style"]["height"]
          ? this.designOffsetH - compData["style"]["height"]
          : clientY - this.changeY;
    },
    //点击组件事件向上层传递
    emitCompClickEv(data) {
      this.$emit("compClickEv", data);
    },
    //点击编辑器，取消选中组件
    editorClickEv() {
      this.$emit("compCancelClick");
    }
  },
};
</script>

<style lang="scss">
.editor-page {
  position: relative;
  height: 800px;
  .editor {
    .prompt {
      position: absolute;
      top: 130px;
      left: 45%;
      text-align: center;
      font-size: 14px;
      border: 1px solid red;
      padding: 5px 30px;
      background-color: white;
      z-index: 100;
    }
    .design-area {
      width: calc(100% - 40px);
      height: 780px;
      overflow: auto;
      position: absolute;
      top: 20px;
      left: 40px;
      &.grid-bg {
        background-image: linear-gradient(
            rgba(200, 205, 208, 0.3) 1px,
            transparent 0
          ),
          linear-gradient(90deg, rgba(200, 205, 208, 0.3), 1px, transparent 0),
          linear-gradient(#c8cdd0 1px, transparent 0),
          linear-gradient(90deg, #c8cdd0 1px, transparent 0);
        background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
      }
      .comp-list-wrap {
        overflow: hidden;
        width: 100%;
        height: 100%;
        .comp-item {
          border-width: 1px;
          border-style: solid;
          position: absolute;
          box-sizing: border-box;
          .echarts {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>