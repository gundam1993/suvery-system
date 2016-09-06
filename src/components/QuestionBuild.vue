<template>
  <div id="question-build">
      <div class="suvery-questions-build"
           v-for="question in questions">
          <div class="suvery-questions-title-build">
            {{ "Q" +  (questions.indexOf(question) + 1)}}
            <input type="text" class="user-input" v-model="question.title">
          </div>
          <div class="suvery-questions-options-build"
               v-if="question.type !== 'textarea'">
              <div class="option"
                   v-for="option in question.options"
                   track-by="$index">
                <i class="iconfont icon-checkboxoutlineblank"
                   v-if="question.type === 'checkbox'"></i>
                <i class="iconfont icon-radiobuttonunchecked"
                   v-if="question.type === 'radio'"></i>
                <input type="text" class="user-input" v-model="option">
                <i class="iconfont icon-clear"
                   @click="this.deleteOption(question, option)"></i>
              </div>
          </div>
          <div class="suvery-questions-textarea-build"
               v-if="question.type === 'textarea'">
            <textarea></textarea>
            <label>
              <input type="checkbox" 
                     name="survey-choose"
                     checked="{{question.mandatory}}"
                     @click="this.toggleMandatory(question)">
              &nbsp;此题是否必填
            </label>
          </div>
          <div class="add-option"
               v-if="question.type !== 'textarea'"
               @click="this.addOption(question)">
            <i class="iconfont icon-jia"></i>
          </div>
          <div class="question-control-build">
            <span v-if="questions.indexOf(question) > 0"
                  @click="this.questionUp(question)">上移</span>
            <span v-if="questions.length > 1 && questions.indexOf(question) < (questions.length - 1)"
                  @click="this.questionDown(question)">下移</span>
            <span @click="this.copyQuestion(question)">复用</span>
            <span @click="this.deleteQuestion(question)">删除</span>
          </div>
      </div>
    </div>
</template>

<script>
  import { deleteQuestion, copyQuestion, questionUp, questionDown, deleteOption, addOption, toggleMandatory } from "../vuex/actions"

  export default {
    vuex: {
      actions: {
        deleteQuestion,
        copyQuestion,
        questionUp,
        questionDown,
        deleteOption,
        addOption,
        toggleMandatory,
      }
    },
    props: ["questions"],
  }
</script>

<style lang="scss" scoped>
  #question-build {
    width: 95%;
    margin: 1.2em auto;
    font-size: 20px;

    .suvery-questions-build {
      width: 100%;
      padding: 1em 1.5em; 
      box-sizing: border-box;

      &:hover {
        background-color: #c0e3ea;
        .suvery-questions-title-build {
          font-weight: bold;
          input[type="text"] {
            font-weight: bold;
          }
        }
        .question-control-build {
          color: #000;
        }
      } 

      .suvery-questions-options-build {
        margin-left: 2em;

        .option {
          .icon-clear {
            color: transparent;
          }

          &:hover {
            .icon-clear {
              color: #CB1B45;
              cursor: pointer;
            }
          }
        }
      }

      input[type="text"] {
        display: inline-block;
        height: 1.5em;
        width: 84%;
        line-height: 1.5em;
        font-size: 1em;
        background-color: transparent;
      }

      .add-option {
        width: 100%;
        height: 1.5em;
        font-size: .8em;
        line-height: 1.2em;
        box-sizing: border-box;
        color: transparent;
        text-align: center;
        cursor: pointer;

        &:hover {
          color: #000;
          border: 1px dashed #000;
        }
      }
      
      .suvery-questions-textarea-build {
        textarea {
          width: 100%;
          height: 10em;
          outline: none;
          resize: none;
          margin-top: 1em;
          background-color: transparent;
        }
      }

      .question-control-build {
        text-align: right;
        color: #FFF;
        span {
          display: inline-block;
          margin: 0.2em 0.5em;
          cursor: pointer;
        }
      }
    }
  }

  .user-input
  {
    border: none;
    display: block;
    outline: none;
  }

  label {
    cursor: pointer;
  }
</style>