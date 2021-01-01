<template>
  <div class="bg_header">

      <gradient-background/>

<div class="grids">
     <store-gridview :data="products" />
  
  </div>    
  </div>
</template>

<script>
import GradientBackground from '@/components/GradientBackground.vue';
import { mapState } from "vuex";
import StoreGridview from "~/components/StoreGridview.vue";
  export default {
    components:{
      GradientBackground,
       AppStoreGrid
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