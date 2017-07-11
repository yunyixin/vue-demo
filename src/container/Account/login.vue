<template>
    <div class="login">
        <normal-input
                v-for="(item, index) in login"
                :key="index"
                :label="item.text"
                :rule="item.rule">

        </normal-input>
    </div>
</template>

<script>
  import NormalInput from '../../components/input.vue';

  export default {

    data() {
      return {
        login: [{
          text: '用户名',
          rule: '数字字母组合'
        }, {
          text: '密码',
          rule: '6位'
        }, {
          text: '手机号'
        }]
      };
    },

    methods: {
      mousedown(e) {
        const obj = document.querySelector('#choose');
        const rect = obj.getBoundingClientRect();

        console.log(obj, e.target);
        console.log('rect', rect);

        // e.target.setCapture(true);
        /* e.target.addEventListener("mousemove", mouseMoved, false);
        const mouseMoved = function (e) {
          const rect = e.target.getBoundingClientRect();

          e.target.style.width = `${e.clientX - rect.left}px`;

          console.log('e', e);
        }*/


      },

      mousemove(e) {
        // const obj = document.querySelector('#choose');
        const rect = e.target.getBoundingClientRect();

        if (rect.width > 20) {
          e.target.style.width = `${e.clientX - rect.left}px`;
        } else {
          e.target.style.width = `${e.clientX - rect.left}px`;
        }


        console.log('e', e);
      },

      mouseup(e) {
        console.log('mouseup', e);

        // e.target.removeEventListener("mousemove", mouseMoved, false);
      }
    },

    components: {NormalInput}
  };
</script>

<style lang="scss">
    .login {
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        margin: 12px 6px;
    }
</style>