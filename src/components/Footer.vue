<template>
  <div class="footer">
    <div class="container">
      <i class="fab fa-github"><a
        href="https://github.com/OpenEnade"
        style="padding-left: 10px; color: white;">{{ footerText }}</a></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      footerText: 'Open Enade',
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #36648b;
  position: fixed;
  padding: 1rem;
  bottom: 0px;
  lef: 0px;  
  right: 0px;
  text-align: center;
  width: 100%;
  height: 50px;
}
</style>
