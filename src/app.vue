<template>
  <div class="app-page" id="app">
    <div class="page-top-bar">
      <router-link to="/home" active-class="home-active">
        <div class="home-page">HMI DESIGNER</div>
      </router-link>

      <div class="right">
        <router-link to="/work" active-class="work-active">
          <div class="work-space">工作区</div>
        </router-link>
        <div class="avatar">
          <img src="/src/asset/img/avatar.png" @click="toGitHub" />
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
    toGitHub() {
      window.open("https://github.com/Mr-faby?tab=repositories");
    }
  }
};
</script>

<style lang="scss">
#app {
  .page-top-bar {
    height: 40px;
    // margin-bottom: 5px;
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
      &:hover {
        background-color: rgba(255, 0, 0, 0.5);
      }
    }
    .home-active .home-page {
      background-color: rgba(255, 0, 0, 0.5);
    }
    .right {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      .work-active {
        display: none;
      }
      .work-space {
        background-color: grey;
        padding: 0 15px;
        font-size: 12px;
        height: 25px;
        line-height: 25px;
        display: inline-block;
        cursor: pointer;
        margin-right: 20px;
        &:hover {
          background-color: rgba(255, 0, 0, 0.5);
        }
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
    padding: 0 5px;
  }
}
</style>