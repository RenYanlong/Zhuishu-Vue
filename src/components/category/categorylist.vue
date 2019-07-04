<template>
  <div class="categorylist">
    <p class="major">{{info.major}}</p>
    <p class="minor">{{info.mins.join(' | ')}}</p>
  </div>
</template>


<script>
export default {
  props: ["info"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.categorylist {
  display: flex;
  flex-flow: column nowrap;
  padding: 2vmin 0;
}
.major{
  font-size: 14px;
  font-weight: 500;
  color: #000;
}
.minor {
  font-size: 12px;
}
</style>
