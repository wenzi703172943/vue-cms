<template>
  <div class="cmt-container">
    <h3>发表评论</h3>

    <hr>

    <textarea placeholder="请输入要BB的内容(最多120字)" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in comments" :key="item.id">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp; 用户:{{ item.user_name }} &nbsp;&nbsp;发表时间: {{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined'?'此用户很懒':item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      pageIndex: 1,
      comments: []
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http.get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          // console.log(result.body);
          if (result.body.status == 0) {
            // this.comments = result.body.message;
            this.comments = this.comments.concat(result.body.message)
          } else {
            Toast("加载评论失败");
          }
        });
    },
    getMore() {
      this.pageIndex++, 
      this.getComments();
    }
  },
  props: ["id"]
};
</script>

<style lang="less" scoped>
.cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 8px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
  .mint-button--danger.is-plain {
    margin-bottom: 10px;
  }
}
</style>
