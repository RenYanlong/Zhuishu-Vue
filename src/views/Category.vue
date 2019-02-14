<template>
    <div class="Category">
        <div class="categoryCenter">
            <div class="leftCategory">  
                <div v-for="tab in this.tabs" :key="tab.gender"  
                    :class="{istab:gender === tab.gender}"
                    class="leftCategoryList" 
                    @click="gender = tab.gender;changeGender1(tab.gender,tab.defaultmajor);changeGender2()">  
                    {{tab.name}}
                </div>      
            </div>
            <div class="rightCategory">               
                <div class="rightCategoryTitle">
                    <p v-if="this.gender == 'male'">男生</p>
                    <p v-else-if="this.gender == 'female'">女生</p>
                    <p v-else>出版物</p>                 
                </div>
                <div class="munu">
                    <div class="sort">
                        <div class="majorSort" v-if="gender == 'male'">
                            <ul>
                                <li v-for="list in maleMajors" 
                                :key="list.major" 
                                :class="{istab:major === list.major}"
                                @click="major = list.major;changeMajor1(list.major,list.minor,list.minor);changeMajor2()">{{list.major}}</li>
                            </ul>
                        </div> 
                        <div class="majorSort" v-if="gender == 'female'">
                            <ul>
                                <li v-for="list in femaleMajors" 
                                :key="list.major" 
                                :class="{istab:major === list.major}"
                                @click="major = list.major;changeMajor1(list.major,list.minor,list.minor);changeMajor2()">
                                {{list.major}}       
                                </li>
                            </ul>
                        </div>  
                        <div class="majorSort" v-if="gender == 'press'">
                            <ul>
                                <li v-for="list in pressMajors" 
                                :key="list.major" 
                                :class="{istab:major === list.major}"
                                @click="major = list.major;changeMajor1(list.major,list.minor,list.minor);changeMajor2()">{{list.major}}</li>
                            </ul>
                        </div>             
                    </div>

                    <div class="moreSort" v-if="defaultMoreSort.length !== 0">
                        <span>具体类型</span>
                        <ul>
                            <li v-for="list in defaultMoreSort" 
                                :key="list" 
                                :class="{istab:minor === list}"
                                @click="minor = list;changeMoreSort1(list);changeMoreSort2()">
                                {{list}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {     
            data () {
                return {
                    gender:'male',
                    major:'玄幻',
                    type:'hot',
                    minor:'全部', 
                    defaultMoreSort:['全部','东方玄幻','异界大陆','异界争霸','远古神话'],
                    categorylist:'',
                    tabs:[
                        {
                            gender:'male',
                            name:'男生',
                            defaultmajor:'玄幻',
                        },{
                            gender:'female',
                            name:'女生',
                            defaultmajor:'古代言情',
                        },{
                            gender:'press',
                            name:'出版物',
                            defaultmajor:'出版小说',
                        }],
                    maleMajors:[
                        {major:'玄幻',minor:['全部','东方玄幻','异界大陆','异界争霸','远古神话']},
                        {major:'奇幻',minor:['全部',,'西方奇幻' ,'领主贵族' ,'亡灵异族' ,'魔法校园']},
                        {major:'武侠',minor:['全部','传统武侠','新派武侠','国术武侠']},
                        {major:'仙侠',minor:['全部','古典仙侠','幻想修仙','现代修仙','洪荒封神']},
                        {major:'都市',minor:['全部','都市生活','爱情婚姻','异术超能','恩怨情仇','青春校园','现实百态']},
                        {major:'职场',minor:['全部','娱乐明星','官场沉浮','商场职场']},
                        {major:'历史',minor:['全部','穿越历史','架空历史','历史传记']},
                        {major:'军事',minor:['全部','军事战争','战争幻想','谍战特工','军旅生涯','抗战烽火']},
                        {major:'游戏',minor:['全部','游戏生涯','电子竞技','虚拟网游','游戏异界']},
                        {major:'竞技',minor:['全部','体育竞技','篮球运动','足球运动','棋牌桌游']},
                        {major:'科幻',minor:[ '全部','星际战争','时空穿梭','未来世界','古武机甲','超级科技','进化变异','末世危机']},
                        {major:'灵异',minor:['全部','推理侦探','恐怖惊悚','悬疑探险','灵异奇谈']},
                        {major:'同人',minor:['全部','武侠同人','影视同人','动漫同人','游戏同人','小说同人']},
                        {major:'轻小说',minor:[]}
                    ],
                    femaleMajors:[
                        {major:'古代言情',minor:['全部','穿越时空','古代历史','古典架空','宫闱宅斗','经商种田']},
                        {major:'现代言情',minor:['全部','豪门总裁','都市生活','婚恋情感','商战职场','异术超能']},
                        {major:'青春校园',minor:[]},
                        {major:'纯爱',minor:['全部','古代纯爱','现代纯爱']},
                        {major:'玄幻奇幻',minor:['全部','玄幻异世','奇幻魔法']},
                        {major:'武侠仙侠',minor:['全部','武侠','仙侠']},
                        {major:'科幻',minor:[]},
                        {major:'游戏竞技',minor:[]},
                        {major:'悬疑灵异',minor:['全部','悬疑','灵异']},
                        {major:'同人',minor:['全部','小说同人','动漫同人','影视同人','游戏同人','耽美同人']},
                        {major:'女尊',minor:[]},
                        {major:'莉莉',minor:[]},
                    ],
                    pressMajors:[
                        {major:'出版小说',minor:[]},
                        {major:'传记名著',minor:[]},
                        {major:'成功励志',minor:[]},
                        {major:'人文社科',minor:[]},
                        {major:'经管理财',minor:[]},
                        {major:'生活时尚',minor:[]},
                        {major:'育儿健康',minor:[]},
                        {major:'青春言情',minor:[]},
                        {major:'外文原版',minor:[]},
                        {major:'政治军事',minor:[]}
                    ]
                }
            },
            watch:{
                '$route'(){
                    //参数改变后的操作
                    this.$axios.get('https://novel.juhe.im/category-info?gender=' + this.gender + '&type=' + this.type + '&major=' + this.major + '&minor=' + this.minor)
                    .then((response) => {
                    this.categorylist = response.data;
                    })
                }
            },
            methods:{
                //点击gender按钮，
                changeGender1:function(a,b){                
                    this.gender = a,
                    this.major = b,
                    this.minor = '全部'
                    if(this.gender == 'female'){
                        this.defaultMoreSort = ['全部','穿越时空','古代历史','古典架空','宫闱宅斗','经商种田']
                    }else if(this.gender == 'male'){
                        this.defaultMoreSort = ['全部','东方玄幻','异界大陆','异界争霸','远古神话']
                    }else{
                        this.defaultMoreSort = []
                    }
                },
                //改变url参数
                changeGender2:function(){
                    this.$router.push({
                        path:'/category-info',
                        query:{
                            gender:this.gender
                        }
                    })
                },
                //更换$route.query参数
                changeMajor1:function(a,b,c){
                    this.major = a,
                    this.moreSort = b
                    this.defaultMoreSort = c
                    this.minor = '全部'
                },
                //改变url参数
                changeMajor2:function(){
                    this.$router.push({
                        path:'/category-info',
                        query:{
                            gender:this.gender,
                            major:this.major,
                            minor:'全部'
                        }
                    })
                },
                changeMoreSort1:function(a){
                    this.minor = a
                },
                changeMoreSort2:function(){
                    this.$router.push({
                        path:'/category-info',
                        query:{
                            gender:this.gender,
                            major:this.major,
                            minor:this.minor
                        }
                    })
                }
            },
            mounted() {
                this.$axios.get('https://novel.juhe.im/category-info?gender=' + this.gender + '&type=' + this.type + '&major=' + this.major + '&minor=' + this.minor)
                .then((response) => {
                    this.categorylist = response.data;
                })
            }  
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
body{
    background-color: #fbfaf8;
}

.categoryCenter{
    width: 1200px;
    margin: 0 auto;
    padding: 15px 0;
}
.leftCategory{
    width: 240px;
    float: left;
    border-top: 4px solid #cab389;
}
.leftCategoryList{
    height: 60px;
    width: 100%;
    color: #999;
    font-size: 14px;
    font-weight: 400;
    line-height: 60px;
    border-bottom: 1px solid #ccc;
    box-sizing: border-box;
    padding-left: 40px;
}
.Category .istab{
    color: #fff;
    border-radius: 2px;
    background-color: #d82626;
    font-weight: 400;
}
.rightCategory{
    width: 880px;
    float: right;
}
.rightCategoryTitle p{
    width: 100%;
    height: 60px;
    line-height: 60px;
    font-size: 22px;
    font-weight: 700;
    color: #cab389;
}

.majorSort li{
    list-style: none;
    float: left;
    padding: 0 10px;
    line-height: 30px;
    font-size: 14px;
    color: #666;
    cursor:pointer;
}
.majorSort{
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
}
.moreSort{
    width: 100%;
    height: 30px;
    padding: 15px;
    background-color: #f4f2ef;
}
.moreSort li,.moreSort span{
    list-style: none;
    float: left;
    padding: 0 10px;
    line-height: 30px;
    font-size: 14px;
    font-weight: 400;
    color: #666;
    cursor: pointer;
}

</style>
