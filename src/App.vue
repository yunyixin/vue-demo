<template>
    <div id="app">
        <div class="nav"> app-nav </div>
        <div class="view">
            <div> sidebar: {{msg}}</div>
            <div>content: {{content}}</div>
            <normal-input></normal-input>
        </div>
    </div>

</template>

<script>
  import normalInput from './components/input.vue';

  export default{
    name: 'app',
    data() {
      return {
        msg: 'welcome',
        content: 'this is a template for vue'
      };
    },
    components: {normalInput}
  };
</script>

<style>
    #app {
        width: 300px;
        height: 60px;
        background: greenyellow;
    }

    .nav {
        margin: 4px;
        border: 1px solid red;
    }

    .view {
        margin: 10px;
        border: 1px solid darkgray;
    }
</style>