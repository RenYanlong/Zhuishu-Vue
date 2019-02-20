<template>
    <div class="charts">
        <div class="chartsHead">
            <span class="chartsName">排行榜</span>
        </div>
        <div class="chartsMain">
            <div class="rankingNav">
                <span @click="changemale" :class="[this.currentTab == 'male'?'istab':'']">男生榜</span>
                <span class="interval">|</span>
                <span @click="changefemale" :class="[this.currentTab == 'female'?'istab':'']">女生榜</span>
            </div>
            <div>
                <Chartsmain :data='maleinfo' v-if="currentTab === 'male'"></Chartsmain>
                <Chartsmain :data='femaleinfo' v-else></Chartsmain>
            </div>
        </div>
    </div>    
</template>
<script>
import Chartsmain from '@/components/home/chartsmain.vue'
export default {
    name:'charts',
    data () {
        return {
            currentTab:'male',
            maleinfo:'',
            femaleinfo:'',
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
    methods:{
        changefemale:function() {
            if (this.currentTab != 'female') {
                this.currentTab = 'female'
            }    
        },
        changemale:function() {
            if (this.currentTab != 'male') {
                this.currentTab = 'male'
            }    
        }
    },
    components:{
        Chartsmain
    },
    mounted () {
        this.$axios.get('https://novel.juhe.im/rank/54d43437d47d13ff21cad58b').then((response) => {
            this.femaleinfo = response.data.ranking.books.slice(0,10)})
        this.$axios.get('https://novel.juhe.im/rank/54d42d92321052167dfb75e3').then((response) => {
            this.maleinfo = response.data.ranking.books.slice(0,10)})
    }
}
</script>
<style lang="less" scoped>
.charts{
    background-color: @backgroundColor4;
    width: 250px;
    float: left;
    border: 1px solid #eee;
    padding: 0 15px;
    box-sizing: border-box;
    .chartsHead{
        box-sizing: border-box;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        .chartsName{
            float: left;
            font-size: 18px;
            color: #333;
            font-weight: 700;
        }
    }
    .chartsMain{
        .rankingNav{
            height: 30px;
            text-align: center;
            span{
                line-height: 30px;
                cursor: pointer;
            }
            .interval{   
                margin: 0 15px;
            }
            .istab{
                color: red;
                text-decoration: underline;
            }
        }
    }
}
</style>
