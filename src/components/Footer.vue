<template>
  <div class="footer">
    <div class="container">
      <i class="fab fa-github"><a
        href="https://github.com/OpenEnade"
        style="padding-left: 10px">footerText</a></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerText: 'Open Enade'
    }
  }
};
</script>

<style scoped>
.footer {
  margin-top: 5%;
  position: relative;
  bottom: 0;
  padding: 1rem;
  text-align: center;
  width: 100%;
  height: 50px;
}
</style>
