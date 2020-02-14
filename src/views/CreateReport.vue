<template>
    <v-container class="v-card d-flex justify-space-around">
        <v-btn
                color="success"
                class="mt-3"
                @click="createReport('rental')"
        >Create Rental Report</v-btn>
        <v-btn
                color="success"
                class="mt-3"
                @click="createReport('sales')"
        >Create Sales Report</v-btn>
    </v-container>
</template>

<script>
    import {ReportsMapper} from "../store/modules/reports";

    export default {
        name: "CreateReport",
        methods: ReportsMapper.mapActions(['createReport'])
    }
</script>

<style scoped>

</style>