<template>
  <div class="home">
    <br>
    <br>
    <b-container flex>
      <div
        class="row justify-content-md-center"
        style="margin-top: 10%">
        <div>
          <h1 class="display-3 text-center">Contate-nos</h1>
          <br>
          <div align="center">
            <label>
            <twitter-icon />@openenade</label><br>
            <label>
            <at-icon />openenade@gmail.com</label><br>
            <label>
            <facebook-icon />@openenade</label><br>
            <label>
            <git-hub-icon />@openenade</label><br>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import TwitterIcon from 'vue-material-design-icons/Twitter.vue';
import AtIcon from 'vue-material-design-icons/At.vue';
import FacebookIcon from 'vue-material-design-icons/Facebook.vue';
import GitHubIcon from 'vue-material-design-icons/GithubCircle.vue';

export default {
  name: 'Contact',
  components: {
    TwitterIcon,
    AtIcon,
    FacebookIcon,
    GitHubIcon,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.display-3 {
  color: #a7a8a8;
}
label {
  padding-bottom: 10px;
}
</style>

