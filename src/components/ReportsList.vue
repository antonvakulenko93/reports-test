<template>
    <v-container>
        <h1>Reports</h1>
        <v-list min-height="322px">
            <ReportCard v-for="report in pageReports" :key="report.report.id" :report="report">
            </ReportCard>
        </v-list>
        <v-pagination
                v-if="!!pagesCount"
                v-model="page"
                :length="pagesCount"
        ></v-pagination>
        <router-link
                :to="'/create'"
                class="v-btn pa-2"
        >Create Report
        </router-link>
    </v-container>
</template>

<script>
    import {ReportsMapper} from "../store/modules/reports";
    import ReportCard from "@/components/ReportCard";
    export default {
        name: "ReportsList",
        components: {ReportCard},
        mounted() {
            this.fetchReports();
        },
        methods: {
            ...ReportsMapper.mapActions(['fetchReports']),
            ...ReportsMapper.mapMutations(['setCurrentPage']),
        },
        computed: {
            ...ReportsMapper.mapState([ 'currentPage']),
            ...ReportsMapper.mapGetters(['pageReports', 'pagesCount']),
            page: {
                get(){
                    return this.currentPage;
                },
                set(value){
                    this.setCurrentPage(value);
                }
            }
        }
    }
</script>

<style scoped>

</style>