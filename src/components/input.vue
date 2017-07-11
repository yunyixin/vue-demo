<template>
    <div class="custom-input">
        <label v-if="label">{{label}}</label>
        <!--
            相当于以下的语法糖：
            <input v-bind:value="name" v-on:input="name = $event.target.value">
            在组件中相当于
            <foo v-bind:value="name" v-on:input="name = arguments[0]"></foo>
        -->
        <input :placeholder="rule" v-model="value">
    </div>
</template>

<script>
  export default {
    props: {
      label: {type: String},
      value: {type: String},
      rule: {type: String, default: 'input...'}
    }
  };
</script>

<style lang="scss" scoped>
    .custom-input {
        margin-bottom: 6px;
        border: 2px solid olivedrab;

        label {
            color: red;
        }
    }
</style>