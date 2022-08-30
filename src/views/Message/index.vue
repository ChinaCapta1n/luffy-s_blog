<template>
  <div class="message pt100 wrap pd012rem">
      <div class="message-wrap">
        <textarea name="" id="" class="message-input"></textarea>
      </div>
      <div class="name-n-email">
        <div class="name-n-email-box">
          <input type="text" placeholder="昵称" />
          <input type="text" placeholder="邮箱" />
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
export default {
  components: {
    
  }
}
</script>

<style lang="less" scoped>
.message {
  .message-wrap {
    .message-input {
      width: 100%;
      height: 13rem;
      border: 1px solid #d9d9d9;
      display: block;
      padding: 1.2rem;
    }
  }
  .name-n-email {
    display: flex;
    justify-content: space-between;
    margin-top: 1.2rem;
    .name-n-email-box {
      input {
        padding: 1rem;
        border: 1px solid #d9d9d9;
        margin-bottom: 1.2rem;
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