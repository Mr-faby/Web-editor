<template>
  <div class="page-list-page">
    <div
      class="page-item"
      v-for="page of data"
      :key="page.page_id"
      :class="{active:page['page_id'] === currentPageID}"
      @click="selectPage(page)"
    >
      <div class="page-info">
        <span class="iconfont iconyemian"></span>
        <span class="page-text">{{page.page_name}}</span>
      </div>
      <div class="page-edit">
        <span class="iconfont iconbianji" @click="editPageInfo(page.page_id)" title="编辑"></span>
        <span class="iconfont iconshanchu" @click="delPage(page.page_id)" title="删除"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { EmitEvent } from "../../../../../core/js/emit.js";

export default {
  data: () => {
    return {
      currentPageID: null
    };
  },
  props: ["data"],
  methods: {
    editPageInfo() {
      console.log("editPageInfo");
    },
    delPage() {
      console.log("delPage");
    },
    selectPage(page) {
      this.currentPageID = page["page_id"];
      EmitEvent.$emit("selectedPage", page);
      EmitEvent.$emit("selectCompEmit");
    }
  }
};
</script>

<style lang="scss" scoped>
.page-list-page {
  height: 100%;
  .page-item {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
    box-sizing: border-box;
    width: 100%;
    height: 24px;
    line-height: 24px;
    cursor: pointer;
    &:hover,
    &.active {
      background-color: rgba(255, 0, 0, 0.5);
      color: white;
    }
    .page-edit {
      display: none;
    }
    &:hover .page-edit {
      display: block;
    }
  }
}
</style>