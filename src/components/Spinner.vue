<template lang="html">

  <section class="spinner">
     <div id="circle">
        <div class="loader">
          <div class="loader">
            <div class="loader">
              <div class="loader"/>
            </div>
          </div>
        </div>
      </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'spinner',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.spinner {
}

#circle {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
}

.loader {
  width: calc(100% - 0px);
  height: calc(100% - 0px);
  border: 8px solid #162534;
  border-top: 8px solid #09f;
  border-radius: 50%;
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
