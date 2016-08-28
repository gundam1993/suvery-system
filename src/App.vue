<template>
<div>
    <toolbar></toolbar>

        <router-view transition="page-change"
                     transition-mode="out-in"></router-view>

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
    margin: 120px auto 40px auto;
    padding: 10px 30px;
    background-color: #FFF;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #888;
  }

  .page-change-transition {
    transition: all .3s ease-in-out;
  }
  
  .page-change-enter {
    transform: translate(0,100%);
    opacity: 0;
  }
  .page-change-leave {
    transform: translate(-100%,0);
    opacity: 0;
  } 
</style>
