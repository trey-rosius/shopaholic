<template>
  <footer>
    <section class="callout">
    
    </section>
    <app-footer-links />
    <div class="sarahstuff">
      <p>
        This project is
        <a href="https://github.com/trey-rosius/shopaholic_web">open source on github</a>,
        hosted with
        <a href="https://bit.ly/2G29YwK">Netlify</a>, and made with love by Rosius,
        <a
          href="https://twitter.com/atehrosius"
        >@atehrosius (twitter)</a> &
        <a href="https://github.com/trey-rosius">@trey-rosius (github)</a>
      </p>
    </div>
  </footer>
</template>

<script>
import AppFooterLinks from "~/components/AppFooterLinks.vue";

export default {
  components: {
    AppFooterLinks
  }
};
</script>

<style lang="scss" scoped>
.callout {
  width: 100%;
  height: 280px;
  background: url("/callout.jpg") center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  h2 {
    padding: 0 30px;
    text-align: center;
  }
}

.sarahstuff {
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
}

a,
a:visited,
a:active {
  color: #c4c3ec;
  font-weight: bold;
}
</style>