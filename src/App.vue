<template>
  <div class="myApp">
    <router-view />
  </div>
</template>
<script>
// import Footer from "./components/public/footer";
// import Customer from "@/components/public/customer.vue";

export default {
  name: "myApp",
  components: {
    // Customer,
    // Footer
  }
};
</script>
<style lang="scss">

.myApp {
  color: #011638;
  a,
  a:link,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
    color: #011638;
  }
}
</style>