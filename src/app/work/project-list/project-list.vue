<template>
  <div class="project-list-page">
    <div class="title">项目</div>
    <div class="list">
      <div class="item" v-for="pro of appProject" :key="pro.project_name">
        <router-link :to="'./dev/'+pro.project_id">
          <div class="item-tit">{{pro.project_name}}</div>
          <div class="item-desc">{{pro.project_desc}}</div>
        </router-link>
        <div class="item-bot">
          <span class="iconfont iconshanchu" @click="delProject(pro.project_id)"></span>
          <span class="iconfont iconkaishi_yunhang" @click="runProject"></span>
        </div>
        <span class="item-operation iconfont iconcaozuo-gengduo"></span>
      </div>
      <div class="item add-box" @click="addProject">
        <span class="iconfont iconchuangjian"></span>
      </div>
    </div>
  </div>
</template>

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
        height: 30px;
        line-height: 30px;
        margin: 15px 0;
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

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    appProject() {
      return this.$store.state.appProject;
    }
  },
  methods: {
    addProject() {
      console.log("add");
    },
    delProject() {
      console.log("del");
    },
    runProject() {
      console.log("run");
    }
  }
};
</script>
