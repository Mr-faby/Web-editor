<template>
  <div class="home-page">
    <h1>Welcome WEB EDITOR</h1>
    <h4>进入工作区以开始</h4>
    <video
      src="/src/asset/video/Video_2020-12-09_182038.mp4"
      width="700px"
      height="360px"
      autoplay
      controls
      loop
      ref="video"
    >您的浏览器版本过低，请升级浏览器版本</video>
  </div>
</template>

<script>
export default {
  methods:{
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  margin-top: 100px;
  text-align: center;
  video{
    box-shadow: 0 0 15px 5px rgba(0,0,0,0.2);
  }
}
</style>