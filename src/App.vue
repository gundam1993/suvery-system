<template>
<div>
   <nav>
        <a href="">
            <i class="iconfont icon-wenhao"></i>
            <span>问卷管理</span>
        </a>
        <div>
            <ul>
                <li
                  id="my-Survey"
                  class="color-change"
                  v-link="'/Home'"
                >我的问卷</li>
            </ul>
        </div>
    </nav>
    <div class="container">
      <div>
        <router-view></router-view>
      </div>
    </div>
</div>
</template>

<script>
  import store from './vuex/store';
  import { initStore } from './vuex/actions';

  export default {
    store,
    vuex: {
      actions: {
        initStore,
      }
    },
    ready() {
      this.initStore();
    }
  };
</script>

<style>

@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1468907399_6498046.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1468907399_6498046.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), /* chrome,firefox */
    url('//at.alicdn.com/t/font_1468907399_6498046.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1468907399_6498046.svg#iconfont') format('svg'); /* iOS 4.1- */
  src: url('//at.alicdn.com/t/font_1468907399_6498046.eot')\0; /* ie8 fix */

}

.iconfont {
  font-family:"iconfont" !important;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-jia:before { content: "\e602"; }
.icon-wenhao:before 
{ 
  font-size:40px;
  content: "\e600"; 
}
.icon-loading-copy:before { content: "\e601"; }
.icon-duoxuan:before { content: "\e605"; }
.icon-wenbenkuang:before { content: "\e603"; }
.icon-danxuan:before { content: "\e604"; }

html,body
{
  width: 100%;
  min-width: 720px;
  margin: 0;
  background-color: #ddd;
  font-size: 16px;
  font-family: \5FAE\8F6F\96C5\9ED1;
}

nav
{
  width: 100%;
  min-width: 720px;
  height: 50px;
  background-color: #000;
  color: #FFF;
  position: fixed;
  top: 0;
  right: 0;
}

nav a
{
  display: inline-block;
  color: #FFF;
  text-decoration: none;
  height: 100%;
  line-height: 50px;
  float: left;
  margin-left: 10%;
}

nav a i
{
  margin: 0;
  display: block;
  line-height: 50px;
  float: left;
}

nav a span
{
  font-size: 28px;
  margin: 0 10px;
  display: block;
  font-weight: lighter;
  line-height: 50px;
  float: left;
}

nav div
{
  float: left;
  height: 100%;
  cursor: pointer;
}
nav div ul
{
  display: block;
  margin: 0;
  list-style: none;
  height: 100%;
}
nav div ul li
{
  display: block;
  height: 100%;
  line-height: 50px;
  padding: 0 15px;
}

nav div ul li:hover
{
  background-color: #555;
}

.color-change
{
  transition: color,background-color 0.2s ease-in-out;
}

.container
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

label
{
  cursor: pointer;
}



.container>div
{
  padding-top: 10px;
}
</style>
