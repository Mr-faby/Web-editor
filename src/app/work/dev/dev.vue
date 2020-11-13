<template>
  <div class="dev-page">
    <div class="designer-top-bar">
      <div class="set-bg">
        <span>背景：</span>
        <span class="iconfont iconwanggekai" title="网格开"></span>
        <span class="iconfont iconwanggeguan" title="网格关"></span>
      </div>
      <span class="running iconfont iconkaishi_yunhang" title="运行"></span>
      <span class="update">更新</span>
    </div>
    <div class="designer">
      <div class="component-area">
        <design-left-bar-component :pageList="pageList"></design-left-bar-component>
      </div>
      <div class="design-area">
        <editor-component></editor-component>
      </div>
      <div class="config-area">
        <design-right-bar-component></design-right-bar-component>
      </div>
    </div>
  </div>
</template>

<script>
import EditorComponent from "./editor/editor.vue";
import DesignLeftBarComponent from "./design-left-bar/design-left-bar.vue";
import DesignRightBarComponent from "./design-right-bar/design-right-bar.vue";

export default {
  data: () => {
    return {
      pageList: null
    };
  },
  props: ["id"],
  components: {
    EditorComponent,
    DesignLeftBarComponent,
    DesignRightBarComponent
  },
  computed: {
    currentPro() {
      return this.$store.state.appProject.find(item => item['project_id'] == this.id);
    }
  },
  created() {
    this.pageList = this.currentPro.pageList;
  }
};
</script>

<style lang="scss" scoped>
.dev-page {
  width: 100%;
  height: 800px;
  border: 1px solid #ccc;
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
    }
    .update {
      background-color: rgba(255, 0, 0, 0.5);
      padding: 0 15px;
      cursor: pointer;
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
    }
  }
}
</style>

