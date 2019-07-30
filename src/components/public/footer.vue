<template>
  <div class="footer">
    <div class="friendLink">
      <span>友情链接：</span>
      <a :href="item.link" v-for="(item,index) in friendsLink" :key="index">{{item.name}}</a>
    </div>
    <div class="aboutme">
      <a :href="item.link" v-for="(item,index) in about" :key="index">{{item.name}}</a>
    </div>
    <div class="info">
      <p>请所有追书神器用户务必遵守国家互联网信息管理办法规定，我们拒绝任何违法和不良信息，一经发现，即作删除！若需举报请至侵权申诉指引。 本站所收录作品、社区话题、评论及本站所做之广告均属个人行为，与本站立场无关。</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      friendsLink: [
        { name: "寒武纪年", link: "https://www.hanwujinian.com/" },
        { name: "掌趣", link: "http://lwcs.0708.com/t2/176/3668.html" },
        { name: "二层楼书院", link: "http://www.2cloo.com/" },
        { name: "暗夜文学", link: "http://www.anyew.cn/" },
        { name: "壹点零", link: "https://www.yidianling.com/" },
        { name: "白马时光", link: "https://yuedu.bmsgzw.cn/" },
        { name: "懒人听书", link: "http://www.lrts.me/" },
        { name: "爱奇艺文学", link: "http://wenxue.iqiyi.com/" },
        { name: "爱奇艺文学", link: "http://wenxue.iqiyi.com/" },
        { name: "九库文学", link: "https://www.9kus.com/" },
        { name: "悠空网", link: "https://www.yokong.com/" },
        { name: "酷匠网", link: "http://www.kujiang.com/" }
      ],
      about: [
        { name: "客户端", link: "http://www.zhuishushenqi.com/download" },
        {
          name: "关于我们",
          link: "http://www.zhuishushenqi.com/about?type=aboutUs"
        },
        {
          name: "联系我们",
          link: "http://www.zhuishushenqi.com/about?type=callUs"
        },
        {
          name: "加入我们",
          link: "http://www.zhuishushenqi.com/about?type=joinUs"
        },
        {
          name: "侵权申诉指引",
          link: "http://www.zhuishushenqi.com/about?type=tortComplaint"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 1000px;
  margin: 0 auto;
  font-size: 13px;
  color: #666;
  line-height: 25px;
  padding: 30px 0;
  .friendLink {
    width: 100%;
    margin-bottom: 20px;
    a {
      display: inline-block;
      padding-right: 20px;
    }
  }
  .aboutme {
    text-align: center;
    margin-bottom: 20px;
    a {
      padding: 0 10px;
    }
  }
  .info {
    clear:both;
    text-align: center;
  }
}

</style>
