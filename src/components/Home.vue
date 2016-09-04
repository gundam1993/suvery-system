<template>
<div class="container">
  <table>
    <thead>
      <tr>
        <td></td>
        <td>标题</td>
        <td>时间</td>
        <td>状态</td>
        <td>操作
          <div 
            id="new-Survey"
            class="button color-change"
            @click="addNew()"
          >
            <i class="iconfont icon-jia"></i>
          新建问卷</div>
        </td>
      </tr>
    </thead>
    <tbody class="surveys">
      <tr v-if="!getSuverys.length">
        <td id="noSurvey" colspan="5">
          <div class="button color-change"
               @click="addNew()"
          >
            <i class="iconfont icon-jia"></i>
          新建问卷</div>
        </td>
      </tr>
      <tr v-for="suvery in getSuverys">
        <td>
          <input class="homepage-checkbox" type="checkbox" name="survey-choose">
        </td>
        <td>
          {{ suvery.title }}
        </td>
        <td>
          {{  formatDate(suvery) }}
        </td>
        <td :class="{suveryPublishing: stateCheck(suvery) == '发布中'}">
          {{ stateCheck(suvery) }}
        </td>
        <td>
          <div class="button color-change"
               v-show="suvery.state !== 'publish'" 
               @click="edit(suvery)"
               >编辑</div>
          <div class="button color-change" 
               v-show="suvery.state !== 'publish' || new Date(suvery.endDate) < new Date()" 
               @click="deleteSelected(suvery)"
               >删除</div>
          <div class="button color-change"
               v-show="suvery.state !== 'unpublish' && new Date(suvery.endDate) > new Date()"
               @click="fill(suvery)"
               >填写问卷</div>
          <div class="button color-change"
               v-show="suvery.state !== 'unpublish'"
               @click="showResult(suvery)"
               >查看数据</div>
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">
          <label><input class="homepage-checkbox" type="checkbox" name="survey-choose">&nbsp;全选</label>
          <div id="delete-Survey" class="button color-change">删除</div>
        </td>
      </tr>
      <tr>
        <td colspan="5"></td>
      </tr>
    </tfoot>
  </table>
  </div>
</template>

<script>
  import { getSuverys } from '../vuex/getters';
  import { newSuvery, deleteSuvery, setActiveSuvery } from '../vuex/actions';

  export default {
    vuex: {
      getters: {
        getSuverys,
      },
      actions: {
        newSuvery,
        deleteSuvery,
        setActiveSuvery,
      }
    },
    methods: {
      addNew() {
        this.newSuvery();
        this.$route.router.go('/Edit');
      },
      deleteSelected(suvery) {
        this.setActiveSuvery(suvery);
        this.deleteSuvery();
      },
      edit(suvery) {
        this.setActiveSuvery(suvery);
        this.$route.router.go('/Edit/'+ suvery.id);
      },
      fill(suvery) {
        this.setActiveSuvery(suvery);
        this.$route.router.go('/Fill/'+ suvery.id);
      },
      showResult(suvery) {
        this.setActiveSuvery(suvery);
        this.$route.router.go('/Result/'+ suvery.id);
      },
      stateCheck(suvery) {
        if (suvery.state === 'unpublish') {
          return "未发布";
        }else if (new Date(suvery.endDate) > new Date()) {
          return "发布中";
        }else {
          return "已结束";
        }
      },
      formatDate(suvery) {
        var date;
        suvery.endDate ? date = new Date(suvery.endDate) :  date = new Date(suvery.buildDate)
        return (date.getFullYear()+ "-" + (date.getMonth() + 1) + "-" + date.getDate())
      }
    }
  };
</script>

<style>

#main-block
{ 
  width: 80%;
  margin: auto;
  margin-top: 120px;
  padding: 0 30px;
  background-color: #FFF;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 2px 2px 5px #888;
}
#loading
{
  text-align: center;
  padding: 10px;  
}

#loading:hover
{
  background-color: #FFF;
}

#loading>div
{
  animation-iteration-count:infinite;
  animation-name: loading;
  animation-duration:2s;
  animation-timing-function:ease-in-out;
  margin: 50px;
}

@keyframes loading {
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
} 

table
{
  border-collapse: collapse;
  width: 100%;
}

thead
{
  border-bottom: 1px solid #ccc;
  text-align: center;
  font-weight: bolder;
  font-size: 1.1em;
}

tbody tr,tfoot tr
{
  margin: 0;
  width: 100%;
  background-color: #FFF;
}

tbody tr
{
  border-bottom: 1px solid #bbb;
  border-top: 1px solid #bbb;
  text-align: center; 
}

tbody tr:hover
{
  background-color: #bbb;
}

td
{
  margin: 0;
  height: 60px;
  line-height: 26px;
}

tr td:nth-child(1)
{
  width: 5%;
  padding-left: 20px;
}

tr td:nth-child(2)
{
  width: 40%;
}

tr td:nth-child(3)
{
  width: 15%;
}

tr td:nth-child(4)
{
  width: 10%;
}

tr td:nth-child(5)
{
  width: 30%;
}

tbody tr td:nth-child(5) div
{
  display: inline-block;
  margin: 0 5px;
  background-color: #FFF;
  color: #000;
  border: 1px solid #ccc;
}

tbody tr td:nth-child(5) div:hover
{
  color: #FFF;
  border: 1px solid #0B346E;
}

#new-Survey
{
  float: right;
  border: 1px solid #ccc;
  font-size: 1em;
}

#delete-Survey
{
  margin-left: 10px;
  display: inline-block;
}

#noSurvey
{
  text-align: center;
}

#noSurvey div
{
  width: 178px;
  height: 65px;
  text-align: center;
  line-height: 65px;
  font-size: 30px;
  margin: 20px auto;
}

.homepage-checkbox
{
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  margin: -5px 0 0 0;
  cursor: pointer;
  background: #fff;
  border: 1px solid #666;
  border-radius: 1em;
  box-sizing: border-box;
  position: relative;
  outline: none;
}

.homepage-checkbox:checked 
{
  background: #81C7D4;
  border: 1px solid transparent;
}

.homepage-checkbox:checked::after 
{
  content: '';
  display: block;
  position: relative;
  top: 3px;
  left: 3px;
  width: 7px;
  height: 7px;
  background: #fff;
  border-radius: 1em;
}

input
{
  outline: none;
}

.button
{ 
  background-color: #81C7D4;
  color: #FFF;
  width: 100px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: normal;
  font-size: 1em;
}

.button:hover
{
  background-color: #0B346E;
}

.suveryPublishing 
{
  color: green;
}

label
{
  cursor: pointer;
}
</style>