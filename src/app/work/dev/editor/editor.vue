<template>
  <div class="editor-page">
    <scale-component scaleType="scale-x"></scale-component>
    <scale-component scaleType="scale-y"></scale-component>
    <div class="editor" @click="editorClickEv">
      <div class="prompt" v-if="!currentPage">选择页面以开始</div>
      <div class="comp-list-wrap" v-if="currentPage">
        <template v-for="(comp,idx) in currentPage.comp_list">
          <component
            :is="comp.component"
            :currentComp="comp"
            :key="comp.comp_name + idx"
            @dragCompEv="dragCompEv(comp,$event)"
          ></component>
        </template>
        <drag-comp-scale-component :currentComp="activeComp"></drag-comp-scale-component>
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
      changeY: 0
    };
  },
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
    //监听页面激活事件
    EmitEvent.$on("selectedPage", page => {
      this.currentPageOrigin = page;
      const _clonePage = _.cloneDeep(page);
      this.currentPage = _clonePage;
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
      this.currentPage.comp_list.push(_cloneComp);
    });

    //监听保存配置事件
    EmitEvent.$on("saveConfigEmit", () => {
      if (this.currentPage) {
        this.currentPageOrigin["comp_list"] = this.currentPage["comp_list"];
        this.$toasted.success("更新成功",{
          duration : 1000,
          position:'top-right',
          fullWidth:true,
          fitToScreen:true
        });
      }
    });
  },
  destroyed() {
    EmitEvent.$off("selectedPage");
    EmitEvent.$off("dragComp");
    EmitEvent.$off("saveConfigEmit");
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
        clientX - this.changeX < 0 ? 0 : clientX - this.changeX;
      compData["style"]["top"] =
        clientY - this.changeY < 0 ? 0 : clientY - this.changeY;
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
    width: calc(100% - 40px);
    height: 780px;
    position: absolute;
    top: 20px;
    left: 40px;
    background-image: linear-gradient(
        rgba(200, 205, 208, 0.3) 1px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(200, 205, 208, 0.3), 1px, transparent 0),
      linear-gradient(#c8cdd0 1px, transparent 0),
      linear-gradient(90deg, #c8cdd0 1px, transparent 0);
    background-size: 20px 20px, 20px 20px, 100px 100px, 100px 100px;
    .prompt {
      position: absolute;
      top: 100px;
      left: 45%;
      text-align: center;
      font-size: 14px;
      border: 1px solid red;
      padding: 5px 30px;
    }
    .comp-list-wrap {
      .comp-item {
        border-width: 1px;
        border-style: solid;
        position: absolute;
      }
    }
  }
}
</style>