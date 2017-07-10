<template>
    <div class="signin">
        <normal-input
                v-for="(item, index) in signin"
                :label="item.text"
                :key="index">

        </normal-input>
    </div>
</template>

<script>
    import NormalInput from '../components/input.vue';

    export default {

      data() {
        return {
          signin: [{
            text: '用户名'
          }, {
            text: '密码'
          }, {
            text: '手机号'
          }]
        };
      },

      components: {NormalInput}
    };
</script>

<style lang="scss">
.signin {
    margin: 12px 6px;
}
</style>