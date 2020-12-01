<template>
  <div class="project-list-page">
    <div class="title">项目</div>
    <div class="list">
      <div
        class="item"
        v-for="(pro,idx) of appProject"
        :key="pro.project_name + idx"
        @click="setProject(pro)"
      >
        <router-link :to="'./dev/'+pro.project_id">
          <div class="item-tit">{{pro.project_name}}</div>
          <div class="item-desc">{{pro.project_desc}}</div>
        </router-link>
        <div class="item-bot">
          <span class="iconfont iconshanchu" @click.stop="delProject(pro.project_id)"></span>
          <span
            class="iconfont iconkaishi_yunhang run-btn"
            :class="{'disabled':pro['pageList'].length === 0}"
            @click="runProject(pro)"
          ></span>
        </div>
        <span class="item-operation iconfont iconcaozuo-gengduo"></span>
      </div>
      <div class="item add-box" @click="showModal = true">
        <span class="iconfont iconchuangjian"></span>
      </div>
    </div>
    <create-project-modal v-if="showModal" @close="closeModal" @submit="createProject($event)"></create-project-modal>
  </div>
</template>

<script>
import createProjectModal from "./create-project-modal/create-project-modal.vue";

export default {
  data: () => {
    return {
      showModal: false
    };
  },
  components: {
    createProjectModal
  },
  computed: {
    appProject() {
      return this.$store.state.appProject;
    }
  },
  methods: {
    setProject(pro) {
      this.$store.commit("setCurrProObj", pro);
    },
    delProject(id) {
      this.appProject.splice(
        this.appProject.findIndex(pro => pro["project_id"] === id),
        1
      );
      this.$store.commit("setCurrProObj", null);
      this.successToast();
    },

    runProject(pro) {
      const pages = pro["pageList"];
      if (!pages.length) return;
      const page = pages[0];
      this.$store.commit("setCurrPageObj", page);
      this.$router.push("./run/" + page["page_id"]);
    },

    createProject(data) {
      if (!data) return;
      let newId;
      try {
        newId = this.appProject[this.appProject.length - 1]["project_id"];
      } catch (err) {
        newId = 0;
      }
      newId++;
      const pro = Object.assign(
        {
          project_id: newId,
          pageList: []
        },
        data
      );
      this.appProject.push(pro);
      this.closeModal();
      this.successToast();
    },

    successToast() {
      this.$toasted.success("更新成功", {
        duration: 1000,
        position: "top-right",
        fullWidth: true,
        fitToScreen: true
      });
    },

    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.project-list-page {
  .title {
    color: rgba(68, 68, 68, 0.5);
    padding-left: 15px;
    height: 40px;
    line-height: 40px;
    border-left: 5px solid red;
    border-bottom: 1px dashed #ddd;
    margin-bottom: 15px;
    font-weight: bold;
  }
  .list {
    .item {
      display: inline-block;
      margin: 15px;
      width: 150px;
      height: 200px;
      border: 1px solid #eee;
      text-align: center;
      position: relative;
      cursor: pointer;
      &:hover {
        border-color: red;
      }
      .item-tit {
        margin-top: 30px;
        color: #888;
      }
      .item-desc {
        height: 100px;
        text-align: center;
        padding: 15px 10px;
        box-sizing: border-box;
        color: #888;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 12px;
      }
      .item-bot {
        height: 40px;
        display: flex;
        border-top: 1px solid #eee;
        align-items: center;
        color: red;
        span {
          flex: 1;
          display: inline-block;
          height: 100%;
          line-height: 40px;
          &.disabled {
            color: #ddd;
          }
          &:hover {
            background-color: #eee;
          }
        }
      }
      .item-operation {
        position: absolute;
        top: 0;
        right: 5px;
      }
      &.add-box {
        position: absolute;
        line-height: 200px;
        span {
          font-size: 32px;
          color: #888;
        }
      }
    }
  }
}
</style>
