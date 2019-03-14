<template>
  <div class="overbooks">
    <h3>{{info.title}}</h3>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  props:['info']
};
</script>

<style lang="less" scoped>
h3 {
  height: 40px;
  line-height: 40px;
  font-weight: 500;
  
}
</style>
