<template>
  <div class="bg_header">

      <gradient-background/>

<div class="grids">
    <app-swiper/>
     <store-gridview :data="products" />
  <app-footer />  

  </div>  
    
  </div>




</template>

<script>
import AppSwiper from '@/components/AppSwiper.vue';
import AppFooter from "~/components/AppFooter.vue";
import AppNav from "~/components/AppNav.vue";
import GradientBackground from '@/components/GradientBackground.vue';
import { mapState } from "vuex";
import StoreGridview from "~/components/StoreGridview.vue";
  export default {
    components:{
      GradientBackground,
       StoreGridview,
       AppFooter,
 
      },
    
  computed: {
    ...mapState(["products"])
  }
  }
</script>

<style lang="scss">
.bg_header{
 position: relative;
  }
.grids{
  position: absolute;
 
  top:200px;
  left: 10px;
  }

</style>