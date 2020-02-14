<template>
    <v-container v-if="draftReport">
        <h1 class="text-capitalize">{{draftReport.report.type}} Report</h1>
        <v-card>
            <v-form class="pa-6" @submit.prevent="saveReport">
                <h2>Report fields</h2>
                <v-text-field
                        v-for="k in Object.keys(draftReport.report)"
                        v-model="draftReport.report[k]"
                        :label="k"
                        :disabled="disabledFields.includes(k)"
                ></v-text-field>
                <h2>Sections</h2>
                <div v-for="(section, index) in draftReport.sections">
                    <h3>{{section.type}}</h3>
                    <div v-if="Object.keys(section.data).length">
                        <v-text-field
                                v-for="k in Object.keys(section.data)"
                                v-model="draftReport.sections[index].data[k]"
                                :label="k"
                        ></v-text-field>
                    </div>
                    <div v-else>No content</div>
                </div>
                <v-btn
                    type="submit"
                    color="success"
                    class="mt-3"
                >Save</v-btn>
            </v-form>
        </v-card>
    </v-container>
    <div class="text-center" v-else>Report not found</div>
</template>

<script>
    import {ReportsMapper} from "../store/modules/reports";
    export default {
        name: "Editor",
        data(){
          return {
              disabledFields: ['type', 'status', 'id'],
          }
        },
        computed: {
            ...ReportsMapper.mapState(['draftReport']),
        },
        methods: ReportsMapper.mapActions(['saveReport'])
    }
</script>

<style scoped>

</style>