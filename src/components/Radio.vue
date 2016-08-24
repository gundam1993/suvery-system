<template>
  <div class="radio-block">
    <div>
      <label>Q1</label><input type="text" placeholder="单选题" class="radiotitle">
    </div>
    <div>
      <input type="radio" name="qus-radio"><input type="text" placeholder="选项一">
    </div>
    <div>
      <input type="radio" name="qus-radio"><input type="text" placeholder="选项二">
    </div>
  </div>
</template>

<style>
  .radio-block
  {
    padding: 15px;
  }
  .radio-block:hover
  {
    background-color: #c0e3ea;
  }
  .radio-block input[type='text']
  {
    outline: none;
    border: none;
    font-size: 18px;
    line-height: 25px;
    background-color: transparent;
  }
</style>