<template>
<div id="toolbar">
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
</div>
</template>

<script>
  
</script>

<style>

@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_1472046507_329666.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1472046507_329666.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'), /* chrome,firefox */
    url('//at.alicdn.com/t/font_1472046507_329666.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1472046507_329666.svg#iconfont') format('svg'); /* iOS 4.1- */
  src: url('//at.alicdn.com/t/font_1472046507_329666.eot')\0; /* ie8 fix */

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
.icon-checkboxoutlineblank:before { content: "\e606"; }
.icon-radiobuttonunchecked:before { content: "\e607"; }
.icon-clear:before { content: "\e608"; }

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

</style>
