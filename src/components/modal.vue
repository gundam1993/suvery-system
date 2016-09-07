<template>
    <div class="modal-mask"  transition="modal">
      <div class="modal-body">
        <p>{{ content }}</p>
          <div class="modal-btns"
               v-show="this.type === 'modal'">
            <button class="btn btn-yes" @click="confirm()">确定</button>
            <button class="btn btn-no" @click="this.toggleModal()">取消</button>
          </div>
          <div class="alert-btm"
               v-show="this.type === 'alert'">
            <button class="btn btn-yes" @click="this.toggleModal()">确定</button>
          </div>
      </div>
    </div>
</template>

<script>
  import { toggleModal, } from '../vuex/actions'

  export default {
    vuex: {
      actions:{
        toggleModal,
      },
    },
    props: {
      type: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      onConfirm: {
        type: Function
      },
    },
    methods: {
      confirm() {
        this.$emit('confirm');
        var getType = {};
        if (this.isFunction(this.onConfirm)) {
          this.onConfirm();
        }
        this.toggleModal();
      },
      isFunction(functionToCheck) {
          var getType = {};
          return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      },
    }
  }
</script>

<style lang="scss" scoped>
  .modal-mask
  {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(55, 55, 55, 0.7);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-body
    {
      font-size: 20px;
      min-width: 20em;
      box-sizing: border-box;
      padding: 1.5em 2em;
      background-color: #FFF;
      border-radius: 3px;
      text-align: center;

      p {
        display: block;
        margin: 1.5em auto;
      }

      .alert-btm
      {
        text-align: center;
      }
    }
  }

  .btn
  {
    height: 1.5em;
    width: 4em;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    color: #333;
    background-color: #FFF;
    transition: color,background-color 0.3s ease-in-out;
    cursor: pointer;
  }

  .btn-yes:hover
  { 
    transition: color,background-color 0.3s ease-in-out;
    color: #FFF;
    background-color: #81C7D4;
  }

  .btn-no:hover
  {
    transition: color,background-color 0.3s ease-in-out;
    color: #FFF;
    background-color: #E83015;
  }

  .modal-enter, .modal-leave 
  {
    opacity: 0;
  }
  .modal-transition
  {
    transition: all .3s ease;
  }

  .modal-enter .modal-confirm, .modal-leave .modal-confirm 
  {
    transform: scale(1);
  }
  .modal-transition
  {
    transition: all .3s ease;
  }
</style>

