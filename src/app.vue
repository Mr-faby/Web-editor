<template>
  <div class="app" id="app">
    <div class="page-top-bar">
      <div class="home-page" @click="toHome">HMI DESIGNER</div>
      <div class="right">
        <div class="work-space" @click="toWork">工作区</div>
        <div class="avatar">
          <img src="/src/asset/img/avatar.png" />
        </div>
      </div>
    </div>
    <div class="page-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  methods: {
    toWork() {
      this.$router.replace({ name: "work" });
    },

    toHome() {
      this.$router.replace({ name: "home" });
      console.log(this.$route);
    }
  }
};
</script>

<style lang="scss">
@import "/core/style/iconfont.scss";

html,
body {
  margin: 0;
  padding: 0;
  font-size: 13px;
}
#app {
  .page-top-bar {
    height: 40px;
    margin-bottom: 5px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    .home-page {
      height: 100%;
      padding: 0 15px;
      line-height: 40px;
      text-align: center;
      font-size: 16px;
      cursor: pointer;
      background-color: grey;
      font-weight: bold;
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      .work-space {
        background-color: rgba(255, 0, 0, 0.5);
        padding: 0 15px;
        font-size: 12px;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        cursor: pointer;
        margin-right: 20px;
      }
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        overflow: hidden;
        display: inline-block;
        img {
          height: 30px;
          cursor: pointer;
        }
      }
    }
  }
  .page-content {
    padding: 0 20px;
  }
}
</style>