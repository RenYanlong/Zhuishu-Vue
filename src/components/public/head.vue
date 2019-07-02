<template>
  <div class="returnbut" >
    <svg
      class="icon"
      width="20px"
      height="20.00px"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <path
        d="M274.510074 461.204104c130.168642-125.846196 260.332167-251.684206 390.490575-377.400442 53.595662-51.864228 133.49848 32.354895 79.653131 84.346013-115.838262 112.008027-231.6755 223.893256-347.450317 335.904353C513.596358 619.888196 629.989251 735.852324 746.444567 851.690586c52.978609 52.733015-26.921139 136.953162-79.712483 84.282568C535.946388 805.873074 405.233348 675.710572 274.510074 545.546024 252.90194 523.93789 252.342192 482.563574 274.510074 461.204104L274.510074 461.204104zM274.510074 461.204104"
        fill="#e0620d"
      ></path>
    </svg>
    <p @click="click"><slot></slot></p>
  </div>
</template>

<script>
export default {
  methods: {
    click(){
      history.go(-1);
    }
  },
};
</script>


<style lang="less" scoped>
.returnbut{
  display: flex;
  position: fixed;
  width: 100vw;
  align-items:center;
  height: 8vh;
  line-height: 8vh;
  background-color: #fff;
  padding: 0 2vw;
  font-size: 18px;
}
p{
  color: #e0620d;
}
</style>
