<template>
    <v-list-group>
        <template v-slot:activator>
            <v-list-item
            >
                <v-list-item-content>
                    <v-list-item-title v-text="report.report.name"></v-list-item-title>
                    <v-list-item-subtitle>type: <span class="text-uppercase">{{report.report.type}}</span></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <ReportStatus :status="report.report.status"></ReportStatus>
                </v-list-item-action>
            </v-list-item>
        </template>
        <v-list-item
                v-for="(section, i) in report.sections"
                :key="i"
                link

        >
            <v-list-item-content>
                <v-list-item-title class="text-uppercase" v-text="section.type"></v-list-item-title>
                <template  v-if="Object.keys(section.data).length">
                    <v-list-item-subtitle  v-for="[k,v] in Object.entries(section.data)">{{k}}: {{v}}</v-list-item-subtitle>
                </template>
                <v-list-item-subtitle v-else>No content</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list-group>

</template>

<script>
    import ReportStatus from "@/components/ReportStatus";
    export default {
        name: "ReportCard",
        components: {ReportStatus},
        props: ['report']
    }
</script>

<style scoped>

</style>