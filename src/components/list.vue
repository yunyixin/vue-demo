<template>
    <div class="list">
        <h3>{{title}}</h3>
        <ol>
            <li v-for="(item, index) in lists">
                {{index}}-{{item.text}} <button @click="onAdd">add</button>
            </li>
        </ol>
    </div>
</template>

<script>

  export default {

    props: {
      lists: {type: Array},
      title: {type: String, default: '列表标题'}
    },

    methods: {
      onAdd() {
        this.$emit('click');
      }
    }
  };
</script>


<style lang="scss">
    .list {
        list-style: none;
    }

</style>