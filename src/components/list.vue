<template>
    <div class="list">
        <h3>{{title}}</h3>
        <ol>
            <li v-for="(item, index) in lists">
                <!--<a href="/lists/${index}">{{index}}-{{item.text}}</a>-->
                <router-link :to="`/lists/${index}`">{{index}}-{{item.text}}</router-link>
                <div class="button">
                    <button @click="onAdd">add</button>
                    <button @click="onDelete(index)">delete</button>
                </div>
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
        this.$emit('add');
      },
      onDelete(index) {
        this.$emit('delete', index);
      }
    }
  };
</script>


<style lang="scss" scoped>
    .list {

        ol {
            width: 400px;

            li {
                height: 30px;
                line-height: 30px;

                a {
                    text-decoration: none;
                    color: black;

                    &:hover {
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                .button {
                    float: right;
                }
            }
        }
    }

</style>