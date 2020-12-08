<template>
  <div class="editor-page">
    <scale-component scaleType="scale-x"></scale-component>
    <scale-component scaleType="scale-y"></scale-component>
    <div class="editor" @click="editorClickEv">
      <div class="prompt" v-if="!currentPage">选择页面以开始</div>
      <drag-comp-scale-component :currentComp="activeComp"></drag-comp-scale-component>
      <div class="design-area" ref="compListWrap" :class="{'grid-bg':gridBgShow}">
        <div class="comp-list-wrap" v-if="currentPage">
          <template v-for="(comp,idx) in currentPage.comp_list">
            <component
              :is="comp.component"
              :currentComp="comp"
              :key="comp.comp_name + idx"
              @dragCompEv="dragCompEv(comp,$event)"
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
import { EmitEvent } from "../../../../core/js/emit.js";
import { compList, editorComps } from "../../../../core/js/comp-config.js";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      pageSelected: false,
      currentPage: null,
      currentPageOrigin: null,
      activeComp: null,
      marginL: 220,
      marginT: 65,
      changeX: 0,
      changeY: 0,
      bodyClientWidth: 0,
      bodyClientHeight: 0,
      designOffsetW: 0,
      designOffsetH: 0
    };
  },
  props: ["gridBgShow"],
  components: Object.assign(editorComps, {
    ScaleComponent,
    DragCompScaleComponent
  }),
  computed: {
    appProject() {
      return JSON.stringify(this.$store.state.appProject);
    }
  },
  mounted() {
    this.bodyClientWidth = document.body.clientWidth;
    this.bodyClientHeight = document.body.clientHeight;
    this.designOffsetW = this.$refs.compListWrap.offsetWidth;
    this.designOffsetH = this.$refs.compListWrap.offsetHeight;

    //监听页面激活事件
    EmitEvent.$on("selectedPage", page => {
      if (page) {
        this.currentPageOrigin = page;
        const _clonePage = _.cloneDeep(page);
        this.currentPage = _clonePage;
      } else {
        this.currentPageOrigin = null;
        this.currentPage = null;
      }
      //初始化页面所有组件
    });

    //监听组件点击事件
    EmitEvent.$on("selectCompEmit", currentComp => {
      this.activeComp = currentComp;
    });

    //监听组件拖拽事件
    EmitEvent.$on("dragComp", data => {
      const _data = data["comp"],
        _event = data["event"];
      const draggedComp = compList.find(
        comp => comp["comp_type"] === _data["comp_type"]
      );
      const _cloneComp = _.cloneDeep(draggedComp);
      _cloneComp["style"]["left"] = _event.clientX - this.marginL;
      _cloneComp["style"]["top"] = _event.clientY - this.marginT;
      _cloneComp["uuid"] = "comp" + this.currentPage.comp_list.length;
      this.currentPage.comp_list.push(_cloneComp);
    });

    //监听保存配置事件
    EmitEvent.$on("saveConfigEmit", () => {
      if (this.currentPage) {
        this.currentPageOrigin["comp_list"] = this.currentPage["comp_list"];
        this.$toasted.success("更新成功", {
          duration: 1000,
          position: "top-right",
          fullWidth: true,
          fitToScreen: true
        });
      }
    });

    //监听删除组件事件
    EmitEvent.$on("delComp", () => {
      const compUuid = this.activeComp["uuid"];
      const findIndex = this.currentPage["comp_list"].findIndex(
        comp => comp["uuid"] === this.activeComp["uuid"]
      );
      this.currentPage["comp_list"].splice(findIndex, 1);
      this.editorClickEv();
    });
  },
  destroyed() {
    EmitEvent.$off("selectedPage");
    EmitEvent.$off("dragComp");
    EmitEvent.$off("saveConfigEmit");
    EmitEvent.$off("delComp");
  },
  methods: {
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
    editorClickEv() {
      EmitEvent.$emit("selectCompEmit");
    }
  }
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