<template>
    <ReportsList></ReportsList>
</template>

<script>
    import Vue from 'vue';
    import ReportsList from "@/components/ReportsList";
    export default Vue.extend( {
        name: "Main",
        components: {
            ReportsList
        }
    })
</script>

<style scoped>

</style>