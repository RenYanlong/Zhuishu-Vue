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
  a{
    &:link,&:visited,&:hover,&:active{
      text-decoration: none;
      color: #011638;
      outline:none;
      -webkit-tap-highlight-color: transparent;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
  }
}
</style>