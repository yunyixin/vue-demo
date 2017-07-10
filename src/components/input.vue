<template>
    <div class="custom-input">
        <label>{{label}}</label>
        <!--
            相当于以下的语法糖：
            <input v-bind:value="name" v-on:input="name = $event.target.value">
            在组件中相当于
            <foo v-bind:value="name" v-on:input="name = arguments[0]"></foo>
        -->
        <input placeholder="input..." v-model="value">
        <span>用户输入： {{value}}</span>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        label: '用户名',
        value: ''
      };
    }
  };
</script>

<style lang="scss" scoped>
    .custom-input {
        border: 2px solid olivedrab;

        label {
            color: red;
        }
    }
</style>