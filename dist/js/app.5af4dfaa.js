(function(t){function e(e){for(var o,i,r=e[0],l=e[1],u=e[2],d=0,f=[];d<r.length;d++)i=r[d],a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);c&&c(e);while(f.length)f.shift()();return n.push.apply(n,u||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],o=!0,r=1;r<s.length;r++){var l=s[r];0!==a[l]&&(o=!1)}o&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},a={app:0},n=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var o=s("64a9"),a=s.n(o);a.a},"052d":function(t,e,s){"use strict";var o=s("26b1"),a=s.n(o);a.a},"079f":function(t,e,s){},"26b1":function(t,e,s){},"27b0":function(t,e,s){},2939:function(t,e,s){"use strict";var o=s("aa4b"),a=s.n(o);e["default"]=a.a},"350f":function(t,e,s){"use strict";var o=s("5a17"),a=s.n(o);a.a},"47d4":function(t,e,s){"use strict";var o=s("d1ec"),a=s.n(o);a.a},"553e":function(t,e,s){"use strict";var o=s("6421"),a=s.n(o);a.a},"56cf":function(t,e,s){"use strict";var o=s("d894"),a=s.n(o);a.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("publicHead"),s("router-view")],1)},n=[],i=s("639a"),r={name:"app",components:{publicHead:i["default"]}},l=r,u=(s("034f"),s("2877")),c=Object(u["a"])(l,a,n,!1,null,null,null),d=c.exports,f=s("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shouye"},[s("div",{staticClass:"shouyecenter"},[s("div",{staticClass:"Content-left"},[s("category",{attrs:{sextype:t.nansheng,type:t.typemale,sex:t.nan}}),s("category",{attrs:{sextype:t.nvsheng,type:t.typefemale,sex:t.nv}}),s("category",{attrs:{sextype:t.press,type:t.typepress,sex:t.pre}}),s("sharts")],1),s("div",{staticClass:"Content-right"})])])},h=[],p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"category"},[s("div",{staticClass:"title"},[s("span",{staticClass:"sex"},[t._v(t._s(t.sextype))]),s("span",{staticClass:"more"},[t._v("更多")])]),s("div",{staticClass:"cetegory-list"},t._l(t.type,function(e){return s("router-link",{key:e.name,attrs:{to:{path:"./category-info",query:{gender:t.sex,major:e.name,type:"hot"}}}},[s("p",{staticClass:"name"},[t._v(t._s(e.name))]),s("p",{staticClass:"bookCount"},[t._v(t._s(e.bookCount))])])}),1)])},v=[],b={name:"category",props:["type","sextype","sex"]},_=b,k=(s("ba4f"),Object(u["a"])(_,p,v,!1,null,"12fe1f3c",null)),g=k.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"charts"},[t._m(0),s("div",{staticClass:"chartsmain"},[s("div",{staticClass:"ranking-nav"},t._l(t.tabs,function(e){return s("div",{key:e.sex,staticClass:"rankinglist",class:{isrankinglist:t.currentTab===e.sex},on:{click:function(s){t.currentTab=e.sex}}},[t._v(t._s(e.name))])}),0),s("keep-alive",[s(t.componentTab,{tag:"component"})],1)],1)])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chartsHead"},[s("span",{staticClass:"chartsName"},[t._v("排行榜")]),s("span",{staticClass:"chartsaAll"},[t._v("全部")])])}],j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chartsmale"},[s("ul",t._l(t.info,function(e,o){return s("li",{key:e._id,staticClass:"chartsmalelist"},[s("div",{staticClass:"chartsnum"},[0==o?s("p",{staticClass:"one"},[t._v(t._s(o+1))]):1==o?s("p",{staticClass:"two"},[t._v(t._s(o+1))]):2==o?s("p",{staticClass:"san"},[t._v(t._s(o+1))]):s("p",{staticClass:"other"},[t._v(t._s(o+1+"."))]),0==o?s("img",{attrs:{src:"http://statics.zhuishushenqi.com"+e.cover}}):t._e()]),s("div",{staticClass:"chartstext"},[s("p",{staticClass:"chartstitle"},[t._v(t._s(e.title))]),s("p",{staticClass:"chartsfollower"},[t._v(t._s((e.latelyFollower/1e4).toFixed(2))+" 万人气")])])])}),0)])},x=[],$={name:"chartsmale",data:function(){return{info:[]}},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/rank/54d42d92321052167dfb75e3").then(function(e){t.info=e.data.ranking.books.slice(0,10)})}},I=$,L=(s("b6c0"),Object(u["a"])(I,j,x,!1,null,"09485e44",null)),M=L.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"chartsmale"},[s("ul",t._l(t.info,function(e,o){return s("li",{key:e._id,staticClass:"chartsmalelist"},[s("div",{staticClass:"chartsnum"},[0==o?s("p",{staticClass:"one"},[t._v(t._s(o+1))]):1==o?s("p",{staticClass:"two"},[t._v(t._s(o+1))]):2==o?s("p",{staticClass:"san"},[t._v(t._s(o+1))]):s("p",{staticClass:"other"},[t._v(t._s(o+1+"."))]),0==o?s("img",{attrs:{src:"http://statics.zhuishushenqi.com"+e.cover}}):t._e()]),s("div",{staticClass:"chartstext"},[s("p",{staticClass:"chartstitle"},[t._v(t._s(e.title))]),s("p",{staticClass:"chartsfollower"},[t._v(t._s((e.latelyFollower/1e4).toFixed(2))+" 万人气")])])])}),0)])},S=[],O={name:"chartsmale",data:function(){return{info:[]}},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/rank/54d43437d47d13ff21cad58b").then(function(e){t.info=e.data.ranking.books.slice(0,10)})}},T=O,q=(s("d6a6"),Object(u["a"])(T,w,S,!1,null,"f048ebfa",null)),E=q.exports,B={name:"charts",data:function(){return{currentTab:"male",tabs:[{sex:"male",name:"男生"},{sex:"female",name:"女生"}]}},components:{maletab:M,femaletab:E},computed:{componentTab:function(){return this.currentTab+"tab".toLowerCase()}}},P=B,z=(s("350f"),Object(u["a"])(P,C,y,!1,null,"3b0d7a56",null)),F=z.exports,D={data:function(){return{name:"shouye",typemale:[],typefemale:[],typepress:[],nansheng:"男生",nvsheng:"女生",press:"出版社",nan:"male",nv:"female",pre:"press"}},components:{category:g,sharts:F},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/categories").then(function(e){t.typemale=e.data.male.slice(0,9),t.typefemale=e.data.female.slice(0,9),t.typepress=e.data.press.slice(0,9)})}},G=D,R=(s("f1dd"),Object(u["a"])(G,m,h,!1,null,"031e170f",null)),A=R.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"booklist"},[s("div",{staticClass:"booklistcenter"},[s("div",{staticClass:"listleft"},[s("ul",t._l(t.sortList,function(e){return s("li",{key:e.name,on:{click:function(s){t.defaultSort=e.name,t.clickhot(e.sort,e.duration,e.start)}}},[t._v("\n            "+t._s(e.name)+"\n        ")])}),0)]),s("div",{staticClass:"listright"},[s("div",{staticClass:"listghtmain"},[s("p",[t._v(t._s(t.defaultSort))]),s("ul",t._l(t.categorylist,function(t){return s("li",{key:t.name,staticClass:"bookb"},[s("router-link",{attrs:{to:{path:"/bookListDetails",query:{id:t._id}}}},[s("book",{attrs:{book:t}})],1)],1)}),0)])])])])},N=[],J=(s("55dd"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookblock"},[s("div",{staticClass:"bookImg"},[s("img",{attrs:{src:"http://statics.zhuishushenqi.com"+t.book.cover}})]),s("div",{staticClass:"bookinfo"},[s("p",{staticClass:"bookname"},[t._v(t._s(t.book.title))]),s("p",{staticClass:"author"},[t._v(t._s(t.book.author))]),s("p",{staticClass:"brief"},[t._v(t._s(t.book.desc))]),s("p",{staticClass:"popular"},[t._v("共"),s("span",[t._v(t._s(t.book.bookCount))]),t._v("本书  |  "),s("span",[t._v(t._s(t.book.collectorCount))]),t._v("人收藏")])])])}),U=[],K={props:["book"]},Q=K,V=(s("553e"),Object(u["a"])(Q,J,U,!1,null,"8cd62110",null)),W=V.exports,X={name:"booklist",data:function(){return{desort:"",deduration:"",destart:"",categorylist:"",defaultSort:"按本周热度",sortList:[{name:"按本周热度",sort:"collectorCount",duration:"last-seven-days",start:"0"},{name:"按发布时间",sort:"created",duration:"all"},{name:"按收藏数量",sort:"collectorCount",duration:"all"}]}},components:{book:W},methods:{clickhot:function(t,e,s){this.$router.push({push:"/booklist",query:{sort:t,duration:e,start:s}})}},watch:{$route:function(){this.desort=this.$route.query.sort,this.deduration=this.$route.query.duration,this.destart=this.$route.query.start}},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/booklists?sort=collectorCount&duration=last-seven-days&start=0").then(function(e){t.categorylist=e.data.bookLists})}},Y=X,Z=(s("56cf"),Object(u["a"])(Y,H,N,!1,null,"4da34bc6",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Category"},[s("div",{staticClass:"categoryCenter"},[s("div",{staticClass:"leftCategory"},t._l(this.tabs,function(e){return s("div",{key:e.gender,staticClass:"leftCategoryList",class:{istab:t.$route.query.gender===e.gender},on:{click:function(s){t.gender=e.gender,t.changeGender2(),t.changeGender1(e.defaultmajor)}}},[t._v("  \n                "+t._s(e.name)+"\n            ")])}),0),s("div",{staticClass:"rightCategory"},[s("div",{staticClass:"rightCategoryTitle"},["male"==this.gender?s("p",[t._v("男生")]):"female"==this.gender?s("p",[t._v("女生")]):s("p",[t._v("出版物")])]),s("div",{staticClass:"munu"},[s("div",{staticClass:"sort"},["male"==t.gender?s("div",{staticClass:"majorSort"},[s("ul",t._l(t.maleMajors,function(e){return s("li",{key:e.major,class:{istab:t.major===e.major},on:{click:function(s){t.major=e.major,t.changeMajor1(e.minor),t.changeMajor2()}}},[t._v(t._s(e.major))])}),0)]):t._e(),"female"==t.gender?s("div",{staticClass:"majorSort"},[s("ul",t._l(t.femaleMajors,function(e){return s("li",{key:e.major,class:{istab:t.major===e.major},on:{click:function(s){t.major=e.major,t.changeMajor1(e.minor),t.changeMajor2()}}},[t._v("\n                            "+t._s(e.major)+"       \n                            ")])}),0)]):t._e(),"press"==t.gender?s("div",{staticClass:"majorSort"},[s("ul",t._l(t.pressMajors,function(e){return s("li",{key:e.major,class:{istab:t.major===e.major},on:{click:function(s){t.major=e.major,t.changeMajor1(e.minor),t.changeMajor2()}}},[t._v(t._s(e.major))])}),0)]):t._e()]),0!==t.defaultMoreSort.length?s("div",{staticClass:"moreSort"},[s("span",[t._v("具体类型")]),s("ul",t._l(t.defaultMoreSort,function(e){return s("li",{key:e,class:{istab:t.minor===e},on:{click:function(s){t.minor=e,t.changeMoreSort1(e),t.changeMoreSort2()}}},[t._v("\n                            "+t._s(e)+"\n                        ")])}),0)]):t._e()]),s("div",[s("div",{staticClass:"bookList"},t._l(t.categorylist.books,function(e){return s("div",{key:e._id,staticClass:"book"},[s("div",{staticClass:"bookImg"},[s("img",{attrs:{src:"http://statics.zhuishushenqi.com"+e.cover}})]),s("div",{staticClass:"bookinfo"},[s("p",{staticClass:"bookname"},[t._v(t._s(e.title))]),s("p",{staticClass:"author"},[t._v(t._s(e.author))]),s("p",{staticClass:"brief"},[t._v(t._s(e.shortIntro))]),s("p",{staticClass:"popular"},[t._v(t._s(e.latelyFollower)+"人气  |  "+t._s(e.retentionRatio)+"%作者存留")])])])}),0)])])])])},st=[],ot={data:function(){return{gender:"male",major:"玄幻",type:"hot",minor:"全部",defaultMoreSort:["全部","东方玄幻","异界大陆","异界争霸","远古神话"],categorylist:"",tabs:[{gender:"male",name:"男生",defaultmajor:"玄幻"},{gender:"female",name:"女生",defaultmajor:"古代言情"},{gender:"press",name:"出版物",defaultmajor:"出版小说"}],maleMajors:[{major:"玄幻",minor:["全部","东方玄幻","异界大陆","异界争霸","远古神话"]},{major:"奇幻",minor:["全部",,"西方奇幻","领主贵族","亡灵异族","魔法校园"]},{major:"武侠",minor:["全部","传统武侠","新派武侠","国术武侠"]},{major:"仙侠",minor:["全部","古典仙侠","幻想修仙","现代修仙","洪荒封神"]},{major:"都市",minor:["全部","都市生活","爱情婚姻","异术超能","恩怨情仇","青春校园","现实百态"]},{major:"职场",minor:["全部","娱乐明星","官场沉浮","商场职场"]},{major:"历史",minor:["全部","穿越历史","架空历史","历史传记"]},{major:"军事",minor:["全部","军事战争","战争幻想","谍战特工","军旅生涯","抗战烽火"]},{major:"游戏",minor:["全部","游戏生涯","电子竞技","虚拟网游","游戏异界"]},{major:"竞技",minor:["全部","体育竞技","篮球运动","足球运动","棋牌桌游"]},{major:"科幻",minor:["全部","星际战争","时空穿梭","未来世界","古武机甲","超级科技","进化变异","末世危机"]},{major:"灵异",minor:["全部","推理侦探","恐怖惊悚","悬疑探险","灵异奇谈"]},{major:"同人",minor:["全部","武侠同人","影视同人","动漫同人","游戏同人","小说同人"]},{major:"轻小说",minor:[]}],femaleMajors:[{major:"古代言情",minor:["全部","穿越时空","古代历史","古典架空","宫闱宅斗","经商种田"]},{major:"现代言情",minor:["全部","豪门总裁","都市生活","婚恋情感","商战职场","异术超能"]},{major:"青春校园",minor:[]},{major:"纯爱",minor:["全部","古代纯爱","现代纯爱"]},{major:"玄幻奇幻",minor:["全部","玄幻异世","奇幻魔法"]},{major:"武侠仙侠",minor:["全部","武侠","仙侠"]},{major:"科幻",minor:[]},{major:"游戏竞技",minor:[]},{major:"悬疑灵异",minor:["全部","悬疑","灵异"]},{major:"同人",minor:["全部","小说同人","动漫同人","影视同人","游戏同人","耽美同人"]},{major:"女尊",minor:[]},{major:"莉莉",minor:[]}],pressMajors:[{major:"出版小说",minor:[]},{major:"传记名著",minor:[]},{major:"成功励志",minor:[]},{major:"人文社科",minor:[]},{major:"经管理财",minor:[]},{major:"生活时尚",minor:[]},{major:"育儿健康",minor:[]},{major:"青春言情",minor:[]},{major:"外文原版",minor:[]},{major:"政治军事",minor:[]}]}},watch:{$route:function(){var t=this;"全部"==this.minor?this.$axios.get("https://novel.juhe.im/category-info?gender="+this.gender+"&type="+this.type+"&major="+this.major).then(function(e){t.categorylist=e.data}):this.$axios.get("https://novel.juhe.im/category-info?gender="+this.gender+"&type="+this.type+"&major="+this.major+"&minor="+this.minor).then(function(e){t.categorylist=e.data})}},methods:{changeGender1:function(t){this.major=t,this.minor="全部","female"==this.gender?this.defaultMoreSort=["全部","穿越时空","古代历史","古典架空","宫闱宅斗","经商种田"]:"male"==this.gender?this.defaultMoreSort=["全部","东方玄幻","异界大陆","异界争霸","远古神话"]:this.defaultMoreSort=[]},changeGender2:function(){this.$router.push({path:"/category-info",query:{gender:this.gender}})},changeMajor1:function(t){this.minor="全部",this.defaultMoreSort=t},changeMajor2:function(){this.$router.push({path:"/category-info",query:{gender:this.gender,major:this.major}})},changeMoreSort1:function(t){this.minor=t},changeMoreSort2:function(){this.$router.push({path:"/category-info",query:{gender:this.gender,major:this.major,minor:this.minor}})}},mounted:function(){var t=this;this.$router.push({path:"/category-info",query:{gender:this.gender}}),this.$axios.get("https://novel.juhe.im/category-info?gender="+this.gender+"&type="+this.type+"&major="+this.major).then(function(e){t.categorylist=e.data})}},at=ot,nt=(s("9a0b"),Object(u["a"])(at,et,st,!1,null,"5b1910ee",null)),it=nt.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookListDetails"},[s("Breadcrumb",{attrs:{breadcrumbInfo:t.bookListInfo}}),s("div",{staticClass:"bookListMain"},[s("BookListTitle",{attrs:{bookListinfo:t.bookListInfo}}),s("div",{staticClass:"books"},t._l(t.bookListInfo.bookList.books,function(t){return s("div",{key:t._id},[s("router-link",{attrs:{to:{path:"/book",query:{id:t.book._id}}}},[s("Book",{attrs:{bookInfo:t}})],1)],1)}),0)],1)],1)},lt=[],ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"breadcrumb"},[s("p",[t._v("当前位置：")]),s("span",[s("router-link",{attrs:{to:{path:"/booklist"}}},[t._v("书单")])],1),s("span",{staticClass:"text"}),s("p",{staticClass:"booklistname"},[t._v(t._s(t.breadcrumbInfo.bookList.title))])])},ct=[],dt={props:["breadcrumbInfo"]},ft=dt,mt=(s("47d4"),Object(u["a"])(ft,ut,ct,!1,null,"2dfe5b68",null)),ht=mt.exports,pt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookListTitle"},[s("div",{staticClass:"introduce"},[s("div",{staticClass:"introduceInfo"},[s("div",{staticClass:"cover"},[s("img",{staticClass:"img1",attrs:{src:"http://statics.zhuishushenqi.com"+t.bookListinfo.bookList.books[0].book.cover,alt:""}}),s("img",{staticClass:"img2",attrs:{src:"http://statics.zhuishushenqi.com"+t.bookListinfo.bookList.books[1].book.cover,alt:""}}),s("img",{staticClass:"img3",attrs:{src:"http://statics.zhuishushenqi.com"+t.bookListinfo.bookList.books[2].book.cover,alt:""}})]),s("div",{staticClass:"bookListInfo"},[s("div",{staticClass:"title"},[t._v(t._s(t.bookListinfo.bookList.title))]),s("div",{staticClass:"booksNum"},[t._v("共"),s("span",[t._v(t._s(t.bookListinfo.bookList.books.length))]),t._v("本书  "),s("span",[t._v(t._s(t.bookListinfo.bookList.collectorCount))]),t._v("人收藏")]),s("div",{staticClass:"desc"},[t._v(t._s(t.bookListinfo.bookList.desc))])])]),s("div",{staticClass:"author"},[s("img",{staticClass:"avatar",attrs:{src:"http://statics.zhuishushenqi.com"+t.bookListinfo.bookList.author.avatar}}),s("div",{staticClass:"nickname"},[t._v("作者："+t._s(t.bookListinfo.bookList.author.nickname))])])])])},vt=[],bt={props:["bookListinfo"]},_t=bt,kt=(s("fd66"),Object(u["a"])(_t,pt,vt,!1,null,"4f1e5920",null)),gt=kt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"book"},[s("div",{staticClass:"bookInfo"},[s("img",{staticClass:"cover",attrs:{src:"http://statics.zhuishushenqi.com"+t.bookInfo.book.cover}}),s("div",{staticClass:"info"},[s("h4",[t._v(t._s(t.bookInfo.book.title))]),s("p",{staticClass:"zuozhe"},[t._v(t._s(t.bookInfo.book.author)+"-"+t._s(t.bookInfo.book.cat))]),s("p",{staticClass:"latelyFollower"},[t._v(t._s(t.bookInfo.book.latelyFollower)+"人气-"+t._s(t.bookInfo.book.retentionRatio)+"作者预存率")])])]),""!==t.bookInfo.comment?s("div",{staticClass:"comment"},[t._v("\n        "+t._s(t.bookInfo.comment)+"\n    ")]):t._e()])},yt=[],jt={props:["bookInfo"]},xt=jt,$t=(s("a808"),Object(u["a"])(xt,Ct,yt,!1,null,"46ba0517",null)),It=$t.exports,Lt={data:function(){return{bookListInfo:"",bookId:this.$route.query.id}},components:{Breadcrumb:ht,BookListTitle:gt,Book:It},watch:{$route:function(){this.bookId=this.$route.query.id}},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/booklists/"+this.bookId).then(function(e){t.bookListInfo=e.data})}},Mt=Lt,wt=(s("9087"),Object(u["a"])(Mt,rt,lt,!1,null,"5cad29b4",null)),St=wt.exports,Ot=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"book"},[s("div",{staticClass:"center"},[s("div",{staticClass:"left"},[s("BookTitle",{attrs:{bookinfo:t.bookInfo}}),t._m(0),s("div",{staticClass:"bookReviews"})],1),t._m(1)])])},Tt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookSection"},[s("div",{staticClass:"bookIntroduce"}),s("div",{staticClass:"booknew"}),s("div",{staticClass:"bookall"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[s("div",{staticClass:"newApp"}),s("div",{staticClass:"like"})])}],qt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bookTitle"},[s("div",{staticClass:"bookinfo"},[s("img",{staticClass:"bookimg",attrs:{src:"https://statics.zhuishushenqi.com"+t.bookinfo.cover}}),s("div",{staticClass:"info"},[s("h4",[t._v("书名")]),s("p",[t._v("tags")]),s("p",[t._v("作者")]),s("p",[t._v("更新日期")]),s("div",[t._v("开始阅读")]),s("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[s("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),s("el-breadcrumb-item",[t._v("活动管理")]),s("el-breadcrumb-item",[t._v("活动列表")]),s("el-breadcrumb-item",[t._v("活动详情")])],1)],1)]),s("div",{staticClass:"bookdata"})])},Et=[],Bt={data:function(){return{input:""}},props:["bookinfo"]},Pt=Bt,zt=(s("052d"),Object(u["a"])(Pt,qt,Et,!1,null,"e4d9c258",null)),Ft=zt.exports,Dt={components:{BookTitle:Ft},data:function(){return{bookId:this.$route.query.id,bookInfo:"",bookSection:"",like:""}},mounted:function(){var t=this;this.$axios.get("https://novel.juhe.im/book-info/"+this.bookId).then(function(e){t.bookInfo=e.data}),this.$axios.get("https://novel.juhe.im/recommend/"+this.bookId).then(function(e){t.bookSection=e.data})}},Gt=Dt,Rt=(s("5ec7"),Object(u["a"])(Gt,Ot,Tt,!1,null,"3c98f9a6",null)),At=Rt.exports;o["default"].use(f["a"]);var Ht=new f["a"]({mode:"history",routes:[{path:"/",redirect:"/shouye"},{path:"/shouye",name:"shouye",component:A},{path:"/category-info",name:"category-info",component:it},{path:"/booklist",name:"booklist",component:tt},{path:"/bookListDetails",name:"bookListDetails",component:St},{path:"/book",name:"book",component:At}],linkActiveClass:"h"}),Nt=s("2f62");o["default"].use(Nt["a"]);var Jt=new Nt["a"].Store({state:{},mutations:{},actions:{}}),Ut=s("bc3a"),Kt=s.n(Ut),Qt=(s("0fae"),s("5c96"));o["default"].use(Qt["Pagination"]),o["default"].use(Qt["Dialog"]),o["default"].use(Qt["Autocomplete"]),o["default"].use(Qt["Dropdown"]),o["default"].use(Qt["DropdownMenu"]),o["default"].use(Qt["DropdownItem"]),o["default"].use(Qt["Menu"]),o["default"].use(Qt["Submenu"]),o["default"].use(Qt["MenuItem"]),o["default"].use(Qt["MenuItemGroup"]),o["default"].use(Qt["Input"]),o["default"].use(Qt["InputNumber"]),o["default"].use(Qt["Radio"]),o["default"].use(Qt["RadioGroup"]),o["default"].use(Qt["RadioButton"]),o["default"].use(Qt["Checkbox"]),o["default"].use(Qt["CheckboxButton"]),o["default"].use(Qt["CheckboxGroup"]),o["default"].use(Qt["Switch"]),o["default"].use(Qt["Select"]),o["default"].use(Qt["Option"]),o["default"].use(Qt["OptionGroup"]),o["default"].use(Qt["Button"]),o["default"].use(Qt["ButtonGroup"]),o["default"].use(Qt["Table"]),o["default"].use(Qt["TableColumn"]),o["default"].use(Qt["DatePicker"]),o["default"].use(Qt["TimeSelect"]),o["default"].use(Qt["TimePicker"]),o["default"].use(Qt["Popover"]),o["default"].use(Qt["Tooltip"]),o["default"].use(Qt["Breadcrumb"]),o["default"].use(Qt["BreadcrumbItem"]),o["default"].use(Qt["Form"]),o["default"].use(Qt["FormItem"]),o["default"].use(Qt["Tabs"]),o["default"].use(Qt["TabPane"]),o["default"].use(Qt["Tag"]),o["default"].use(Qt["Tree"]),o["default"].use(Qt["Alert"]),o["default"].use(Qt["Slider"]),o["default"].use(Qt["Icon"]),o["default"].use(Qt["Row"]),o["default"].use(Qt["Col"]),o["default"].use(Qt["Upload"]),o["default"].use(Qt["Progress"]),o["default"].use(Qt["Badge"]),o["default"].use(Qt["Card"]),o["default"].use(Qt["Rate"]),o["default"].use(Qt["Steps"]),o["default"].use(Qt["Step"]),o["default"].use(Qt["Carousel"]),o["default"].use(Qt["CarouselItem"]),o["default"].use(Qt["Collapse"]),o["default"].use(Qt["CollapseItem"]),o["default"].use(Qt["Cascader"]),o["default"].use(Qt["ColorPicker"]),o["default"].use(Qt["Transfer"]),o["default"].use(Qt["Container"]),o["default"].use(Qt["Header"]),o["default"].use(Qt["Aside"]),o["default"].use(Qt["Main"]),o["default"].use(Qt["Footer"]),o["default"].use(Qt["Loading"].directive),o["default"].prototype.$loading=Qt["Loading"].service,o["default"].prototype.$msgbox=Qt["MessageBox"],o["default"].prototype.$alert=Qt["MessageBox"].alert,o["default"].prototype.$confirm=Qt["MessageBox"].confirm,o["default"].prototype.$prompt=Qt["MessageBox"].prompt,o["default"].prototype.$notify=Qt["Notification"],o["default"].prototype.$message=Qt["Message"],o["default"].config.productionTip=!1,o["default"].prototype.$axios=Kt.a,new o["default"]({router:Ht,store:Jt,render:function(t){return t(d)}}).$mount("#app")},"5a17":function(t,e,s){},"5ec7":function(t,e,s){"use strict";var o=s("7e01"),a=s.n(o);a.a},"619d":function(t,e,s){},"639a":function(t,e,s){"use strict";var o=s("e266"),a=s("2939"),n=(s("7330"),s("2877")),i=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,"70c7140b",null);e["default"]=i.exports},6421:function(t,e,s){},"64a9":function(t,e,s){},"68a6":function(t,e,s){},7330:function(t,e,s){"use strict";var o=s("893a"),a=s.n(o);a.a},"7e01":function(t,e,s){},8007:function(t,e,s){},"893a":function(t,e,s){},9087:function(t,e,s){"use strict";var o=s("caa6"),a=s.n(o);a.a},"9a0b":function(t,e,s){"use strict";var o=s("b88b"),a=s.n(o);a.a},a808:function(t,e,s){"use strict";var o=s("a96f"),a=s.n(o);a.a},a96f:function(t,e,s){},aa4b:function(t,e){},b6c0:function(t,e,s){"use strict";var o=s("27b0"),a=s.n(o);a.a},b88b:function(t,e,s){},ba4f:function(t,e,s){"use strict";var o=s("68a6"),a=s.n(o);a.a},caa6:function(t,e,s){},cf05:function(t,e,s){t.exports=s.p+"img/logo.38089ff6.png"},d1ec:function(t,e,s){},d6a6:function(t,e,s){"use strict";var o=s("619d"),a=s.n(o);a.a},d894:function(t,e,s){},e266:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"publicHead"},[t._m(0),t._m(1),s("div",{staticClass:"headerbutton"},[s("ul",{staticClass:"headerbuttoncenter"},[s("li",[s("router-link",{attrs:{to:"./shouye"}},[t._v("首页")])],1),s("li",[s("router-link",{attrs:{to:"./xingxua"}},[t._v("精选")])],1),s("li",[s("router-link",{attrs:{to:"./category-info"}},[t._v("分类")])],1),s("li",[s("router-link",{attrs:{to:"./booklist"}},[t._v("书单")])],1),s("li",[s("router-link",{attrs:{to:"./paihang"}},[t._v("排行榜")])],1),s("li",[s("router-link",{attrs:{to:"./kehuduan"}},[t._v("客户端")])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"headertop"},[s("div",{staticClass:"headertopcenter"},[s("div",{staticClass:"contact"},[s("div",[t._v("+关注")]),s("span",[t._v("|")]),s("div",[t._v("联系客服")])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"headercenter"},[o("div",{staticClass:"headercentercenter"},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:s("cf05"),alt:""}})]),o("div",{staticClass:"search"},[o("input",{attrs:{type:"text",placeholder:"请输入书名"}}),o("button")])])])}];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return a})},f1dd:function(t,e,s){"use strict";var o=s("079f"),a=s.n(o);a.a},fd66:function(t,e,s){"use strict";var o=s("8007"),a=s.n(o);a.a}});
//# sourceMappingURL=app.5af4dfaa.js.map