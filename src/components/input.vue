<template>
    <div class="custom-input">
        <label>{{label}}</label>
        <input placeholder="input...">
    </div>
</template>

<script>
  export default {
    data() {
      return {
        label: '用户名CESHI'
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