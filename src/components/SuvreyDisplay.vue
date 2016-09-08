<template>
  <div class="container">
    <h1>{{ suvery.title }}</h1>
    <hr>
      <div class="suvery-questions-fill"
           v-for=" question in suvery.questions">
           <div class="suvery-questions-title-fill">
            {{ "Q" +  (suvery.questions.indexOf(question) + 1) + ".&nbsp;" + question.title}}
          </div>
          <div class="suvery-questions-options-fill"
               v-if="question.type !== 'textarea'">
              <div class="option"
                   v-for="option in question.options">
                <label v-if="question.type === 'checkbox'">
                  <input type="checkbox" 
                         name="{{suvery.questions.indexOf(question)}}"
                         value="{{ option }}"
                         v-model="question.choose">
                  {{ option }}
                </label>
                <label v-if="question.type === 'radio'">
                  <input type="radio" 
                         name="{{suvery.questions.indexOf(question)}}"
                         value="{{ option }}" 
                         v-model="question.choose">
                  {{ option }}
                </label>
              </div>
          </div>
          <div class="suvery-questions-textarea-fill"
               v-if="question.type === 'textarea'">
            <textarea v-model="question.content"></textarea>
            <span>此题为{{ mandatory(question) }}</span>
          </div>
      </div>
    <hr>
    <div class="suvery-commit">
      <div class="button color-change"
           @click="submit(suvery)">提交问卷</div>
    </div>
    <modal v-if="getModalState" :type="modalType" :content="modalContent" @confirm="modalFunction">
    </modal>
  </div>
</template>

<script>
  import Modal from "./modal"
  import { getActiveSuvery, getModalState } from '../vuex/getters';
  import { submitSuvery, editSuvery, toggleModal } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        suvery:getActiveSuvery,
        getModalState
      },
      actions: {
        submitSuvery,
        editSuvery,
        toggleModal,
      }
    },
    components: {
      Modal,
    },
    data() {
      return {
        modalType: "",
        modalContent: "",
        modalFunction: "",
      }
    },
    methods: {
      mandatory(question) {
        if (question.mandatory) {
          return "必答";
        }else{
          return "选答";
        }
      },
      resultCheck() {
        var result = false;
        for (let question of this.suvery.questions) {
          if (question.type === "radio" && question.choose === "") {
            result = true;
            break;
          }else if(question.type === "checkbox" && question.choose.length === 0) {
            result = true;
            break;
          }else if (question.type === "textarea" && question.mandatory && question.content === "") {
            result = true;
            break;
          }
        }
        return result;
      },
      submit(suvery) {
        console.log(this.resultCheck())
        if (this.resultCheck()) {
          this.modalType = "alert";
          this.modalContent = "请完整填写问卷。";
          this.modalFunction = function () {
            return
          }
        }else{
          this.modalType = "modal";
          this.modalContent = "确认要提交问卷吗？";
          this.modalFunction = function () {
            this.submitSuvery();
            this.editSuvery(suvery)
            this.$route.router.go('/Home');
          }
        }
        this.toggleModal();
      },
    }
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
  
  .suvery-questions-title-fill {
    font-weight: bold;
  }
  
  .suvery-questions-fill {
    width: 100%;
    padding: 1em 1.5em; 
    box-sizing: border-box;
    border: 1px solid #999;
    margin: 1em auto;
  }

  label {
    cursor: pointer;
    border-radius: 3px;
    margin: 0.1em auto;
    padding: 0.4em;
    display: inline-block;

    &:hover {
      background-color: #c0e3ea;
      font-weight: bold;
    }
  }

  textarea {
    width: 100%;
    height: 10em;
    font-size: 16px;
    outline: none;
    resize: none;
    margin: 0.3em auto;
    background-color: transparent;
  }

  .suvery-questions-textarea-fill {
    span {
      font-size: 14px;
      font-weight: bold;
      display: block;
    }
  }
</style>