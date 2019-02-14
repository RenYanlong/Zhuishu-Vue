<template>
    <div class="sort">
        <div class="sort-main">
          <div class="menumain">
            <ul class="typelist">
              <li 
              v-for="tab in tabs" 
              v-bind:key="tab">{{tab}}</li>
            </ul>
            <component v-bind:is="currentTab">

            </component>
          </div>
        </div>
    </div>   
</template>


<script>

export default {
    el:'.sort',
    data () {
        return {
            
        }
    } 
}

</script>


<style scoped>
/* .sort-main .title{
    height: 20px;
    line-height: 20px;
    border-left: #cab389 5px solid;
    padding-left: 15px;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
} */


</style>
