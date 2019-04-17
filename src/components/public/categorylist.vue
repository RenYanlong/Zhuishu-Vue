<template>
  <div class="categorylist">
    <p>{{info.major}}</p>
      <svg
        class="icon"
        width="24px"
        height="24.00px"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M439.456 755.2l-59.744-59.744L563.168 512l-183.456-183.456L439.456 268.8l243.2 243.2z"
          fill="#dbdbdb"
        ></path>
      </svg>
  </div>
</template>

<script>
export default {
  props:[
    'info'
  ]
}
</script>

<style lang="less" scoped>
.categorylist{
  display: flex;
  justify-content: space-between;
  padding: 1vh 0;
  border-bottom: 1px solid #dbdbdb;
  color: #e0620d;
  font-size: 20px;
}

</style>
