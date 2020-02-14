<template>
    <v-btn icon :title="status">
        <v-icon :color="statuses[status].color">{{statuses[status].icon}}</v-icon>
    </v-btn>
</template>

<script>
    export default {
        name: "ReportStatus",
        props: ['status'],
        data(){
            return {
              statuses: {
                  draft: {
                      icon: 'mdi-arrow-up-bold-box-outline',
                      color: 'yellow'
                  },
                  ready: {
                      icon: 'mdi-check-circle',
                      color: 'green'
                  },
                  expired: {
                      icon: 'mdi-cancel',
                      color: 'red'
                  },
              }
            }
        },

    }
</script>

<style scoped>

</style>