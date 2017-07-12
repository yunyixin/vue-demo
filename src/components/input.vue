<template>
    <div class="custom-input">
        <div class="label" v-if="label">{{label}}:</div>
        <!--
            相当于以下的语法糖：
            <input v-bind:value="name" v-on:input="name = $event.target.value">
            在组件中相当于
            <foo v-bind:value="name" v-on:input="name = arguments[0]"></foo>
        -->
        <input :placeholder="rule" v-model="dataValue">
    </div>
</template>

<script>
  export default {
    props: {
      label: {type: String},
      value: {type: String},
      rule: {type: String, default: 'input...'}
    },

    data: () => ({dataValue: ''})
  };
</script>

<style lang="scss" scoped>
    .custom-input {
        display: flex;
        width: 100%;
        height: 34px;
        margin: 10px 0;
        // border: 2px solid olivedrab;

        .label {
            width: 18%;
            color: red;
        }

        input {
            width: 70%;
            padding-left: 10px;
            cursor: text;
            border-radius: 4px;
            border: 1px solid red;
            outline: none;
        }
    }
</style>