<template>
  <div class="message pt100 wrap pd012rem">
      <div class="message-wrap">
        <textarea name="" id="" class="message-input active"></textarea>
        <p class="say_something_to_world">说点什么吧~</p>
        <p class="limit_words">{{ limit_words }}</p>
      </div>
      <div class="name-n-email">
        <div class="name-n-email-wrap">
          <div class="name-n-email name-n-email-box">
            <input type="text" class="active" />
            <p class="name-box">昵称</p>
          </div>
          <div class="name-n-box name-n-email-box">
            <input type="text" class="active" />
            <p class="email-box">邮箱</p>
          </div>
        </div>
        <div class="name-n-email-btn">
          <button>提交</button>
        </div>
      </div>
      <div class="amazing-message">
        <p class="message-replies">12 replies</p>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  components: {
    
  },
  setup() {
    const limit_words = ref('100字以內~');

    return {
      limit_words
    }
  }
}
</script>

<style lang="less" scoped>
.message {
  .message-wrap {
    position: relative;
    .message-input {
      width: 100%;
      height: 13rem;
      border: 1px solid #d9d9d9;
      display: block;
      padding: 1.2rem;
      &:focus.active ~ .say_something_to_world{
        top: -1.6rem;
        font-size: 1rem;
        color: rgb(196, 185, 185);
        background-color: #fff;
      }
    }
    .say_something_to_world {
      transition: all .3s;
      color: rgb(180, 170, 170);
      font-size: 1.3rem;
    }
    .limit_words {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      font-size: 1rem;
      color: #d9d9d9;
    }
    .say_something_to_world {
      position: absolute;
      top: 0;
      left: 0;
      padding: 1rem;
    }
  }
  .name-n-email {
    display: flex;
    justify-content: space-between;
    margin-top: 1.2rem;
    .name-box, .email-box {
      color: rgb(180, 170, 170);
      font-size: 1.3rem;
    }
    .name-n-email-box {
      position: relative;
      .name-box, .email-box {
          position: absolute;
          top: 0;
          left: 0;
          padding: 1rem;
          transition: all .3s;
      }
      input {
        padding: 1rem;
        border: 1px solid #d9d9d9;
        margin-bottom: 1.2rem;
        &:focus.active ~ .name-box, &:focus.active ~ .email-box {
          top: -0.7rem;
          font-size: 1rem;
          color: rgb(196, 185, 185);
          background-color: #fff;
          padding: .2rem;
        }
        &:first-child {
          margin-right: 1.2rem;
        }
      }
    }
    .name-n-email-btn {
      button {
        padding: 0.8rem 1.2rem;
        background-color: orange;
        min-width: 51px;
      }
    }
  }
  .amazing-message {
    margin-top: 2rem;
    .message-replies {
      border-bottom: 1px solid #d9d9d9;
      padding-bottom: 1.2rem;
    }
  }
}
</style>