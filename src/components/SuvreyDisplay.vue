<template>
  <div class="container">
    <h1>{{ suvery.title }}</h1>
    <hr>
      <div class="suvery-questions-fill"
           v-for=" question in suvery.questions">
      </div>
    <hr>
    <div class="suvery-commit">
      <div class="button color-change">提交问卷</div>
    </div>
  </div>
</template>

<script>
  import { getActiveSuvery } from '../vuex/getters'

  export default {
      vuex: {
        getters: {
          suvery:getActiveSuvery,
        },
      },
  }
</script>

<style lang="scss" scoped>
  h1 {
    text-align: center;
  }
  .suvery-commit {
    div {
      margin: 2em auto;
    }
  }
</style>