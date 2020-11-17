<template>
  <div class="editor-page">
    <scale-component scaleType="scale-x"></scale-component>
    <scale-component scaleType="scale-y"></scale-component>
    <div class="editor" @click="editorClickEv">
      <div class="prompt" v-if="!currentPage">选择页面以开始</div>
      <div class="comp-list-wrap" v-if="currentPage">
        <template v-for="(comp,idx) in currentPage.comp_list">
          <!-- <div
            class="comp-scale-box"
            :key="comp.comp_name + idx"
            :style="{
              'width':comp.style['width'] + 'px',
              'height':comp.style['height'] + 'px',
              'top':comp.style['top'] + 'px',
              'left':comp.style['left'] + 'px',
            }"
          >-->
          <component
            :is="comp.component"
            :currentComp="comp"
            :key="comp.comp_name + idx"
          ></component>
          <!-- </div> -->
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ScaleComponent from "../scale/scale.vue";
import { EmitEvent } from "../../../../core/js/emit.js";
import { compList, editorComps } from "../../../../core/js/comp-config.js";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      pageSelected: false,
      currentPage: null,
      marginL: 220,
      marginT: 65
    };
  },
  components: Object.assign(editorComps, {
    ScaleComponent
  }),
  computed: {
    appProject() {
      return JSON.stringify(this.$store.state.appProject);
    }
  },
  mounted() {
    //监听页面激活事件
    EmitEvent.$on("selectedPage", page => {
      this.currentPage = page;
      //初始化页面所有组件
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
  },
  destroyed() {
    EmitEvent.$off("selectedPage");
    EmitEvent.$off("dragComp");
  },
  methods: {
    editorClickEv(){
      EmitEvent.$emit('selectCompEmit');
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