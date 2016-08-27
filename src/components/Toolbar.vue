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
  src: url('//at.alicdn.com/t/font_1472309844_7554471.eot'); /* IE9*/
  src: url('//at.alicdn.com/t/font_1472309844_7554471.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAABIAABAAAAAAHAwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAABbAAAABoAAAAcdAxYeEdERUYAAAGIAAAAHQAAACAAOwAET1MvMgAAAagAAABNAAAAYFfDXJtjbWFwAAAB+AAAAE4AAAFKy6Uhr2N2dCAAAAJIAAAAGAAAACQNN/5MZnBnbQAAAmAAAAT8AAAJljD3npVnYXNwAAAHXAAAAAgAAAAIAAAAEGdseWYAAAdkAAAHtQAACyhFyzHVaGVhZAAADxwAAAAvAAAANgsB+TpoaGVhAAAPTAAAABwAAAAkB8cDMmhtdHgAAA9oAAAAJgAAACYMlgJebG9jYQAAD5AAAAAeAAAAHhigFN5tYXhwAAAPsAAAACAAAAAgAZYCNW5hbWUAAA/QAAABRQAAAkA5g+0hcG9zdAAAERgAAABOAAAAjjc8BABwcmVwAAARaAAAAJUAAACVpbm+ZnicY2BgYGQAgjO2i86D6MvPo67AaABUIQhMAAB4nGNgZGBg4ANiCQYQYGJgBEJeIGYB8xgABNkAQAAAAHicY2Bh/sv4hYGVgYFpJtMZBgaGfgjN+JrBmJETKMrAxswAA4wCDAgQkOaawnCAoeIZJ3PD/waGGOZMhisgNSA5ZgmwEgUGRgDoxA4GAAAAeJxjYGBgZoBgGQZGBhBwAfIYwXwWBg0gzQakGRmYGCqecf7/D+RXPGP4//9/txQLVD0QMLIxwDmMTECCiQEVMDLQDDDTzmiSAAAlngk8AAB4nGNgQANGDEbMEv8fMmf+14HRAEDcB4l4nJ1VaXfTRhSVvGRP2pLEUETbMROnNBqZsAUDLgQpsgvp4kBoJegiJzFd+AN87Gf9mqfQntOP/LTeO14SWnpO2xxL776ZO2/TexNxjKjseSCuUUdKXveksv5UKvGzpK7rXp4o6fWSumynnpIWUStNlczF/SO5RHUuVrJJsEnG616inqs874PSSzKsKEsi2iLayrwsTVNPHD9NtTi9ZJCmgZSMgp1Ko48QqlEvkaoOZUqHXr2eipsFUjYa8aijonoQKu4czzmljTpgpHKVw1yxWW3ke0nW8/qP0kSn2Nt+nGDDY/QjV4FUjMzA9jQeh08k09FeIjORf+y4TpSFUhtcAK9qsMegSvGhuPFBthPI1HjN8XVRqTQyFee6z7LZLB2PlRDlwd/YoZQbur+Ds9OmqFZjcfvAMwY5KZQoekgWgA5Tmaf2CNo8tEBmjfqj4hzwdQgvshBlKs+ULOhQBzJndveTYtrdSddkcaBfBjJvdveS3cfDRa+O9WW7vmAKZzF6khSLixHchzLrp0y71AhHGRdzwMU8XuLWtELIyAKMSiPMUVv4ntmoa5wdY290Ho/VU2TSRfzdTH49OKlY4TjLekfcSJy7x67rwlUgiwinGu8njizqUGWw+vvSkussOGGYZ8VCxZcXvncR+S8xbj+Qd0zhUr5rihLle6YoU54xRYVyGYWlXDHFFOWqKaYpa6aYoTxrilnKc0am/X/p+334Pocz5+Gb0oNvygvwTfkBfFN+CN+UH8E3pYJvyjp8U16Eb0pt4G0pUxGqmLF0+O0lWrWhajkzuMA+D2TNiPZFbwTSMEp11Ukpdb+lVf4k+euix2Prk5K6NWlsiLu6abP4+HTGb25dMuqGnatPjCPloT109dg0oVP7zeHfzl3dKi65q4hqw6g2IpgEgDbotwLxTfNsOxDzll18/EMwAtTPqTVUU3Xt1JUaD/K8q7sYnuTA44hjoI3rrq7ASxNTVkPz4WcpMhX7g7yplWrnsHX5ZFs1hzakwtsi9pVknKbtveRVSZWV96q0Xj6fhiF6ehbXhLZs3cmkEqFRM87x8K4qRdmRlnLUP0Lnl6K+B5xxdkHrwzHuRN1BtTXsdPj5ZiNrCyaGprS9E6BkLF0VY1HlWZxjdA1rHW/cEp6upycW8Sk2mY/CSnV9lI9uI80rdllm0ahKdXSX9lnsqzb9MjtoWB1nP2mqNu7qYVuNKlI9Vb4GtAd2Vt34UA8rPuqgUVU12+jayGM0LmvGfwzIYlz560arJtPv4JZqp81izV1Bc9+YLPdOL2+9yX4r56aRpv9Woy0jl/0cjvltEeDfOSh2U9ZAvTVpiHEB2QsYLtVE5w7N3cYg4jr7H53T/W/NwiA5q22N2Tz14erpKJI7THmcZZtZ1vUozVG0k8Q+RWKrw4nBTY3hWG7KBgbk7j+s38M94K4siw+8bSSAuM/axKie6uDuHlcjNOwruQ8YmWPHuQ2wA+ASxObYtSsdALvSJecOwGfkEDwgh+AhOQS75NwE+Jwcgi/IIfiSHIKvyLkF0COHYI8cgkfkEDwmpw2wTw7BE3IIviaH4BtyWgAJOQQpOQRPySF4ZmRzUuZvqch1oO8sugH0ve0aKFtQfjByZcLOqFh23yKyDywi9dDI1Qn1iIqlDiwi9blFpP5o5NqE+hMVS/3ZIlJ/sYjUF8aXmYGU13oveUcHfwIrvqx+AAEAAf//AA94nK1WXWwcVxU+59752d/Z+dnZmd31/s16Z23v+m+96xW2Y29ju8TZmGTjxMm6qQkUTJKitpBAXkByi0AmKhKKoAgVVAchKCFCQaHqSyVQFHhIK4FAqkL7gCJ4KEKKeKsUxWvObOzUqgQqiJ3ZuXPPPfe7557znTsHGDgAWGFXgYMM/Q0XADgDfgIYImsCY3hYoDecBZAlUSA1romR0piW04pjWt5B9d5bb7GrW8sOW6O5IpS37/I3uA0xGIEJOAqreLF53ThysnGQIYSVMChrwBVU+Cqgz4enVPT7ApJ/VcOQJEihVQgKwbMR9IEU8kknISCLTAgGhLaOihJuQTgcUPYnm9ctQmz+B0SfP7D2X0LaBHnoo0EKax8Js/GJD8HhGuEp6PvM/wbYbrcbfUtLk5OVUctaWl1afeLk5NHJo83Zem10ojJhjVgjLW3U1vrMhhEroVRCR2EpzNWqbq06xEpo5kQzGosqLC+5JSzmZNIoOkNsH1qOFI2NVcarriXJCk/jpFQZLw5h0S1irTrNJrESSyHGk4klvdCj829jwC6mv945yH6EZiavKBklO9hZKKecaDyeNXwXQ7oeCuv6iz5JDApMiCiF2daRRq8V84t+UZQ6PxYjCfONTD/LYCheTBzqV3uEcDapf2qjak1MFCw/4vo6Gsms8tMZLaHR/ZVEzOhV1LDPToTzmhHFi38L2kYo5f4VQIDPbr/OX2bvwxAswZOwCocaC0qYgYiNVRRxJp1iuI+ozc8AE9gZEEThDCDgWRlFou0iNSK0JCQGzz95qn3y+LEjhxszI8O5TNEXKaHCrJjl+adWLdbcojvN0kxBWXKLppt3JDNqpbE+zYaYUZkWyd1FV1bQHPM8Vx+3YlIEpRRSty57fvbcnB/Fy8+9MpVWMyFLs8VE2B55/le/fGFk5PmVhW9O+QOaFV14tU0aU1fenUXDbwRD0tzASjWuLfKArfcnFSFadhZ79muWlbMslb2fvvLusxPVqKUF/DgwutLFIkRbNwsoWpoVGozH0lfe+cvmVGc0JEciZiJSOeAzPtZTH4uosbgq+BKhUSUVK67sSxgbHmjOopQGBbLbv+bv8HlK/jCYkIEiDEMdZmABWvAEPAVPw3mcaYQCfubjPUkmiKzxMJ2eA9PQzUXQdFVbBAqZHjf0NkRAsSNKG+JgJ+N2m1BDiXCoDUlIBJOJNgQhAMFAuwcRwI/QBj/4mN/XJgOYzFkbZFGQF0GUkMJ4PIaqarXAsgIWpdyXd5a0NNXas6RGWhFN/f+tLQgiPUWh1TVivt3YB3D+i88+8/S5z6099elPrq60jx9rHVk8dODjs/tnpicn6uNjleGh0kCR+JJJx20zqqnhkCx1T9RUpNQbrVS71KiNVt1dkjjuI4m7V7KnHd9p611Nb+quxHokie1IPtzyZuhF2S/L/teCSiCg/DYcDYejNzRb0+yvRVPRaGrGcmzbCSWLyWTxcKaUofsHzojjjHzLrRUKNfdK30R//8TB8nS5PI3Dc8PDc5uh0DcCkiSK8oISJFRGkIFA+KCHqb2QMs1U9JWcbefslz3M5OlYJhMzM5ljHqhTS7huIlkoPO6h9v9iplyeKf/ZQx32eEgB2S7TF6hMMZprXk8Qv0wROR2xyOEEIAqHQRACSCRIgMBRaO4ZFQQ8DCjgbPt1zfupUrRUyGmPLgE669v0x3WasH5t96Wz7p0tu+vqkAMXBuDzDXWgv6/oFiQB81EGgsd3z54eIgNNE8D7FlJgl8kq1hKRsa5ZzqNhElHL8ASpcWh62ke9CY+3GwpAJk1L6bWcpsl6CT3zajk6ZDQ6oXMUUq3ACzjDxqvD6DoRRLmOVl0u1vlvHqzjZuc0eTDJ15OFLT6EKp4bnBs0jA29Zgx2/vGzLK5sfGFuYw5DndN8vVFIPlj31HFT7Pxz6KFuTd8wjMGt53Ov7uh293J8+0v85+xN8r1BuVJq9HlSEXibTkyBiUK7WzEsehVDC6hgmDdMwzQ9N4OjYDSNlWmsuizrquPZmAo7DGQX3rt1/vwt7/H9zs27d3H67tZ3L928dOkme/OhmB5bBzz53c5NBG/kUtee2Pb3+N/5WcrnDBSg1qgUevNOLitRxBtEFcaReTkLfNHzcIv8zmGeQSph6gEZIiwiKiUx57g1rTpOXo2ZWkwy6Fje62i06Crw7zy401up9PK+3lGsyHH9wR09Htd5nx7f6vs9PrbWudD5w9lKnvflK5X8gzv5Cv+qp/BQDTd/iL9b3PrTfWBAZOLrZFOEfHiueT1IjImTYWQssBPAEXmTjPX8x3GeKpIYKRhkN3WPk2O7u4AAIyb9+2lUIigIhq6pfgkiqNA20dtdVMrv7lYkQvEBp1p1tq55T3Zs6xo7xuGDvlNd3rrm5RyD5e23+VU+QNVhBE41r/d4WddlNRkUeMwLRYsWD3Kvghrq2ss892N771DD/kBK0VjcGQNO5r5mGIYq6KXe7LjqZiVVJ3pIRBO8gPbt2533bv8ET9+/39m8P3D7oYCNe737eLp7JrwNy3yA6tcgSDf8HKmskS25SNlQrFt1PnDv3tTuzZ7Z0/Hm4jK8xC6zl4jB0g1yo1sqyH60ZHZ5apuQp279cQq7LfwLVgHTywAAAHicY2BkYGAA4nk3Fq+L57f5yiDPwgACl59HXUHQ/3VYGJgzgVwOBiaQKABolwwBAHicY2BkYGDO/K/DEMPCAAJAkpEBFbACADq+AgMBdgAiAAAAAAFVAAAD6QAsBAAAZQAgAAAAAABVABYAgABWANYBVgAAAAAAKAAoACgBZAISA1YDkgQUBFwEtgUQBWAFfgWUAAAAAQAAAA4AdAAOAAAAAAACADoASABsAAAA0wF3AAAAAHicfZC9bsJAEITH/IlIKVDaNCsrBRRnnS0TDPSGJm16BDZYIrZkmx/lGSKlSxvlEdLm6TI+Lk0KbN3ut3fj3TkDuMUHHDSPgz7uLLfQw8hyGw94tdyh5ttyF7GztNxD3/mi0unccGdgvmq4xf73lttYQlvuUPNpuYs3/FjuYeC8I8MaBXKkJtZAti7ytMhJT0iwoeCAFxbJJjswx1bX5BJbSgQBPE4TzLj+97vsBphAIeIKqPTxyEacERflNpHA0zKTv7nEYKIiFWifqiv2njm7REVJcyTsenEx56r5pljRes3THTUXL0McqfEwRch/LvSzZ4wMlYxj00FhYTxrW51N99DwidHluWuq1MSKZpKyyopcfN5lLnWdrg51sct4neFRe9NwJGovkahSxlrUQgLNdBY/FHUSd+GKSkVV1+77CxCUWYIAAAB4nGNgYgCD/80MRgzYAB8QMzIwMUQzMjEyM7IwsjKyMbIzcjByMnIxcrOX5mW6mhkYQGlDKG0EpY2htAmUNoXSZlDaHEpbQGlLAKWrGGcAAEu4AMhSWLEBAY5ZuQgACABjILABI0QgsAMjcLAORSAgS7gADlFLsAZTWliwNBuwKFlgZiCKVViwAiVhsAFFYyNisAIjRLMKCQUEK7MKCwUEK7MODwUEK1myBCgJRVJEswoNBgQrsQYBRLEkAYhRWLBAiFixBgNEsSYBiFFYuAQAiFixBgFEWVlZWbgB/4WwBI2xBQBEAAAA') format('woff'), /* chrome,firefox */
    url('//at.alicdn.com/t/font_1472309844_7554471.ttf') format('truetype'), /* chrome,firefox,opera,Safari, Android, iOS 4.2+*/
  url('//at.alicdn.com/t/font_1472309844_7554471.svg#iconfont') format('svg'); /* iOS 4.1- */
  src: url('//at.alicdn.com/t/font_1472309844_7554471.eot')\0; /* ie8 fix */

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
.icon-keyboardarrowleft:before { content: "\e609"; }

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
