<template>
<div>
    <toolbar></toolbar>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
    </div>
</div>
</template>

<script>
  import Toolbar from './components/Toolbar'
  import store from './vuex/store';
  import { initStore } from './vuex/actions';

  export default {
    store,
    vuex: {
      actions: {
        initStore,
      }
    },
    components: {
      Toolbar,
    },
    ready() {
      this.initStore();
    }
  };
</script>

<style lang="scss" scoped>
  .container { 
    width: 80%;
    margin: auto;
    margin-top: 120px;
    padding: 0 30px;
    background-color: #FFF;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #888;

    div {
      padding-top: 10px;
    }
  }

  label {
    cursor: pointer;
  }

</style>
