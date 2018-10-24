<template>
  <div class="home">
    <br>
    <br>
    <b-container flex>
      <div
        class="row justify-content-md-center"
        style="margin-top: 10%">
        <div class="col-md-auto">
          <h1 class="display-3 text-center">Contate-nos</h1>
          <br>
            <twitter-icon class="row"/>

            <at-icon class="row"/>
            <facebook-icon class="row"/>
            <git-hub-icon class="row"/>
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

<style>
  .display-3 {
    color: #a7a8a8;
  }
  .d-lg-table-row {
    padding: 10px;
  }
</style>

