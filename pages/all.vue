<template>
  <div>
    <store-gridview :data="products" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import StoreGridview from "~/components/StoreGridview.vue";

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapState(["products"])
  }
};
</script>

<style lang="scss" scoped>
</style>