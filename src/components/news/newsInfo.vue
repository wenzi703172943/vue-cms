<template>
  <div class="newsinfo-container">
    <h3 class="title">{{newinfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间:{{ newinfo.add_time | dateFormat}}</span>
      <span>点击:{{ newinfo.click }}次</span>
    </p>

    <hr>

    <div class="content" v-html="newinfo.content"></div>

    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

//导入评论组件
import comment from '../subcomponents/comment.vue'

export default {
  data() {
    return {
      id: this.$route.params.id,
      newinfo: {}
    };
  },
  created() {
    this.getNewsifo();
  },
  methods: {
    getNewsifo() {
      this.$http.get("api/getnew/" + this.id).then(result => {
        // console.log(result);
        if (result.body.status == 0) {
          this.newinfo = result.body.message[0];
        } else {
          Toast("获取新闻详情失败!");
        }
      });
    }
  },
  components: {
      'comment-box':comment
  },
};
</script>

<style lang="less">
.newsinfo-container {
  padding: 0 5px;
  .title {
    font-size: 16px;
    text-align: center;
    color: purple;
    margin: 15px 0;
  }
  .subtitle {
    font-size: 13px;
    color: skyblue;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>
