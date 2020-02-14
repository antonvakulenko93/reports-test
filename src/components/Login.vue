<template>
    <v-card width="90%" max-width="500px" class="pa-3 mt-10 ma-auto">
        <v-form lazy-validation @submit.prevent="login({ username, password})">
            <v-text-field
                v-model="username"
                label="Email"
                type="email"
                :rules="[validator.email.required, validator.email.valid]"
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                type="password"
                :rules="[validator.password.required]"
            ></v-text-field>
            <v-btn
                type="submit"
                color="success"
                class="mt-3"
            >Login</v-btn>
        </v-form>
    </v-card>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Validator from '@/utils/Validator';
    import { UserMapper } from '@/store/modules/user';

    export default Vue.extend({
        data: () => ({
            validator: Validator,
            username: '',
            password: '',
        }),
        methods: UserMapper.mapActions(['login'])
    })
</script>

<style scoped>
</style>