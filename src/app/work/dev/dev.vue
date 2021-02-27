<template>
  <div class="dev-page">
    <div class="designer-top-bar">
      <div class="set-bg">
        <span>背景：</span>
        <span
          class="iconfont iconwanggekai"
          title="网格开"
          @click="setEditorBg(true)"
        ></span>
        <span
          class="iconfont iconwanggeguan"
          title="网格关"
          @click="setEditorBg()"
        ></span>
      </div>
      <router-link
        :to="
          (currentPageOriginData &&
            '../run/' + currentPageOriginData['page_id']) ||
          ''
        "
      >
        <span
          class="running iconfont iconkaishi_yunhang"
          title="运行"
          :class="{ disabled: !currentPageLocalData }"
        ></span>
      </router-link>
      <span
        class="update"
        :class="{ disabled: !currentPageLocalData }"
        @click="updateConfig"
        >更新</span
      >
    </div>
    <div class="designer">
      <div class="component-area">
        <design-left-bar-component
          :pageList="pageList"
          :currentPageData="currentPageLocalData"
          @selectedPage="selectedPage($event)"
          @dragCompIcon="dragCompIcon($event)"
          @deletePage="deletePage($event)"
        ></design-left-bar-component>
      </div>
      <div class="design-area">
        <editor-component
          :gridBgShow="gridBgShowBol"
          :currentPageData="currentPageLocalData"
          :currentSelectedComp="currentSelectedComp"
          @compClickEv="compClickEv($event)"
          @compCancelClick="resetRightBarConfigInfo"
        ></editor-component>
      </div>
      <div class="config-area">
        <design-right-bar-component
          :currentSelectedComp="currentSelectedComp"
          @delComp="deleteComp"
        ></design-right-bar-component>
      </div>
    </div>
  </div>
</template>

<script>
import EditorComponent from "./editor/editor.vue";
import DesignLeftBarComponent from "./design-left-bar/design-left-bar.vue";
import DesignRightBarComponent from "./design-right-bar/design-right-bar.vue";
import { compList } from "core/js/comp-config.js";
import * as _ from "lodash";

export default {
  data: () => {
    return {
      pageList: null,
      gridBgShowBol: true, //编辑器背景
      currentPageOriginData: null, //当前页面原始数据，保存后才更新
      currentPageLocalData: null, //当前页面本地数据
      currentSelectedComp: null, //当前选中的组件
      marginL: 220,
      marginT: 65,
      changeX: 0,
      changeY: 0,
    };
  },

  props: ["id"],

  components: {
    EditorComponent,
    DesignLeftBarComponent,
    DesignRightBarComponent,
  },

  computed: {
    currentPro() {
      return this.$store.state.appProject.find(
        (item) => item["project_id"] == this.id
      );
    },

    currentPage() {
      return this.$store.state.currentPageObj;
    },
  },

  created() {
    this.pageList = this.currentPro.pageList;
  },

  mounted() {},

  destoryed() {
    this.$store.commit("setEditState", false);
  },

  methods: {
    //更新配置
    updateConfig() {
      this.currentPageOriginData["comp_list"] = this.currentPageLocalData[
        "comp_list"
      ];
      this.$toasted.success("更新成功", {
        duration: 1000,
        position: "top-right",
        fullWidth: true,
        fitToScreen: true,
      });
    },
    //设置编辑器的背景
    setEditorBg(bol) {
      this.gridBgShowBol = bol || false;
    },
    //选中一个页面
    selectedPage(data) {
      this.currentPageOriginData = data;
      this.currentPageLocalData = _.cloneDeep(this.currentPageOriginData);
      //设置编辑器状态
      this.$store.commit("setEditState", true);
      this.resetRightBarConfigInfo();
    },
    //删除页面
    deletePage(pageId) {
      if (!pageId) return;
      this.pageList.splice(
        this.pageList.findIndex((page) => page["page_id"] === pageId),
        1
      );
      this.$store.commit("setCurrPageObj", null);
    },
    //拖拽组件图标生成组件
    dragCompIcon(data) {
      const _data = data["comp"],
        _event = data["event"];
      const draggedComp = compList.find(
        (comp) => comp["comp_type"] === _data["comp_type"]
      );
      const _cloneComp = _.cloneDeep(draggedComp);
      _cloneComp["style"]["left"] = _event.clientX - this.marginL;
      _cloneComp["style"]["top"] = _event.clientY - this.marginT;
      _cloneComp["uuid"] = "comp" + this.currentPageLocalData.comp_list.length;
      this.currentPageLocalData.comp_list.push(_cloneComp);
    },
    //组件点击事件，展示当前组件的配置参数
    compClickEv(data) {
      this.currentSelectedComp = data;
    },
    //重置数据面板
    resetRightBarConfigInfo() {
      this.currentSelectedComp = null;
    },
    //删除组件
    deleteComp() {
      const findIndex = this.currentPageLocalData["comp_list"].findIndex(
        (comp) => comp["uuid"] === this.currentSelectedComp["uuid"]
      );
      if (findIndex >= 0) {
        this.currentPageLocalData["comp_list"].splice(findIndex, 1);
        this.resetRightBarConfigInfo();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dev-page {
  width: 100%;
  height: 800px;
  border: 1px solid #ccc;
  border-top: none;
  .designer-top-bar {
    position: absolute;
    right: 70px;
    top: 7px;
    display: flex;
    align-items: center;
    color: white;
    line-height: 25px;
    margin-right: 20px;
    .set-bg {
      color: #aaa;
      .iconfont {
        color: #000;
        cursor: pointer;
      }
    }
    .running {
      cursor: pointer;
      color: red;
      margin: 0 50px;
      font-size: 20px;
      &.disabled {
        color: #ddd;
      }
    }
    .update {
      background-color: rgba(255, 0, 0, 0.5);
      padding: 0 15px;
      cursor: pointer;
      &.disabled {
        background-color: #ddd;
      }
    }
  }
  .designer {
    display: flex;
    height: 100%;
    .component-area {
      width: 175px;
      border-right: 1px solid #ccc;
      box-sizing: border-box;
    }
    .design-area {
      flex: 1;
    }
    .config-area {
      width: 175px;
      border-left: 1px solid #ccc;
      box-sizing: border-box;
      overflow-y: auto;
    }
  }
}
</style>

