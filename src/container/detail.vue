<template>
    <ol>
        <todo-item
                v-for="(item, index) in lists"
                v-bind:list="item"
                v-bind:key="index">
        </todo-item>   <!-- 全局组件 -->
    </ol>
</template>

<script>

    export default {

      data() {

        return {
          lists: [{
            text: '111'
          }, {
            text: '222'
          }]
        };
      }
    };
</script>