<template>
    <div class="table">
        <table>
            <thead>
            <tr>
                <td id="choose" @mousedown="mousedown" @mousemove="mousemove" @mouseup="mouseup">11</td>
                <td>22</td>
                <td>33</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>11</td>
                <td>22</td>
                <td>33</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>


<script>

  export default {

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
    }

  }
</script>


<style lang="scss">

    .table {
        // width: 100%;
        table-layout: fixed;

        thead {
            td {
                table-layout: fixed;
                width: 120px;
                height: 60px;
                border: 1px solid red;
                cursor: col-resize;
            }

        }
        tbody {
            td {
                height: 30px;
                border: 1px solid green
            }
        }

    }
</style>