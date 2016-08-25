<template>
  <div id="question-builder">
      <div class="suvery-questions"
           v-for="question in suverys.questions">
          <div class="suvery-questions-title">
            {{ "Q" +  (suverys.questions.indexOf(question) + 1)}}
            <input type="text" class="user-input" :value="question.title">
          </div>
          <div class="suvery-questions-options"
               v-if="question.type !== 'textarea'">
              <div class="option"
                   v-for="option in question.options">
                <i class="iconfont icon-checkboxoutlineblank"
                   v-if="question.type === 'checkbox'"></i>
                <i class="iconfont icon-radiobuttonunchecked"
                   v-if="question.type === 'radio'"></i>
                <input type="text" class="user-input" :value="option">
                <i class="iconfont icon-clear"></i>
              </div>
          </div>
          <div class="suvery-questions-textarea"
               v-if="question.type === 'textarea'">
            <textarea></textarea>
            <label>
              <input type="checkbox" 
                     name="survey-choose"
                     checked="{{question.mandatory}}">
              &nbsp;此题是否必填
            </label>
          </div>
          <div class="add-option"
               v-if="question.type !== 'textarea'">
            <i class="iconfont icon-jia"></i>
          </div>
          <div class="question-control">
            <span v-if="suverys.questions.indexOf(question) > 0">上移</span>
            <span v-if="suverys.questions.length > 1 && suverys.questions.indexOf(question) < (suverys.questions.length - 1)">下移</span>
            <span>复用</span>
            <span>删除</span>
          </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: ["suverys"],
  }
</script>

<style lang="scss" scoped>
  #question-builder {
    width: 95%;
    margin: 1.2em auto;
    font-size: 20px;

    .suvery-questions {
      width: 100%;
      padding: 1em 1.5em; 
      box-sizing: border-box;

      &:hover {
        background-color: #c0e3ea;
        .suvery-questions-title {
          font-weight: bold;
          input[type="text"] {
            font-weight: bold;
          }
        }
        .question-control {
          color: #000;
        }
      } 

      .suvery-questions-options {
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
        width: 95%;
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
      
      .suvery-questions-textarea {
        textarea {
          width: 100%;
          height: 10em;
          outline: none;
          resize: none;
          margin-top: 1em;
          background-color: transparent;
        }
      }

      .question-control {
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