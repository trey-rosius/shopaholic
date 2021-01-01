<template>
  <div class="bg_header">

      <gradient-background/>

    <span class="some-text">What about this part</span>
  </div>
</template>

<script>
import GradientBackground from '@/components/GradientBackground.vue';
  export default {
    components:{
      GradientBackground
      }
  }
</script>

<style lang="scss">
.bg_header{
 position: relative;
  }
.some-text{
  position: absolute;
  top:200px;
  left: 10px;
  }

</style>