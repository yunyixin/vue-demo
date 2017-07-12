<template>
    <div class="account">
        <page-header></page-header>
        <div class="center">
            <router-view></router-view>
        </div>
        <page-footer></page-footer>
    </div>
</template>


<script>
    import PageHeader from '../../components/header.vue';
    import PageFooter from '../../components/footer.vue';

    export default {

      components: {PageHeader, PageFooter}
    };
</script>


<style lang="scss">
    .center {
        display: flex;
        height: 400px;
        justify-content: center;
        align-items: center;
    }
</style>