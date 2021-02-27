<template>
  <div class="page-list-page">
    <div
      class="page-item"
      v-for="page of pageList"
      :key="page.page_id"
      :class="{ active: page['page_id'] === currentPageID }"
      @click="emitselectedPageEvToParent(page)"
    >
      <div class="page-info">
        <span class="iconfont iconyemian"></span>
        <span class="page-text" :title="page.page_desc">{{
          page.page_name
        }}</span>
      </div>
      <div class="page-edit">
        <!-- <span class="iconfont iconbianji" @click="editPageInfo(page.page_id)" title="编辑"></span> -->
        <span
          class="iconfont iconshanchu"
          @click.stop="emitDelPageEvToParent(page.page_id)"
          title="删除"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      currentPageID: null,
    };
  },
  props: ["pageList"],
  computed: {
    currentPro() {
      return this.$store.state.currentProjectObj;
    },
  },
  mounted() {
    //是否编辑进入
    const editPageId = this.$route.query["checkPage"];
    if (editPageId) {
      const page = this.currentPro["pageList"].find(
        (p) => p["page_id"] == editPageId
      );
      setTimeout(() => {
        this.emitselectedPageEvToParent(page);
      }, 0);
    }
  },
  destroyed() {
    this.$store.commit("setEditState", false);
    this.$store.commit("setCurrPageObj", null);
  },
  methods: {
    editPageInfo() {},
    emitDelPageEvToParent(id) {
      this.$emit("emitDeletePageEv", id);
      this.successToast();
    },
    emitselectedPageEvToParent(page) {
      this.currentPageID = page["page_id"];
      this.$store.commit("setCurrPageObj", page);
      this.$emit("emitselectedPageEv", page);
    },
    successToast() {
      this.$toasted.success("更新成功", {
        duration: 1000,
        position: "top-right",
        fullWidth: true,
        fitToScreen: true,
      });
    },
  },
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