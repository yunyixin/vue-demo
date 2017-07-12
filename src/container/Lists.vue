<template>
    <div class="list">
        <list :lists="lists" title="父组件传递属性"
              v-on:add="onAdd"
              v-on:delete="onDelete">
        </list>
    </div>
</template>

<script>
    import List from '../components/list.vue';

    export default {

      data() {

        return {
          lists: [{
            text: '111'
          }, {
            text: '222'
          }]
        };
      },

      methods: {
        onAdd() {
          this.lists.push({text: '新增'});
        },
        onDelete(index) {
          this.lists.splice(index, 1);   // dangerously
          // console.log(index, this.lists);
        }
      },

      components: {List}
    };
</script>