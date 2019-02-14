<template>
    <div class="charts">
        <div class="chartsHead">
            <span class="chartsName">排行榜</span>
            <span class="chartsaAll">全部</span>
        </div>
        <div class="chartsmain">
            <div class="ranking-nav">
                <div v-for="tab in tabs" 
                     v-bind:key="tab.sex" 
                     v-bind:class="{isrankinglist:currentTab === tab.sex}"
                     v-on:click="currentTab = tab.sex"
                     class="rankinglist">{{tab.name}}</div>
            </div>
            <keep-alive>
                <component :is="componentTab">

                </component>
            </keep-alive>
        </div>
    </div>
    
    
</template>


<script>
import maletab from '@/components/shouye/chartsmale.vue'
import femaletab from '@/components/shouye/chartsfemale.vue'
export default {
    name:'charts',
    data () {
        return {
            currentTab:'male',
            tabs:[{
                sex:'male',
                name:'男生'
            },
            {
                sex:'female',
                name:'女生'
            }]
        }
    },
    components:{
        maletab,
        femaletab
    },
    computed:{
        componentTab:function(){
            return this.currentTab + 'tab'.toLowerCase();
        }
    }
}
</script>

<style scoped>

.charts{
    width: 250px;
    float: left;
    border: 1px solid #eee;
    padding: 0 15px;
    box-sizing: border-box;
}
.chartsHead{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
}
.chartsName{
    float: left;
    font-size: 18px;
    color: #333;
    font-weight: 700;
}
.chartsaAll{
    float: right;
    font-weight: 200;
    color: #999;
    font-size: 12px;
}

.ranking-nav{
    display: inline-block;
    text-align: center;
    width: 100%;
    margin-bottom: 13px;
    
}
.rankinglist{
    display: inline;
    line-height: 30px;
    margin: 0 10px; 
    font-size: 16px;
    color:#999;
}
.isrankinglist{
    color: #d82626;
    text-decoration: underline;
}

</style>
