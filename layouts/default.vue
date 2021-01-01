<template>
  <div class="primary">

     <Nuxt />
     <div class="secondary">
     <app-nav/>
   
     </div>

  </div>
</template>
<script>
import AppNav from '@/components/AppNav.vue';
import AppFooter from "~/components/AppFooter.vue";
export default {
  components:{
    AppNav,
     AppFooter
}
}
</script>

<style lang="scss" scoped>

.primary{
  position: relative;
  }
  .secondary{
    position: absolute;
    top: 5px;
    }

</style>
